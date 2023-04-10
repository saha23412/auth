import { useContext, useState } from 'react';
import Form from '../../components/ordinary/form/form';
import { dataLogin, logoName } from '../../constants/constants';
import { InputArrayAuth } from '../../constants/constants';
import { RouteNames } from '../../routers/router';
import formatPhoneNumber from '../../utils/format-phone';
import AuthContext from '../../context/context';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const { notification, setNotification, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name !== 'email') {
      setData({ ...data, [name]: value });
    } else {
      let formatNumber: string = formatPhoneNumber(value);
      setData({ ...data, [name]: formatNumber });
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      data.email.replace(/[^0-9]/g, '') === dataLogin.phone &&
      data.password === dataLogin.password
    ) {
      setAuth(true);
      navigate('/logout');
    } else {
      setNotification(true);
    }
    setData({ email: '', password: '' });
  };
  return (
    <Form
      notification={notification}
      setNotification={setNotification}
      data={data}
      logo={logoName}
      inputArray={InputArrayAuth}
      onChange={handleChange}
      titleLink="Забыли пароль?"
      path={RouteNames.RESTORE}
      titleButton="ВОЙТИ"
      handleSubmit={handleSubmit}
    />
  );
};

export default Auth;
