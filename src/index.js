'use strict';


import sectionTopMenu from './modules/sectionTopMenu';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';






//Вызов функции
sectionTopMenu();

//maskPhone
maskPhone('селектор элементов', 'маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__');

//send-ajax-form
sendForm();