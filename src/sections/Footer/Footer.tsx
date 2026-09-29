import footerClouds from '../../assets/images/footer-clouds.png'

import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<img src={footerClouds} className={styles.clouds} alt='' />

			<div className={styles.blueBackground} />
		</footer>
	)
}
