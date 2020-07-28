const scrollDown = () => {
	const anchors = document.querySelectorAll('li a[href^= "#"], .wrapper>a[href*= "#"]');
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

		//arrow appearance
		const headerMain = document.querySelector('.top-menu'),
			totop = document.getElementById('totop'),
			offsetHeight = headerMain.offsetHeight;
		window.addEventListener('scroll', () => {
			if (window.pageYOffset >= offsetHeight) {
	    	totop.style.transform = 'translateX(0px)';
		  } else {
	    	totop.style.transform = 'translateX(100px)';
		  }
		});
};
export default scrollDown;


