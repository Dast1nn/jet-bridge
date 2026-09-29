import cardTexture from '../../assets/images/delivery-card-texture.png'
import backgroundImage from '../../assets/images/delivery-types-bg.png'

import styles from './DeliveryTypes.module.scss'

const deliveryTypes = [
	{
		label: 'Электроника и техника',
		text: 'Смартфоны, ноутбуки, аксессуары',
		variant: 'orange',
		className: styles.cardOne,
		withTexture: true,
	},
	{
		label: 'Запчасти и комплектующие',
		text: 'Автозапчасти, шины, техмодули',
		variant: 'white',
		className: styles.cardTwo,
	},
	{
		label: 'Одежда, обувь и косметика',
		text: 'Одежда, обувь, текстиль, бьюти-продукты',
		variant: 'blue',
		className: styles.cardThree,
		withTexture: true,
	},
	{
		label: 'Медицинские и автотовары',
		text: 'Медприборы, автоаксессуары',
		variant: 'orange',
		className: styles.cardFour,
	},
]

export const DeliveryTypes = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>Что мы доставляем</h2>

				<div className={styles.content}>
					<img
						className={styles.background}
						src={backgroundImage}
						alt='JetBridge cargo delivery'
					/>

					<div className={styles.cards}>
						{deliveryTypes.map(item => (
							<article
								key={item.label}
								className={`
                  ${styles.card}
                  ${styles[item.variant]}
                  ${item.className}
                `}
							>
								{item.withTexture && (
									<img className={styles.texture} src={cardTexture} alt='' />
								)}

								<div className={styles.cardContent}>
									<div className={styles.label}>{item.label}</div>

									<h3>{item.text}</h3>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
