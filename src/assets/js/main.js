import {burgerMenu} from './functions/burger'
import './functions/scrollToTop'

burgerMenu()

const toggleButtons = document.querySelectorAll(
	'.mobile-list__item-has-children'
)
const subMenus = document.querySelectorAll('.mobile-submenu')

toggleButtons.forEach((button, index) => {
	button.addEventListener('click', e => {
		resetActiveSubmenu()
		resetActiveToggle()
		toggleButtons[index].classList.toggle('active')
		subMenus[index].classList.toggle('active')

		if (e.target.className === 'mobile-submenu__btn') {
			resetActiveSubmenu()
			resetActiveToggle()
		}
	})
})

const resetActiveSubmenu = () => {
	subMenus.forEach(menu => {
		menu.classList.remove('active')
	})
}

const resetActiveToggle = () => {
	toggleButtons.forEach(btn => {
		btn.classList.remove('active')
	})
}
