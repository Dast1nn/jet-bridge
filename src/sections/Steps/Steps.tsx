import stepsBg from '../../assets/images/steps-bg.png'

import arrowRight from '../../assets/icons/arrow-right.svg'
import deliveryIcon from '../../assets/icons/step-delivery.svg'
import onlineIcon from '../../assets/icons/step-online.svg'
import planeIcon from '../../assets/icons/step-plane.svg'
import warehouseIcon from '../../assets/icons/step-warehouse.svg'

import styles from './Steps.module.scss'

const steps = [
	{
		title: 'Заявка онлайн',
		description:
			'Вы заполняете форму или пишете в WhatsApp — быстро и без звонков',
		icon: onlineIcon,
		className: styles.online,
	},
	{
		title: 'Приёмка в Дубае',
		description:
			'Груз поступает на наш склад, проверяется, фотографируется и готовится к отправке',
		icon: warehouseIcon,
		className: styles.warehouse,
	},
	{
		title: 'Отправка авиа доставкой',
		description:
			'Мы отправляем ваш груз ближайшим рейсом в РК. Включено: трекинг и экспортное оформление',
		icon: planeIcon,
		className: styles.plane,
	},
	{
		title: 'Доставка и получение',
		description:
			'Оформляем таможню, сообщаем статус и передаём груз получателю в Алмате. Возможна доставка по всей территории Казахстана.',
		icon: deliveryIcon,
		className: styles.delivery,
	},
]

export const Steps = () => {
	return (
		<section className={styles.steps}>
			<div className={styles.container}>
				<img src={stepsBg} className={styles.background} alt='' />

				<div className={styles.intro}>
					<div>
						<h2>Как работает JetBridge</h2>

						<p>
							От заявки до получения — весь процесс под контролем. Мы берём на
							себя всю логистику, склад, документы и доставку. Вам нужно только
							отправить груз — остальное сделаем мы.
						</p>
					</div>

					<button type='button' className={styles.contactButton}>
						<span>Связаться с нами</span>

						<span className={styles.arrow}>
							<img src={arrowRight} alt='' />
						</span>
					</button>
				</div>

				<div className={styles.cards}>
					{steps.map(step => (
						<article
							key={step.title}
							className={`${styles.card} ${step.className}`}
						>
							<div className={styles.cardHeader}>
								<h3>{step.title}</h3>

								<div className={styles.iconBox}>
									<img src={step.icon} alt='' />
								</div>
							</div>

							<p>{step.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
