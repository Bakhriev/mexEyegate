import './functions/scrollToTop'

const toggleButtons = document.querySelectorAll(
	'.mobile-list__item-has-children'
)
const subMenus = document.querySelectorAll('.mobile-submenu')
const mobileClose = document.querySelector('.mobile-menu__btn')
const mobileMenu = document.querySelector('.mobile-menu')

const burger = document.querySelector('.burger')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const elements = [burger, mobileMenu, overlay]

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

mobileClose.addEventListener('click', () => {
	resetActiveSubmenu()
	resetActiveToggle()
	toggleActiveClass()
})

const toggleActiveClass = () => {
	elements.forEach(element => element.classList.toggle('active'))
	body.classList.toggle('disable-scroll')
}

export const burgerMenu = () => {
	burger.addEventListener('click', toggleActiveClass)

	overlay.addEventListener('click', toggleActiveClass)

	window.addEventListener('resize', () => {
		const {innerWidth} = window
		if (innerWidth > 991.98) {
			elements.forEach(element => element.classList.remove('active'))
			body.classList.remove('disable-scroll')
		}
	})
}
burgerMenu()
