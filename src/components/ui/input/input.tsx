import InputPropsEntity from './input-entity';
import styles from './input.module.css';

const Input: React.FC<InputPropsEntity> = ({
  onChange,
  typeInput,
  className,
  placeholder,
  name,
  value,
}) => {
  return (
    <input
      type={typeInput}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      value={value}
      className={`${styles['my-input']} ${className}`}
      required
    />
  );
};

export default Input;
