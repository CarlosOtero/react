import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Styles from './login-styles.scss'
import { Footer, LoginHeader, Input, FormStatus, SubmitButton } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { IValidation } from '@/presentation/protocols/validation'
import { IAuthentication, ISaveAccessToken } from '@/domain/usecases'

type Props = {
  validation: IValidation
  authentication: IAuthentication
  saveAccessToken: ISaveAccessToken
}

const Login: React.FC<Props> = ({ validation, authentication, saveAccessToken }: Props) => {
  const history = useHistory()
  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })
  //
  useEffect(() => {
    const { email, password } = state
    const formData = { email, password }
    const emailError = validation.validate('email', formData)
    const passwordError = validation.validate('password', formData)
    setState({
      ...state,
      emailError,
      passwordError,
      isFormInvalid: !!emailError || !!passwordError
    })
  }, [state.email, state.password])
  //
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      // localStorage.setItem('accessToken', account.accessToken)
      await saveAccessToken.save(account.accessToken)
      history.replace('/')
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form data-testid="form" className={Styles.form} autoComplete="off" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder='Digite seu email'/>
          <Input type="password" name="password" placeholder='Digite sua senha'/>
          <SubmitButton text="Entrar" />
          <Link data-testid='signup-link' to="/signup" className={Styles.link}>Criar conta</Link>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
