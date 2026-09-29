import styles from './Header.module.scss'

import menuIcon from '../../assets/icons/menu.svg'
import logo from '../../assets/images/logo.png'

export const Header = () => {
	return (
		<header className={styles.header}>
			<img className={styles.logo} src={logo} alt='Jet Bridge' />

			<div className={styles.actions}>
				<div className={styles.languages}>
					<button className={styles.activeLanguage}>RU</button>

					<span>/</span>

					<button>KZ</button>
				</div>

				<button className={styles.menuButton}>
					<span>МЕНЮ</span>

					<img src={menuIcon} alt='' />
				</button>
			</div>
		</header>
	)
}
