import Heading from "@/components/primitive/Heading"
import { NavLink } from "react-router-dom"
import styles from "@/styles/global/header.module.sass"

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__left']}>
        <Heading text="Bridge Auction Intelligence" level={1} />
        <nav className={styles['header__nav']}>
          <NavLink to="/" className={ ({ isActive }) => isActive ? styles['header__nav__link--active'] : styles['header__nav__link']}>Recent Matches</NavLink>
          <NavLink to="/search" className={ ({ isActive }) => isActive ? styles['header__nav__link--active'] : styles['header__nav__link']}>Search</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header