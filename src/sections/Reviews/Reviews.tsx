import { useRef } from 'react'

import review1 from '../../assets/images/review-1.png'
import review2 from '../../assets/images/review-2.png'
import review3 from '../../assets/images/review-3.png'

import divider from '../../assets/icons/review-line.svg'
import arrow from '../../assets/icons/slider-arrow.svg'

import styles from './Reviews.module.scss'

const reviews = [
	{
		name: 'Арман С. Алматы',
		avatar: review1,
		text: 'Привезли ноутбук из Дубая за 6 дней, всё чётко, с фото, трекингом и оповещениями. Очень доволен! Привезли ноутбук из Дубая за 6 дней, всё чётко, с фото, трекингом и оповещениями. Очень доволен!',
	},
	{
		name: 'Асель Б., директор ТОО',
		avatar: review2,
		text: 'Работаем по ВЭД с компанией больше года. Надежные партнёры по логистике, всё по договору. Очень ценим стабильность и прозрачность в этом партнёрстве.',
	},
	{
		name: 'Арман С. Алматы',
		avatar: review3,
		text: 'Привезли ноутбук из Дубая за 6 дней, всё чётко, с фото, трекингом и оповещениями. Очень доволен! Привезли ноутбук из Дубая за 6 дней, всё чётко, с фото, трекингом и оповещениями. Очень доволен!',
	},
	{
		name: 'Асель Б., директор ТОО',
		avatar: review2,
		text: 'Работаем по ВЭД с компанией больше года. Надежные партнёры по логистике, всё по договору. Очень ценим стабильность и прозрачность в этом партнёрстве.',
	},
	{
		name: 'Арман С. Алматы',
		avatar: review3,
		text: 'Привезли ноутбук из Дубая за 6 дней, всё чётко, с фото, трекингом и оповещениями. Очень доволен! Привезли ноутбук из Дубая за 6 дней, всё чётко, с фото, трекингом и оповещениями. Очень доволен!',
	},
	{
		name: 'Асель Б., директор ТОО',
		avatar: review2,
		text: 'Работаем по ВЭД с компанией больше года. Надежные партнёры по логистике, всё по договору. Очень ценим стабильность и прозрачность в этом партнёрстве.',
	},
]

export const Reviews = () => {
	const sliderRef = useRef<HTMLDivElement>(null)

	const scrollSlider = (direction: 'left' | 'right') => {
		if (!sliderRef.current) return

		const cardWidth = 305
		const gap = 20

		sliderRef.current.scrollBy({
			left: direction === 'right' ? cardWidth + gap : -(cardWidth + gap),
			behavior: 'smooth',
		})
	}

	return (
		<section className={styles.reviews}>
			<div className={styles.container}>
				<h2 className={styles.title}>Отзывы</h2>

				<div className={styles.sliderWrapper}>
					<button
						type='button'
						className={`${styles.sliderButton} ${styles.previous}`}
						onClick={() => scrollSlider('left')}
						aria-label='Предыдущие отзывы'
					>
						<img src={arrow} alt='' />
					</button>

					<div ref={sliderRef} className={styles.slider}>
						{reviews.map((review, index) => (
							<article key={`${review.name}-${index}`} className={styles.card}>
								<div className={styles.cardHeader}>
									<img src={review.avatar} className={styles.avatar} alt='' />

									<h3>{review.name}</h3>
								</div>

								<img src={divider} className={styles.divider} alt='' />

								<p className={styles.text}>{review.text}</p>
							</article>
						))}
					</div>

					<button
						type='button'
						className={`${styles.sliderButton} ${styles.next}`}
						onClick={() => scrollSlider('right')}
						aria-label='Следующие отзывы'
					>
						<img src={arrow} alt='' />
					</button>
				</div>
			</div>
		</section>
	)
}
