import type { FormEvent } from 'react'

import planeImage from '../../assets/images/contact-plane.png'

import styles from './ContactForm.module.scss'

export const ContactForm = () => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)

		console.log({
			name: formData.get('name'),
			phone: formData.get('phone'),
			weight: formData.get('weight'),
		})
	}

	return (
		<section className={styles.section}>
			<img src={planeImage} className={styles.plane} alt='' />

			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.heading}>
						<h2>Оставить заявку</h2>

						<p>
							Заполните форму — и мы свяжемся с вами
							<span>в ближайшее время</span>
						</p>
					</div>

					<form className={styles.form} onSubmit={handleSubmit}>
						<input
							type='text'
							name='name'
							placeholder='Имя'
							aria-label='Имя'
							required
						/>

						<input
							type='tel'
							name='phone'
							placeholder='Ваш телефон'
							aria-label='Ваш телефон'
							required
						/>

						<input
							type='number'
							name='weight'
							placeholder='Вес груза (кг)'
							aria-label='Вес груза'
							min='0'
							step='0.1'
						/>

						<button type='submit'>Отправить заявку</button>

						<p className={styles.policy}>
							Нажимая на “Отправить заявку”, соглашаюсь с условиями Политики
							обработки
							<br />
							персональных данных
						</p>
					</form>
				</div>
			</div>
		</section>
	)
}
