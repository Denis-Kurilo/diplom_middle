const sectionTopMenu = () => {
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

	const forms = () => {
		const body = document.querySelector('body'),
			openPopup = document.querySelector('.open-popup'),
			freeVisitForm = document.getElementById('free_visit_form'),
			callbackBtn = document.querySelector('.callback-btn'),
			callbackForm = document.getElementById('callback_form'),
			input = document.querySelectorAll('input[type=text]:not(.promoCode), input[type=tel], input[type=checkbox]'),
			btn = document.querySelectorAll('button[type=submit]');
			
	body.addEventListener('click', (e) => {
		let target = e.target;
		if(target.classList.contains('overlay')){
			const idForm = target.parentNode.id;
			document.getElementById(idForm).style.display = 'none';
			
			input.forEach(elem => {
				elem.value = '';
				elem.checked = false;
			});

			btn.forEach(elem => {
				elem.setAttribute('disabled','disabled');
			});
		}
	});

	openPopup.addEventListener('click', () => {
		freeVisitForm.style.display = 'block';
	});
	callbackBtn.addEventListener('click', () => {
		callbackForm.style.display = 'block';
	});
	}
	forms();

	//gift
	const promo = () => {
		const fixedGift = document.querySelector('.fixed-gift'),
			gift = document.getElementById('gift'),
			closeBtn = document.querySelector('.close-btn');

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

			if(e.target.closest('.close-btn')){
				gift.style.display = '';
			}
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