import mapImage from '../../assets/images/contacts-map.png'

import instagramIcon from '../../assets/icons/instagram.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import tiktokIcon from '../../assets/icons/tiktok.svg'

import styles from './Contacts.module.scss'

export const Contacts = () => {
	return (
		<section className={styles.contacts}>
			<div className={styles.container}>
				<h2 className={styles.title}>Контакты</h2>

				<div className={styles.map}>
					<img src={mapImage} alt='Расположение офиса JetBridge' />
				</div>

				<div className={styles.info}>
					<div className={styles.column}>
						<div className={styles.infoItem}>
							<h3>Адрес офиса</h3>

							<p>Дубай, UAE</p>
						</div>

						<div className={styles.infoItem}>
							<h3>Телефон</h3>

							<a href='tel:+77777777777'>+7 777 777 77 77</a>
						</div>
					</div>

					<div className={styles.column}>
						<div className={styles.infoItem}>
							<h3>Email</h3>

							<a href='mailto:info@mediapeace.com'>info@mediapeace.com</a>
						</div>

						<div className={styles.socialBlock}>
							<h3>Мессенджеры и социальные сети</h3>

							<div className={styles.socials}>
								<a href='#' aria-label='LinkedIn'>
									<img src={linkedinIcon} alt='' />
								</a>

								<a href='#' aria-label='Instagram'>
									<img src={instagramIcon} alt='' />
								</a>

								<a href='#' aria-label='TikTok'>
									<img src={tiktokIcon} alt='' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
