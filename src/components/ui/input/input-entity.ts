import { DOMAttributes, LegacyRef } from 'react';

export type InputType = 'checkbox' | 'password' | 'text' | 'radio';

interface InputPropsEntity extends DOMAttributes<HTMLInputElement> {
  className?: string;
  typeInput: InputType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
  name?: 'email' | 'password' | 'phone';
}
export default InputPropsEntity;
