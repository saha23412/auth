import { useState } from 'react';
import AuthContext from './context';
import ContainerPropsEntity from './../containers/container-entity';

const AuthContextProvider: React.FC<ContainerPropsEntity> = ({ children }) => {
  const [notification, setNotification] = useState<boolean>(false);
  const [auth, setAuth] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  return (
    <AuthContext.Provider
      value={{ notification, setNotification, auth, setAuth, modal, setModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
