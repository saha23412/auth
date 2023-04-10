import { createContext } from 'react';
import AuthContextEntity from './context-entity';
const AuthContext = createContext<AuthContextEntity>({} as AuthContextEntity);
export default AuthContext;
