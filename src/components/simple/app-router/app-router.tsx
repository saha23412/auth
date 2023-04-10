import { Routes, Route } from 'react-router-dom';
import { AppRouterEntity } from './app-router-entity';
import MainBackground from '../main-background/main-background';
import PrivateAuth from '../../../hoc/private-auth';
import Logout from '../../../pages/logout/logout';

const AppRouter: React.FC<AppRouterEntity> = ({ router, auth }) => {
  return (
    <MainBackground>
      <Routes>
        {router.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route
          path="logout"
          element={
            <PrivateAuth auth={auth}>
              <Logout />
            </PrivateAuth>
          }
        />
      </Routes>
    </MainBackground>
  );
};
export default AppRouter;
