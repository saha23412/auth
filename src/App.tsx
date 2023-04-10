import AppRouter from './components/simple/app-router/app-router';
import { publicRoutes } from './routers/router';
import { useContext } from 'react';
import AuthContext from './context/context';

const App = () => {
  const { auth } = useContext(AuthContext);
  return <AppRouter router={publicRoutes} auth={auth} />;
};

export default App;
