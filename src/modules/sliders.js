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
            setInterval(autoPlaySlide, 3000);
        };
        
        startSlide();
    };
    sliderHeader();
    
   
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
    
    try{
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
    }catch{ } 
};

export default sliders;