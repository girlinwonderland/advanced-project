import { lazy } from 'react';

const MainPageAsync = lazy(() => import('./Main').then(module => ({ default: module.Main }) ))
export default MainPageAsync;
