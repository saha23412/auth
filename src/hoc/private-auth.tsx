import { useLocation, Navigate } from 'react-router-dom';
import { PrivetAuthEntity } from './privet-auth-entity';

const PrivateAuth: React.FC<PrivetAuthEntity> = ({ children, auth }) => {
  const location = useLocation();
  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export default PrivateAuth;
