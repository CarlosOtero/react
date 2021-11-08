import React from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'

const FormStatus: React.FC = () => {
  return (
    <span className={Styles.errorWrap}>
      <Spinner className={Styles.spinner}/>
      <span className={Styles.error}>
        Erro
      </span>
    </span>
  )
}

export default FormStatus
