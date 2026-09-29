import aboutImage from '../../assets/images/about.png'

import styles from './About.module.scss'

export const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.info}>
						<div>
							<h2>О компании JetBridge</h2>

							<div className={styles.description}>
								<p>
									JetBridge — это международная логистическая компания,
									предоставляющая авиа-доставку из ОАЭ в Казахстан «под ключ».
									Мы обеспечиваем полный цикл: от приёмки и консолидации груза
									на собственном складе в Дубае до оформления всех документов и
									доставки получателю в РК. Работаем как с частными клиентами,
									так и с бизнесом: оформляем контракты, инвойсы, HS-коды и
									сопровождаем ВЭД.
								</p>

								<p>
									Наш подход — это скорость, прозрачность и технологичность.
									Благодаря цифровым инструментам клиент всегда знает, где
									находится его груз, сколько он стоит и когда будет доставлен.
								</p>
							</div>
						</div>

						<button className={styles.button}>Рассчитать стоимость</button>
					</div>

					<div className={styles.imageWrapper}>
						<img src={aboutImage} alt='JetBridge logistics' />
					</div>
				</div>
			</div>
		</section>
	)
}
