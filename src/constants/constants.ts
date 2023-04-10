import logo from '../assets/logo.png';
import { InputTitleEntity } from '../components/ordinary/form/form-entity';
export enum InputArrayAuthName {
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'phone',
}
export const logoName = {
  src: logo,
  alt: 'logo',
};
export const InputArrayAuth: InputTitleEntity[] = [
  {
    title: 'Введите логин',
    name: InputArrayAuthName.EMAIL,
    placeholder: '',
    typeInput: 'text',
  },
  {
    title: 'Введите пароль',
    name: InputArrayAuthName.PASSWORD,
    placeholder: '',
    typeInput: 'text',
  },
];
export const InputArrayRestore: InputTitleEntity[] = [
  {
    title: 'Введите номер телефона',
    name: InputArrayAuthName.PHONE,
    placeholder: '',
    typeInput: 'text',
  },
];
export const dataLogin = {
  phone: '71111111111',
  password: '123456',
};
