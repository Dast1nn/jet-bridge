import blueBg from '../../assets/images/tariffs-blue-bg.jpg'
import orangeBg from '../../assets/images/tariffs-orange-bg.jpg'

import cloudLeftBig from '../../assets/images/cloud-left-big.png'
import cloudLeftSmall from '../../assets/images/cloud-left-small.png'
import cloudRightBig from '../../assets/images/cloud-right-big.png'
import cloudRightSmall from '../../assets/images/cloud-right-small.png'

import cargoIcon from '../../assets/icons/tariff-cargo.svg'
import miniIcon from '../../assets/icons/tariff-mini.svg'
import standardIcon from '../../assets/icons/tariff-standard.svg'

import styles from './Tariffs.module.scss'

type Tariff = {
	title: string
	description: string
	items: string[]
	price: string
	term: string
	icon: string
	variant: 'orange' | 'blue'
}

const tariffs: Tariff[] = [
	{
		title: 'Мини посылка',
		description: 'Для личных заказов, запчастей, косметики, документов и др.',
		items: [
			'Все включено: склад, трекинг, таможня',
			'Удобно для маркетплейсов',
			'Вес: до 10 кг',
		],
		price: 'Цена: от $8 за отправление',
		term: 'Срок: 5–7 дней',
		icon: miniIcon,
		variant: 'orange',
	},
	{
		title: 'Стандартная доставка',
		description:
			'Для личных и бизнес заказов, техники, косметики, документов, запчастей и др.',
		items: [
			'Все включено: склад, трекинг, таможня',
			'Удобно для маркетплейсов',
			'Вес: до 50 кг',
		],
		price: 'Цена: от $8 за отправление',
		term: 'Срок: 5–7 дней',
		icon: standardIcon,
		variant: 'blue',
	},
	{
		title: 'Крупный груз / партия',
		description:
			'Для личных и бизнес заказов, техники, косметики, документов, запчастей и др.',
		items: [
			'Все включено: склад, трекинг, таможня',
			'Удобно для маркетплейсов',
			'Вес: от 100 г',
		],
		price: 'Цена: от $8 за отправление',
		term: 'Срок: 5–7 дней',
		icon: cargoIcon,
		variant: 'orange',
	},
]

export const Tariffs = () => {
	return (
		<section className={styles.tariffs}>
			<div className={styles.clouds}>
				<img src={cloudLeftBig} className={styles.cloudLeftBig} alt='' />

				<img src={cloudRightBig} className={styles.cloudRightBig} alt='' />

				<img src={cloudLeftSmall} className={styles.cloudLeftSmall} alt='' />

				<img src={cloudRightSmall} className={styles.cloudRightSmall} alt='' />
			</div>

			<div className={styles.container}>
				<h2 className={styles.title}>Технологии, которые работают на вас</h2>

				<div className={styles.cards}>
					{tariffs.map(tariff => (
						<article
							key={tariff.title}
							className={`${styles.card} ${
								tariff.variant === 'blue' ? styles.blueCard : styles.orangeCard
							}`}
						>
							<img
								className={styles.cardBackground}
								src={tariff.variant === 'blue' ? blueBg : orangeBg}
								alt=''
							/>

							<div className={styles.overlay} />

							<div className={styles.cardContent}>
								<div className={styles.cardInfo}>
									<h3>{tariff.title}</h3>

									<div className={styles.text}>
										<p>{tariff.description}</p>

										<ul>
											{tariff.items.map(item => (
												<li key={item}>{item}</li>
											))}
										</ul>

										<p>{tariff.price}</p>
										<p>{tariff.term}</p>
									</div>
								</div>

								<img src={tariff.icon} className={styles.icon} alt='' />

								<button type='button' className={styles.button}>
									Оставить заявку
								</button>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
