import { RouteObject } from 'react-router';
import Loader from '@/components/Loader';
import { lazy } from 'react';
import BaseLayout from '@/layouts/BaseLayout';

const Home = Loader(lazy(() => import('@/pages/Home')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
];

export default routes;
