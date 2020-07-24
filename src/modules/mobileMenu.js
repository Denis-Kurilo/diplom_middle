const mobileMenu = () => {
	const menuButton = document.querySelector('.menu-button');
	const popupMenu = document.querySelector('.popup-menu');

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
};

























export default mobileMenu;