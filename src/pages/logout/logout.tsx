import { useContext } from 'react';
import Button from '../../components/ui/button/button';
import AuthContext from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../routers/router';
import styles from './logout.module.css';

const Logout = () => {
  const { setAuth, setNotification } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className={styles['logout-wrapper']}>
      <Button
        typeButton="button"
        onClick={() => {
          setAuth(false);
          setNotification(false);
          navigate(RouteNames.AUTH);
        }}>
        Выйти
      </Button>
    </div>
  );
};

export default Logout;
