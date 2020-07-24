const mobileMenu = () => {
	const menuButton = document.querySelector('.menu-button'),
	 popupMenu = document.querySelector('.popup-menu');

	menuButton.addEventListener('click', () => {
		popupMenu.style.display = 'flex';
	});

	popupMenu.addEventListener('click', (e) => {
		let target = e.target;
		popupMenu.style.display = 'flex';
		if(target.matches('.close-menu-btn img ') || target.matches('.scroll a')){
			popupMenu.style.display = 'none';
		}
	});

	//fixed burger menu
	const topMenu = document.querySelector('.top-menu'),
		 offsetTop = topMenu.offsetTop;
	window.addEventListener('scroll', () => {
		if (window.pageYOffset >= offsetTop) {
    	topMenu.style.position = 'fixed';
	  } else {
    	topMenu.style.position = 'static';
	  }
	});
};

























export default mobileMenu;