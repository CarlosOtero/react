import React, { memo } from 'react'
import Styles from './login-header-styles.scss'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.img_logo}></div>
    </header>
  )
}

export default memo(LoginHeader)
