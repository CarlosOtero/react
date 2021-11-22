import React, { useEffect, useState } from 'react'
import Styles from './signup-styles.scss'
import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { IValidation } from '@/presentation/protocols/validation'
import { IAddAccount } from '@/domain/usecases'

type Props = {
  validation: IValidation
  addAccount: IAddAccount
}

const Signup: React.FC<Props> = ({ validation, addAccount }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    nameError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmationError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password),
      passwordConfirmationError: validation.validate('passwordConfirmation', state.passwordConfirmation)
    })
  }, [state.name, state.email, state.password, state.passwordConfirmation])
  //
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    setState({ ...state, isLoading: true })
    await addAccount.add({
      name: state.name,
      email: state.email,
      password: state.password,
      passwordConfirmation: state.passwordConfirmation
    })
  }

  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form data-testid="form" className={Styles.form} autoComplete="off" onSubmit={handleSubmit}>
          <h2>Criar Conta</h2>
          <Input type="text" name="name" placeholder='Digite seu nome'/>
          <Input type="email" name="email" placeholder='Digite seu email'/>
          <Input type="password" name="password" placeholder='Digite sua senha'/>
          <Input type="password" name="passwordConfirmation" placeholder='Repita sua senha'/>
          <button data-testid="submit" disabled={ !!state.nameError || !!state.emailError || !!state.passwordError || !!state.passwordConfirmationError } className={Styles.submit} type="submit">Gravar</button>
          <span className={Styles.link}>Voltar para Login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Signup
