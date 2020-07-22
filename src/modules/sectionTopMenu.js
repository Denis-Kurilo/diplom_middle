const sectionTopMenu = () => {

	//btnDropdown
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

	//free_visit_form
	const openPopup = document.querySelector('.open-popup'),
		freeVisitForm = document.getElementById('free_visit_form'),
		form2 = document.getElementById('form2');
	
		console.log(form2)

	openPopup.addEventListener('click', () => {
		freeVisitForm.style.display = 'block';
	});

	form2.addEventListener('click', (e) => {
		let target = e.target;
		console.log(target)
		if(target.matches('.close-form')){
			console.log('1')
		}
		
	});


};
export default sectionTopMenu;