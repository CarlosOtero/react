import React, { memo } from 'react'
import Styles from './login-header-styles.scss'
import { Logo } from '@/presentation/components'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.headerWrap}>
      <Logo />
    </header>
  )
}

export default memo(LoginHeader)
