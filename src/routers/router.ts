import { RouteEntity } from './router-entity';
import Auth from '../pages/auth/auth';
import Restore from '../pages/restore/restore';

export enum RouteNames {
  AUTH = '/',
  RESTORE = '/restore',
}
export const publicRoutes: RouteEntity[] = [
  { path: RouteNames.AUTH, element: Auth },
  { path: RouteNames.RESTORE, element: Restore },
];
