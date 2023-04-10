import { LegacyRef } from 'react';
import { InputArrayAuthName } from '../../../constants/constants';
import { InputTitleEntity } from '../../ordinary/form/form-entity';
import InputPropsEntity, { InputType } from '../../ui/input/input-entity';

export type InputTitlePropsEntity = {
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  typeInput: InputType;
  placeholder: string;
  name: InputArrayAuthName;
  value: string;
  inputRef?: LegacyRef<HTMLInputElement>;
};
