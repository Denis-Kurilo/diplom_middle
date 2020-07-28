import calculate from './calc';
const sendForm = () => {
    const errorMessage = 'Ошибка',
        loadMessage = 'Идет отправка...',
        successMessage = 'Отправлено!';

    const form = document.querySelectorAll('form'),
        body = document.querySelector('body'),
        input = document.querySelectorAll('input[type=text]:not(.promoCode), input[type=tel], input[type=checkbox], input[type=radio]:not(#card_leto_mozaika)'),
        checkbox = document.querySelectorAll('input[type=checkbox]'),
        btn = document.querySelectorAll('button[type=submit]'),
        thanks = document.getElementById('thanks'),
        bannerForm = document.getElementById('banner-form'),
        footerForm = document.getElementById('footer_form'),
        cardOrder = document.getElementById('card_order');
    form.forEach((elem) => {
        elem.addEventListener('submit', (event) => {
            let target = event.target;
            event.preventDefault();
            elem.appendChild(statusMessage);
            const formContent = document.querySelector('.form-content>p');
            const thanksPopUp = (status, loaded) => {
                let target = event.target;
                formContent.style.cssText = `
					height: 100%;
				    display: flex;
				    align-items: center;
				    justify-content: center;
				`;
                if (target.id === 'banner-form' || target.id === 'footer_form' || target.id === 'card_order') {
                    thanks.style.display = 'flex';
                    const statusMes = document.createElement('span');
                    statusMes.textContent = loaded;
                    setTimeout(() => {
                       statusMes.textContent = status; 
                    }, 1000);
                    setTimeout(() => {
                        statusMes.textContent = '';
                        thanks.style.display = 'none';
                    }, 6000)
                    formContent.append(statusMes);
                } else {
                    statusMessage.textContent = status;
                }
            };
            if (target.id === 'banner-form' || target.id === 'footer_form' || target.id === 'card_order'){
                thanksPopUp(undefined, loadMessage);
            }else{
                statusMessage.textContent = loadMessage;
            }

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
                        calculate('1', 'mozaika');
                        calculate('1', 'schelkovo');
                    }, 3000);
                    
                })
                .catch(error => {
                    thanksPopUp(errorMessage);
                    calculate('1', 'mozaika');
                    calculate('1', 'schelkovo');
                    console.error(error);

                });

            input.forEach(elem => {
                if(elem.name !== 'card-type'){
                    elem.value = '';
                    elem.checked = false;  
                }
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
        body.addEventListener('click', (e) => {
            let target = e.target;

            if (target.classList.contains('overlay')) {
                const idForm = target.parentNode.id;
                document.getElementById(idForm).style.display = 'none'; +

                input.forEach(elem => {
                    elem.value = '';
                    elem.checked = false;
                });   
                mesConfirm.style.display = 'block';     

                btn.forEach(elem => {
                    elem.setAttribute('disabled', 'disabled');
                });
            }
        });
        const mesConfirm = document.createElement('div');
        const confirm = () => {
            if (elem !== footerForm) {
                mesConfirm.style.cssText = 'font-size: 14px; color: #ffabab; text-decoration: underline;';
                mesConfirm.textContent = 'Подтвердите обработку персональных данных';
                elem.append(mesConfirm);
            }  
        }
        confirm();
        
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