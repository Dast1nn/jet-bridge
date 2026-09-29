import advantageImage1 from '../../assets/images/advantages-1.png'
import advantageImage2 from '../../assets/images/advantages-2.png'
import logo from '../../assets/images/logo.png'

import styles from './Advantages.module.scss'

const advantages = [
	{
		title: 'Быстрая доставка за 5–7 дней',
		description:
			'Авиа-отправка из ОАЭ без задержек и перегрузок! Вы точно знаете когда получите ваш груз',
		className: styles.fast,
	},
	{
		title: 'Цифровой сервис без звонков и ожиданий',
		description: 'Заявка, трекинг, уведомления — всё онлайн, в личном кабинете',
		className: styles.digital,
	},
	{
		title: 'Гибкие тарифы для B2C и B2B',
		description: 'Лояльный подход к каждому клиенту!',
		className: styles.flexible,
	},
	{
		title: 'Полное таможенное оформление и ВЭД',
		description: 'Берём на себя документы, инвойсы, страхование',
		className: styles.customs,
	},
	{
		title: 'Собственный склад в Дубае',
		description:
			'Принимаем, проверяем, фотографируем, упаковываем и объединяем грузы.',
		className: styles.warehouse,
	},
]

export const Advantages = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.watermark}>
					<img src={logo} alt='' />
				</div>

				<div className={`${styles.photo} ${styles.photoFirst}`}>
					<img src={advantageImage1} alt='JetBridge logistics' />
					<div className={styles.photoOverlay} />
				</div>

				<div className={`${styles.photo} ${styles.photoSecond}`}>
					<img src={advantageImage2} alt='JetBridge warehouse' />
					<div className={styles.photoOverlay} />
				</div>

				<h2 className={styles.title}>
					Наши ключевые преимущества — в каждом этапе логистики
				</h2>

				<div className={styles.cards}>
					{advantages.map(item => (
						<article
							key={item.title}
							className={`${styles.card} ${item.className}`}
						>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
