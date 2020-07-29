const sectionTopMenu = () => {

    //btnDropdown
    const btnDropdown = () => {
        const clubSelect = document.querySelector('.club-select'),
            ul = clubSelect.querySelector('ul');

        clubSelect.addEventListener('click', (e) => {
            let target = e.target;
            if (target.closest('.clubs-list')) {
                ul.classList.toggle('active-ul');
            };

            window.addEventListener('click', (e) => {
                let target = e.target;
                if (!target.closest('.clubs-list')) {
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
            btn = document.querySelectorAll('button[type=submit]'),
            closeIcon = document.querySelectorAll('.close_icon'),
            closeBtn = document.querySelectorAll('.close-btn'),
            thanks = document.getElementById('thanks');

        closeIcon.forEach(elem => {
            elem.addEventListener('click', (event) => {
                let target = event.target.parentNode.parentNode;
                if (target.parentNode.id === 'free_visit_form') {
                    freeVisitForm.style.display = 'none';
                } else if (target.parentNode.id === 'callback_form') {
                    callbackForm.style.display = 'none';
                } else if (target.parentNode.id === 'thanks') {
                    thanks.style.display = 'none';
                }
            });
        });

        openPopup.addEventListener('click', () => {
            freeVisitForm.style.display = 'block';
        });
        callbackBtn.addEventListener('click', () => {
            callbackForm.style.display = 'block';
        });

        closeBtn.forEach(elem => {
            elem.style.marginBottom = '30px';
            elem.addEventListener('click', () => {
                thanks.style.display = 'none';
            });
        })
    }
    forms();

    //gift
    const promo = () => {
        const fixedGift = document.querySelector('.fixed-gift'),
            gift = document.getElementById('gift'),
            closeBtn = document.querySelector('.close-btn');
        try {
            fixedGift.addEventListener('click', () => {
                gift.style.display = 'block';
                fixedGift.style.display = 'none';
            });
            
            gift.addEventListener('click', (e) => {
                let target = e.target;
                target = target.closest('.form-content');
                if (!target) {
                    gift.style.display = '';
                };

                if (e.target.closest('.close-btn')) {
                    gift.style.display = '';
                }
            });
        } catch { }
    };
    promo();

    //validation-form
    const validationForm = () => {
        const inputName = document.querySelectorAll('input[type=text]:not(.promoCode)'),
             tel = document.querySelectorAll('input[type=tel]:not(.promoCode)'),
             checkbox = document.querySelectorAll('input[type=checkbox]:not(.promoCode)');
        inputName.forEach((elem) => {
            elem.addEventListener('input', () => {
                let input = elem.value;
                elem.value = input.replace(/[^а-яёА-ЯЁ\s]+/ig, '');
            });
        });
        tel.forEach(elem => {
            elem.addEventListener('input', (e) => {
                let target = e.target;
                checkbox.forEach((elem, index) => {
                    if(target.value.length < 18){
                        elem.setAttribute('disabled', 'disabled');
                    }else{
                        elem.removeAttribute('disabled');
                    }   
                });  
            })
        });
    };
    validationForm();
};
export default sectionTopMenu;