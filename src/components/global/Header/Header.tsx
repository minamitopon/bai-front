import { NavLink } from "react-router-dom"
import Img from "@/components/primitive/Img/Img"
import Heading from "@/components/primitive/Heading/Heading"
import styles from "@/components/global/Header/header.module.sass"
import Logo from "@/assets/svg/header-logo.svg"

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__left']}>
        <div className={styles['header__logo-wrapper']}>
          <Img src={Logo} alt="Bridge Auction Intelligence" />
          <Heading text="Bridge Auction Intelligence" level={1} />
        </div>
        <nav className={styles['header__nav']}>
          <NavLink to="/" className={ ({ isActive }) => isActive ? styles['header__nav__link--active'] : styles['header__nav__link']}>Recent Matches</NavLink>
          <NavLink to="/search" className={ ({ isActive }) => isActive ? styles['header__nav__link--active'] : styles['header__nav__link']}>Search</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header