const sendForm = () => {
    const errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input[type=text]:not(.promoCode), input[type=tel], input[type=checkbox]'),
        checkbox = document.querySelectorAll('input[type=checkbox]'),
        btn = document.querySelectorAll('button[type=submit]'),
        thanks = document.getElementById('thanks'),
        bannerForm = document.getElementById('banner-form'),
        footerForm = document.getElementById('footer_form');
    form.forEach((elem) => {
        elem.addEventListener('submit', (event) => {
            let target = event.target;
            event.preventDefault();
            elem.appendChild(statusMessage);

            const thanksPopUp = (status) => {
                const formContent = document.querySelector('.form-content>p');
                let target = event.target;
                formContent.style.cssText = `
					height: 100%;
				    display: flex;
				    align-items: center;
				    justify-content: center;
				`;
                if (target.id === 'banner-form' || target.id === 'footer_form') {
                    thanks.style.display = 'flex';
                    const statusMes = document.createElement('span');
                    statusMes.textContent = status;

                    setTimeout(() => {
                        statusMes.textContent = '';
                        thanks.style.display = 'none';
                    }, 7000)


                    formContent.append(statusMes);
                } else {
                    statusMessage.textContent = status;
                }
            };
            const formData = new FormData(elem);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200.');
                    }
                    thanksPopUp(successMessage);
                    setTimeout(() => {

                        input.forEach(elem => elem.value = '');
                        statusMessage.textContent = '';
                    }, 3000);
                })
                .catch(error => {
                    thanksPopUp(errorMessage);
                    console.error(error);
                });

            input.forEach(elem => {
                elem.value = '';
                elem.checked = false;
            });

            btn.forEach(elem => {
                elem.setAttribute('disabled', 'disabled');
            });
        });

        elem.addEventListener('click', (e) => {
            let target = e.target;
            if (target.closest('input[type=checkbox]')) {
                for (let i = 0; i < btn.length; i++) {
                    if (target.checked) {
                        btn[i].removeAttribute('disabled');
                        mesConfirm.style.display = 'none';
                    } else {
                        btn[i].setAttribute('disabled', 'disabled');
                        mesConfirm.style.display = 'block';
                    }
                }
            }
        });
        const mesConfirm = document.createElement('div');
        if (elem !== footerForm) {
            mesConfirm.style.cssText = 'font-size: 14px; color: #ffabab; text-decoration: underline;';
            mesConfirm.textContent = 'Подтвердите обработку персональных данных';
            elem.append(mesConfirm);
        }
    });
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 20px; color: white';

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