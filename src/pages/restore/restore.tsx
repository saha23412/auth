import { useContext, useState } from 'react';
import Form from '../../components/ordinary/form/form';
import {
  InputArrayRestore,
  dataLogin,
  logoName,
} from '../../constants/constants';
import { RouteNames } from '../../routers/router';
import formatPhoneNumber from '../../utils/format-phone';
import AuthContext from '../../context/context';

const Restore = () => {
  const [data, setData] = useState({
    phone: '',
  });
  const { notification, setNotification, modal, setModal } =
    useContext(AuthContext);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name !== 'phone') {
      setData({ ...data, [name]: value });
    } else {
      let formatNumber: string = formatPhoneNumber(value);
      setData({ ...data, [name]: formatNumber });
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data.phone.replace(/[^0-9]/g, '') === dataLogin.phone) {
      setNotification(false);
      setModal(true);
    } else {
      setNotification(true);
    }
    setData({ phone: '' });
  };
  return (
    <Form
      data={data}
      logo={logoName}
      notification={notification}
      setNotification={setNotification}
      onChange={handleChange}
      titleLink="назад"
      titleButton="ПОЗВОНИТЬ"
      path={RouteNames.AUTH}
      inputArray={InputArrayRestore}
      handleSubmit={handleSubmit}
      modal={modal}
      setModal={setModal}
      infoForm={true}
    />
  );
};

export default Restore;
