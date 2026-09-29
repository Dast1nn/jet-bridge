import { About } from './sections/About/About'
import { Advantages } from './sections/Advantages/Advantages'
import { ContactForm } from './sections/ContactForm/ContactForm'
import { Contacts } from './sections/Contacts/Contacts'
import { DeliveryTypes } from './sections/DeliveryTypes/DeliveryTypes'
import { Footer } from './sections/Footer/Footer'
import { Hero } from './sections/Hero/Hero'
import { Reviews } from './sections/Reviews/Reviews'
import { Steps } from './sections/Steps/Steps'
import { Tariffs } from './sections/Tariffs/Tariffs'

function App() {
	return (
		<main>
			<Hero />
			<About />
			<Advantages />
			<Tariffs />
			<Steps />
			<DeliveryTypes />
			<Reviews />
			<ContactForm />
			<Contacts />
			<Footer />
		</main>
	)
}

export default App
