const scrollTop = document.querySelector('.scroll-top')

scrollTop.addEventListener('click', () => {
	window.scrollTo(0, 0)
})

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollTop.classList.add('active')
	} else {
		scrollTop.classList.remove('active')
	}
})
