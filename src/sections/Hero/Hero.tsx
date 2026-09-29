import { Header } from '../../components/Header/Header'

import heroBg from '../../assets/images/hero-bg.png'
import tariffIcon from '../../assets/images/tariff-icon.png'

import styles from './Hero.module.scss'

export const Hero = () => {
	return (
		<section
			className={styles.hero}
			style={{
				backgroundImage: `url(${heroBg})`,
			}}
		>
			<div className={styles.blueOverlay} />
			<div className={styles.bottomOverlay} />

			<div className={styles.container}>
				<Header />

				<div className={styles.content}>
					<div className={styles.text}>
						<h1>
							<span className={styles.brand}>Jet Bridge</span>

							<span>— ДОСТАВКА ИЗ ОАЭ</span>
							<span>В КАЗАХСТАН ЗА 5–7 ДНЕЙ</span>
						</h1>

						<p>
							Посылки, техника, запчасти и грузы для бизнеса.
							<br />
							Всё под ключ: склад, трекинг, таможня.
						</p>
					</div>

					<div className={styles.buttons}>
						<button className={styles.calculateButton}>
							РАССЧИТАТЬ СТОИМОСТЬ
						</button>

						<button className={styles.tariffButton}>
							<span>ОЗНАКОМИТЬСЯ С ТАРИФОМ</span>

							<img src={tariffIcon} alt='' />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
