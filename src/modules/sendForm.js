const sendForm = () => {
	const errorMessage = 'Что то пошло не так',
	  loadMessage = 'Загрузка...',
	  successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const form = document.querySelectorAll('form'),
		input = document.querySelectorAll('input[type=text]:not(.promoCode), input[type=tel]');

	form.forEach((elem) => {
		elem.addEventListener('submit', (event) => {
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
};
export default sendForm;