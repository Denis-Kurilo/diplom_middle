const calc = () => {
	const radio = document.querySelectorAll('.time>input[type=radio]'),
		radioBtn = document.querySelectorAll('.club>input[type=radio]'),
		cardOrder = document.getElementById('card_order'),
		promoCod = document.querySelector('.input-text'),
		promoCode = document.querySelector('.promoCode'),
		priceTotal = document.getElementById('price-total');

	priceTotal.textContent = 0;

	const clickBtnActiv = () => {
		radio.forEach(elem => {
			elem.addEventListener('click', (e) => {
				radio.forEach(elem => {
					elem.removeAttribute('checked');
				});
				elem.setAttribute('checked','checked')
			});
		});

		radioBtn.forEach(elem => {
			elem.addEventListener('click', (e) => {
				radioBtn.forEach(elem => {
					elem.removeAttribute('checked');
				});
				elem.setAttribute('checked','checked')
			});
		});
	};
	clickBtnActiv();

	const calculate = () => {
		cardOrder.addEventListener('click', (event) => {
			let target = event.target;
			console.dir(target)
			const priceMozaika = {
				m1: 1990,
				m2: 9900,
				m3: 13900,
				m4: 19900
			}
				
			for(let key in priceMozaika){
				if(target.id === key){
					priceTotal.textContent = priceMozaika[key];
				}
			}
			let countPrice = priceTotal.textContent;
			if(countPrice == 0){
				promoCode.setAttribute('disabled', 'disabled');
			}else{
				promoCode.removeAttribute('disabled');
			}
			promoCod.addEventListener('input', (e) => {
				let target = e.target;
				console.log(target)
				if(target.value === 'ТЕЛО2019'){
				console.log('1')
				priceTotal.textContent = (countPrice * 30) / 100;
				if(target.classList.contains('promoCode')){
					target.setAttribute('disabled', 'disabled')
				}
				}
			})
		});
	};
	calculate();
};
export default calc;