import Home from './views/Home';
import Login from './views/Login';
import LabDetail from './views/LabDetail';
import { FC } from 'react';
interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: 'home-route',
    title: 'Home',
    path: '/getTeacher/:id',
    enabled: true,
    component: Home,
  },
  {
    key: 'login-route',
    title: 'Login',
    path: '/',
    enabled: true,
    component: Login,
  },
  {
    key: 'phongmay-route',
    title: 'Lab Detail',
    path: '/labDetail/:id',
    enabled: true,
    component: LabDetail,
  },
];
