import React from 'react';
import loadable from '@loadable/component';
import Loading from '../components/Loading';
import endpoints from './endpoints';

const FallBack = (<Loading />);

const LandingPage = loadable(() => import('../views/LandingPage'), { fallback: FallBack });

export default [
  {
    component: LandingPage,
    path: endpoints.landing_page,
    exact: true,
  },
];
