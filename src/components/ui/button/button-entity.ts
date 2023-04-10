import { DOMAttributes, ReactNode } from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonPropsEntity extends DOMAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  typeButton: ButtonType;
  onClick: (event: React.MouseEvent) => void;
  children: ReactNode | ReactNode[];
}
