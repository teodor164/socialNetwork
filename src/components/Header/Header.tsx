import React, {FC} from 'react'
import { NavLink } from 'react-router-dom'
import Preloader from '../common/Preloader/Preloader'
import s from './Header.module.css'

type PropsType = {
  isFetching: boolean
  isAuth: boolean

  login: string | null
  userLogOut: () => void
}
const Header: FC<PropsType> = (props) => {
  return (
    <header className={s.header}>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <div className={s.loginBlock}>
          {props.isAuth ? (
            <div>
              <div>{props.login}</div>
              <div>
                <NavLink
                  to={'/login'}
                  className={s.login}
                  onClick={() => {
                    props.userLogOut()
                  }}
                >
                  Logout
                </NavLink>
              </div>
            </div>
          ) : (
            <NavLink to={'/login'}>Login</NavLink>
          )}
        </div>
      )}
    </header>
  )
}

export default Header
