import InputTitle from '../../simple/input-title/input-title';
import FormPropsEntity from './form-entity';
import LinkCustom from '../../ui/link/link';
import Button from './../../ui/button/button';
import Modal from '../../simple/modal/modal';
import styles from './form.module.css';

const Form: React.FC<FormPropsEntity> = ({
  logo,
  inputArray,
  onChange,
  data,
  path,
  titleLink,
  titleButton,
  setNotification,
  notification,
  handleSubmit,
  modal,
  setModal,
  infoForm,
}) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <img src={logo.src} alt={logo.alt} />
      {infoForm ? (
        <p className={styles['form-info']}>Восстановление пароля</p>
      ) : null}
      <div className={styles['form-inputs']}>
        {notification ? (
          <div className={styles['form-notification']}>
            <p>Неверные логин/пароль</p>
          </div>
        ) : null}

        {inputArray.map((input) => (
          <InputTitle
            key={input.name}
            title={input.title}
            placeholder={input.placeholder}
            name={input.name}
            value={data[input.name]}
            onChange={onChange}
            typeInput={input.typeInput}
          />
        ))}
      </div>
      <div
        className={styles['form-link']}
        onClick={() => setNotification(false)}>
        <LinkCustom path={path}>{titleLink}</LinkCustom>
      </div>
      <div className={styles['form-button']}>
        <Button typeButton="submit" onClick={() => setNotification(false)}>
          {titleButton}
        </Button>
      </div>
      {modal && setModal ? <Modal modal={modal} setModal={setModal} /> : null}
    </form>
  );
};

export default Form;
