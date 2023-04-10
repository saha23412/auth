import Input from '../../ui/input/input';
import { InputTitlePropsEntity } from './input-title-entity';
import styles from './input-title.module.css';

const InputTitle: React.FC<InputTitlePropsEntity> = ({
  title,
  onChange,
  typeInput,
  placeholder,
  name,
  value,
  inputRef,
}) => {
  return (
    <div className={styles['input-title']}>
      <p className={styles['input-title-text']}>
        <span className={styles['title-text']}>{title}</span>
        <Input
          placeholder={placeholder}
          name={name}
          value={value}
          className={styles['input-focus']}
          onChange={onChange}
          typeInput={typeInput}
        />
      </p>
    </div>
  );
};

export default InputTitle;
