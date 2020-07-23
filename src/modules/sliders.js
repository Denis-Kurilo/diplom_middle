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
			slidesToShow = 3
		}){
			this.main = document.querySelector(main);
			this.wrap = document.querySelector(wrap);
			this.next = document.querySelector(next);
			this.prev = document.querySelector(prev);
			this.slides = document.querySelector(wrap).children;
			this.slidesToShow = slidesToShow;
			this.options = {
				position,
				infinity,
				widthSlide: Math.floor(100 / this.slidesToShow)
			};
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
			const style = document.createElement('style');
			style.id = 'sliderCourusel-style';
			style.textContent = `
				.glo-slider{
					overflow: hidden;
					color: red;
				}
				.services-slider{
					transition: transform 1s;
					will-change: transform;
				}
				.glo-slider__wrap{
					display: flex;
					overflow: hidden;
				}
				.glo-slider__item{
					flex: 0 0 ${this.options.widthSlide}%;
					margin: 0 auto;
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
					this.options.position = this.slides.length - this.slidesToShow;
				}
				this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
			}
			
		}
		nextSlider(){
			if(this.options.infinity || this.options.position < this.slides.length - this.slidesToShow){
				++this.options.position;
				if(this.options.position > this.slides.length - this.slidesToShow){
					this.options.position = 0;
				}
				this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;	
			}
		}

		addArrow(){

		}
	};

  const carousel = new SliderCourusel({
  	main: '.wrapper-slider',
		wrap: '.services-slider',
		prev: '#btn-prev',
		next: '#btn-next',
		slidesToShow: 4,
		infinity: true
  });
  carousel.init();
   






















	/*const sliderServices = () => {
		const slide = document.querySelectorAll('.slide'),
			 servicesSlider = document.querySelector('.services-slider');
		let currentSlider = 0;

		const startSlide = () => {
			setInterval(autoPlaySlide, 5000);
		};

		console.log(slide)
		console.log(servicesSlider)






	};
	sliderServices();*/





};

export default sliders;