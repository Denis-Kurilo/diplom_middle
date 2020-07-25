const sliders = () => {

	//sliderHeader
	const sliderHeader = () => {
		const slide = document.querySelectorAll('.slide-text'),
			mainSlider = document.querySelector('.main-slider');
		let currentSlider = 0;
		const autoPlaySlide = () => {
			slide[currentSlider].classList.remove('active');
			currentSlider++;
			if(currentSlider >= slide.length){
				currentSlider = 0;
			};
			slide[currentSlider].classList.add('active');
		}; 
		const startSlide = () => {
			setInterval(autoPlaySlide, 5000);
		};

		startSlide();
	};
	sliderHeader();

	//services-slider
	class SliderCourusel {
		constructor({ 
			main, 
			wrap, 
			next,
			prev,
			infinity = false,
			position = 0 ,
			slidesToShow = 3,
			responsive = []
		}){
			if(!main || !wrap){
		  		console.warn(`slider-courusel: Необходимо 2 свойства, 'main' и 'wrap'`);
		  	}
			this.main = document.querySelector(main);
			this.wrap = document.querySelector(wrap);
			this.next = document.querySelector(next);
			this.prev = document.querySelector(prev);
			this.slides = document.querySelector(wrap).children;
			this.slidesToShow = slidesToShow;
			this.options = {
				position,
				infinity,
				widthSlide: Math.floor(100 / this.slidesToShow),
				maxPosition: this.slides.length - this.slidesToShow
			};
			this.responsive = responsive;
		}

		init(){
			this.addGloClass();
			this.addStyle();

			if(this.prev && this.next){
				this.controlSlider();
			} else{
				this.addArrow();
				this.controlSlider();
			}
			if(this.responsive){
				this.responseInit();
			}
		}

		addGloClass(){
			this.main.classList.add('glo-slider');
			this.wrap.classList.add('glo-slider_wrap');
			this.wrap.classList.add('services-slider');

			for(const item of this.slides){
				item.classList.add('glo-slider__item');
			}
		}

		addStyle(){
			let style = document.getElementById('sliderCourusel-style');
			if(!style){
				style = document.createElement('style');
				style.id = 'sliderCourusel-style';	
			}
			
			style.textContent = `
				.glo-slider{
					overflow: hidden;
					position: relative;
				}
				.services-slider{
					transition: transform 0.5s;
					will-change: transform;
				}
				.glo-slider__wrap{
					display: flex;
					overflow: hidden;
				}
				.glo-slider__item{
					flex: 0 0 ${this.options.widthSlide}%;
					margin: auto 0;
				}
			`;
			document.head.appendChild(style);
		}

		controlSlider(){
			this.prev.addEventListener('click', this.prevSlider.bind(this));
			this.next.addEventListener('click', this.nextSlider.bind(this));
		}

		prevSlider(){
			if(this.options.infinity || this.options.position > 0){
				--this.options.position;
				if(this.options.position < 0){
					this.options.position = this.options.maxPosition;
				}
				this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
			}
			
		}
		nextSlider(){
			if(this.options.infinity || this.options.position < this.options.maxPosition){
				++this.options.position;
				if(this.options.position > this.options.maxPosition){
					this.options.position = 0;
				}
				this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;	
			}
		}

		addArrow(){
			this.prev = document.createElement('button');
			this.next = document.createElement('button');

			this.prev.className = 'glo-slider__prev';
			this.next.className = 'glo-slider__next';

			this.next.textContent = '>';
			this.prev.textContent = '<';

			this.main.appendChild(this.prev);
			this.main.appendChild(this.next);

			const style = document.createElement('style');
			style.textContent = `
				.glo-slider__prev,
				.glo-slider__next{
					width: 40px;
				    height: 40px;
				    border: none;
				    background-color: #FAD000;
				    border-radius: 50%;
				    position: absolute;
					top: 45%;
					transform: translate(50%, -50%);
					font-size: 16px;
    				font-weight: 700;
    				padding-top: 4px;
    				filter: drop-shadow(5px 4px 6px black);
    				transition: all .4s;
				}
				.glo-slider__prev:hover,
				.glo-slider__next:hover{
					filter: none;
				}
				.glo-slider__next{
					right: 25px; 
				}

				.glo-slider__prev{
					left: 25px;
				}
			`;
			document.head.appendChild(style);
		}
		responseInit(){
			const slidesToShowDefault = this.slidesToShow;
			const allResponse = this.responsive.map(item => item.breakpoint);
			const maxResponse = Math.max(...allResponse);

			const checkResponse = () => {
				const widthWindow = document.documentElement.clientWidth;
				if(widthWindow < maxResponse) {
					for(let i = 0; i < allResponse.length; i++){
						if(widthWindow < allResponse[i]){
							this.slidesToShow = this.responsive[i].slidesToShow;
							this.options.widthSlide = Math.floor(100 / this.slidesToShow);
							this.addStyle();
						}
					}
				}else{
					this.slidesToShow = slidesToShowDefault;
					this.options.widthSlide = Math.floor(100 / this.slidesToShow);
					this.addStyle();
				}
			};
			checkResponse();

			window.addEventListener('resize', checkResponse);
		}
	};
	const carousel = new SliderCourusel({
	  	main: '.wrapper-slider',
		wrap: '.services-slider',
		slidesToShow: 5,
		infinity: true,
		responsive: [{
			breakpoint: 1024,
			slidesToShow: 3
		},
		{
			breakpoint: 768,
			slidesToShow: 2
		},
		{
			breakpoint: 576,
			slidesToShow: 1
		}
		]
	});
	carousel.init();

   	//fotoGallery
	const fotoGallery = () => {
		const slides = document.querySelectorAll('.gallery-slider>.slide'),
			 servicesSlider = document.querySelector('.gallery-slider'),
			 prev = document.querySelector('.prev'),
			 next = document.querySelector('.next');
		let currentSlider = 0;
	
		const autoPlaySlide = () => {
			slides[currentSlider].classList.remove('galleryActive');
			++currentSlider;
			if(currentSlider >= slides.length){
				currentSlider = 0;
			};
			slides[currentSlider].classList.add('galleryActive');
		};

		const startSlide = () => {
			setInterval(autoPlaySlide, 3000);
		};
		startSlide();

		const btnPrev = () => {
			slides[currentSlider].classList.remove('galleryActive');
			if(currentSlider - 1 == -1){
				currentSlider = slides.length -1;
			}else{
				slides[currentSlider].classList.remove('galleryActive');
				currentSlider--;
			}
			slides[currentSlider].classList.add('galleryActive');
		}

		const btnNext = () => {
			slides[currentSlider].classList.remove('galleryActive');
			if(currentSlider + 1 == slides.length){
				currentSlider = 0
			}else{
				slides[currentSlider].classList.remove('galleryActive');
				currentSlider++;
			}
			slides[currentSlider].classList.add('galleryActive');
		}

		const styleBtn = document.createElement('style');
			styleBtn.textContent = `
				.prev,
				.next{
					width: 40px;
				    height: 40px;
				    border: none;
				    background-color: #FAD000;
				    border-radius: 50%;
				    position: absolute;
					top: 45%;
					font-size: 16px;
    				font-weight: 700;
    				padding-top: 4px;
    				filter: drop-shadow(5px 4px 6px black);
    				transition: all .4s;
				}
				.prev:hover,
				.next:hover{
					filter: none;
				}
				.next{
					right: 0; 
				}

				.prev{
					left: 0;
				}
			`;
			document.head.appendChild(styleBtn);
		prev.addEventListener('click', btnPrev);
		next.addEventListener('click', btnNext);
	};
	fotoGallery();























};

export default sliders;