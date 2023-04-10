import { DOMAttributes, ReactNode } from 'react';

interface LinkPropsEntity extends DOMAttributes<HTMLLinkElement> {
  path: string;
  children: ReactNode | ReactNode[];
}
export default LinkPropsEntity;
