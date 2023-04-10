import Button from '../../ui/button/button';
import { dataLogin } from '../../../constants/constants';
import ModalEntity from './modal-entity';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../routers/router';
import styles from './modal.module.css';

const Modal: React.FC<ModalEntity> = ({ modal, setModal }) => {
  const navigate = useNavigate();
  return (
    <div
      className={modal ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => {
        setModal(false);
        navigate(RouteNames.AUTH);
      }}>
      <div
        className={
          modal
            ? `${styles['modal-content']} ${styles.active}`
            : styles.styles['modal-content']
        }
        onClick={(event) => event.stopPropagation()}>
        <p>
          Временный пароль: <span>{dataLogin.password}</span>
        </p>
        <Button
          typeButton="button"
          onClick={() => {
            setModal(false);
            navigate(RouteNames.AUTH);
          }}>
          ЗАКРЫТЬ
        </Button>
      </div>
    </div>
  );
};
export default Modal;
