const scrollDown = () => {
	const anchors = document.querySelectorAll('li a[href^= "#"], a[href^= "#"]');
		for (let anchor of anchors){
			anchor.addEventListener('click', (event) =>{
				event.preventDefault();
				const blockId = anchor.getAttribute('href');

				document.querySelector('' + blockId).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		}
};
export default scrollDown;