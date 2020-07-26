const sliders = () => {

    //sliderHeader
    const sliderHeader = () => {
        const slide = document.querySelectorAll('.slide-text'),
            mainSlider = document.querySelector('.main-slider');
        let currentSlider = 0;
        const autoPlaySlide = () => {
            slide[currentSlider].classList.remove('active');
            currentSlider++;
            if (currentSlider >= slide.length) {
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
            position = 0,
            slidesToShow = 3,
            responsive = []
        }) {
            if (!main || !wrap) {
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

        init() {
            this.addGloClass();
            this.addStyle();

            if (this.prev && this.next) {
                this.controlSlider();
            } else {
                this.addArrow();
                this.controlSlider();
            }
            if (this.responsive) {
                this.responseInit();
            }
        }

        addGloClass() {
            this.main.classList.add('glo-slider');
            this.wrap.classList.add('glo-slider_wrap');
            this.wrap.classList.add('services-slider');

            for (const item of this.slides) {
                item.classList.add('glo-slider__item');
            }
        }

        addStyle() {
            let style = document.getElementById('sliderCourusel-style');
            if (!style) {
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

        controlSlider() {
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }

        prevSlider() {
            if (this.options.infinity || this.options.position > 0) {
                --this.options.position;
                if (this.options.position < 0) {
                    this.options.position = this.options.maxPosition;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }

        }
        nextSlider() {
            if (this.options.infinity || this.options.position < this.options.maxPosition) {
                ++this.options.position;
                if (this.options.position > this.options.maxPosition) {
                    this.options.position = 0;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }

        addArrow() {
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
        responseInit() {
            const slidesToShowDefault = this.slidesToShow;
            const allResponse = this.responsive.map(item => item.breakpoint);
            const maxResponse = Math.max(...allResponse);

            const checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;
                if (widthWindow < maxResponse) {
                    for (let i = 0; i < allResponse.length; i++) {
                        if (widthWindow < allResponse[i]) {
                            this.slidesToShow = this.responsive[i].slidesToShow;
                            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                            this.addStyle();
                        }
                    }
                } else {
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
    const addDots = () => {
        const slide = document.querySelectorAll('.gallery-slider>.slide'),
            dots = document.querySelector('.dots');
        for (let i = 0; i < slide.length; i++) {
            let newDot = document.createElement('li');
            newDot.classList.add('dot');
            dots.append(newDot);
        }
        let styleDot = document.createElement('style');
        styleDot.textContent = `
			.dots{
				position: absolute;
			    margin: 0 auto;
			    left: 0;
			    right: 0;
			    bottom: 30px;
			}
			.dot.dot-active{
				border: solid #ffd12e;
			}
			.dot{
			    cursor: pointer;
			    height: 6px;
				width: 30px;
			    margin: 0 10px;
			    border: solid #fff;
			    display: inline-block;
			    -webkit-transition: background-color,-webkit-transform .4s;
			    transition: background-color,transform .4s,-webkit-transform .4s;
			}
			.sliderBtn{
				width: 40px;
			    height: 40px;
			    border: none;
			    background-color: #FAD000;
			    border-radius: 50%;
			    position: absolute;
				top: 50%;
				transform: translate(50%, -50%);
				font-size: 16px;
				font-weight: 700;
				padding-top: 4px;
				filter: drop-shadow(5px 4px 6px black);
				transition: all .4s;
			}
			.next:hover,
			.prev:hover{
				filter: none;
			}
			.next{
				right: 50px;
			}
			.prev{
				left: 10px;
			}
		`;
        document.head.append(styleDot);
    };
    addDots();
    const fotoGallery = () => {
        const slide = document.querySelectorAll('.gallery-slider>.slide'),
            btn = document.querySelectorAll('.sliderBtn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.gallery-slider');

        let currentSlide = 0,
            interval;

        const addActiveClass = () => {
            const dot = document.querySelectorAll('.dot');
            for (let i = 0; i < dot.length; i++) {
                dot[0].classList.add('dot-active');
            }
        };
        addActiveClass();

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'galleryActive');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'galleryActive');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.sliderBtn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'galleryActive');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('.next')) {
                currentSlide++;
            } else if (target.matches('.prev')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'galleryActive');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.sliderBtn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.sliderBtn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(4000);
    };
    fotoGallery();
};

export default sliders;