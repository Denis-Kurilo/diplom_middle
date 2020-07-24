const sendForm = () => {
	const errorMessage = 'Что то пошло не так',
	  loadMessage = 'Загрузка...',
	  successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const form = document.querySelectorAll('form'),
		input = document.querySelectorAll('input[type=text]:not(.promoCode), input[type=tel]'),
		checkbox = document.querySelectorAll('input[type=checkbox]'),
		btn = document.querySelectorAll('button[type=submit]');

	form.forEach((elem) => {
		elem.addEventListener('submit', (event) => {
			let target = event.target;
		  event.preventDefault();
		  elem.appendChild(statusMessage);

		  statusMessage.textContent = loadMessage;
		  const formData = new FormData(elem);
		  let body = {};
		  formData.forEach((val, key) => {
		    body[key] = val;
		  });   

		  postData(body)
		    .then((response) => {
		    	if(response.status !== 200){
		    		throw new Error('status network not 200.');
		    	}
		    	
		      statusMessage.textContent = successMessage;
		      setTimeout(() => {
		      	 input.forEach(elem => elem.value = '');
		      	 statusMessage.textContent = '';
		      }, 3000);
		    })
		    .catch(error => {
		      statusMessage.textContent = errorMessage;
		      console.error(error);
		    });
	  });




	/*  elem.addEventListener('click', (e) => {
			let target = e.target;
			console.log(target)
			if(target.checked){
				btn.forEach((elem) => {
					if(target.checked){
						elem.removeAttribute('disabled');	
						console.log('1')
					}else if(!target.checked){
						elem.setAttribute('disabled','disabled');
						console.log('1')
					}
				})
			}
		});*/
	});

	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 2rem; color: white';

	const postData = (body) => {
		return fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
	}	


	//validate checkbox
	/*form.addEventListener('click', (e) => {
		let target = e.target;
		console.log(target)
	});*/
	/*checkbox.forEach((elem) => {
		elem.addEventListener('click', () => {
			console.dir(elem.checked)
			if(elem.checked){

			}
		});	
	});*/
	
};
export default sendForm;