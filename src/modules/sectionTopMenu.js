const sectionTopMenu = () => {
	const input = document.querySelectorAll('input[type=text]:not(.promoCode), input[type=tel]');
	
	//btnDropdown
	const btnDropdown = () => {
		const clubSelect = document.querySelector('.club-select'),
				ul = clubSelect.querySelector('ul');

			clubSelect.addEventListener('click', (e) => {
				let target = e.target;
				if(target.closest('.clubs-list')){
					ul.classList.toggle('active-ul');
				};

				window.addEventListener('click', (e) => {
				let target = e.target;
				if(!target.closest('.clubs-list')){
					ul.classList.remove('active-ul');
				};
			});
		});	
	};
	btnDropdown();
	
	//free_visit_form
	const visitForm = (elem) => {
		const openPopup = document.querySelector('.open-popup'),
			freeVisitForm = document.getElementById('free_visit_form');

		openPopup.addEventListener('click', () => {
			freeVisitForm.style.display = 'block';
		});

		freeVisitForm.addEventListener('click', (e) => {
			let target = e.target;
			target = target.closest('.form-content');
			if(!target){
				freeVisitForm.style.display = '';
				input.forEach(elem => {
					elem.value = '';
					elem.checked = false;
				});
			}
		});
	};
	visitForm();

	//btnForm
	const btnForm = () => {
		const callbackBtn = document.querySelector('.callback-btn'),
			callbackForm = document.getElementById('callback_form');

		callbackBtn.addEventListener('click', () => {
			callbackForm.style.display = 'block';
		});

		callbackForm.addEventListener('click', (e) => {
			let target = e.target;
			target = target.closest('.form-content');
			if(!target){
				callbackForm.style.display = '';
				input.forEach(elem => {
					elem.value = '';
					elem.checked = false;
				});
			}
		});
	};
	btnForm();

	//gift
	const promo = () => {
		const fixedGift = document.querySelector('.fixed-gift'),
			gift = document.getElementById('gift');

		fixedGift.addEventListener('click', () => {
			gift.style.display = 'block';
			fixedGift.style.display = 'none';
		});

		gift.addEventListener('click', (e) => {
			let target = e.target;
			target = target.closest('.form-content');
			if(!target){
				gift.style.display = '';
			};
		});
	};
	promo();
	
	//validation-form
	const validationForm = () => {
		const inputName = document.querySelectorAll('input[type=text]:not(.promoCode)');
		inputName.forEach((elem) => {
			elem.addEventListener('input', () => {
				let input = elem.value;
				elem.value = input.replace(/[^а-яёА-ЯЁ\s]+/ig, '');
			});
		});
	};
	validationForm();
};
export default sectionTopMenu;