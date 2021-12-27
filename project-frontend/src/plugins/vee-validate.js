import {extend} from "vee-validate";
import {required, email} from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "*Заполнение необходимо"
});

extend("password", {
  message: "*Используйте 8+ символов, состоящих из букв, цифр и символов.",
  validate(value) {
    let reg = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{7,65})');
    return reg.test(value)
  }
});

extend("email", {
  message: "*Введите правильный адрес электронной почты",
  validate(value) {
    let reg = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,24}))$');
    return reg.test(value)
  }
});

extend("name", {
  message: '*Разрешены только буквы',
  validate(value) {
    let reg = new RegExp('^[a-zA-Z]{1,65}$');
    return reg.test(value)
  }
});

extend("lastname", {
  message: '*Разрешены только буквы',
  validate(value) {
    let reg = new RegExp('^[a-zA-Z]{1,65}$');
    return reg.test(value)
  }
});

