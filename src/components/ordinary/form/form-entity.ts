import InputPropsEntity, { InputType } from '../../ui/input/input-entity';
import { InputArrayAuthName } from '../../../constants/constants';
import React, { DetailedHTMLProps } from 'react';
export type FormPropsEntity = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  logo: Logo;
  inputArray: InputTitleEntity[];
  data: {
    [key: string]: string;
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  path: string;
  titleLink: string;
  titleButton: string;
  setNotification: (notification: boolean) => void;
  notification: boolean;
  modal?: boolean;
  setModal?: (modal: boolean) => void;
  infoForm?: boolean;
};

interface Logo {
  src: string;
  alt: string;
}

export interface InputTitleEntity {
  title: string;
  name:
    | InputArrayAuthName.EMAIL
    | InputArrayAuthName.PASSWORD
    | InputArrayAuthName.PHONE;
  placeholder: string;
  typeInput: InputType;
}

export default FormPropsEntity;
