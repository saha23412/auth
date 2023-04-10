import { ButtonPropsEntity } from './button-entity';
import styles from './button.module.css';

const Button: React.FC<ButtonPropsEntity> = ({
  children,
  onClick,
  typeButton,
  isDisabled,
}) => {
  return (
    <button
      className={styles['my-button']}
      onClick={onClick}
      type={typeButton}
      disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
