import { lazy } from 'react';

const AboutPageAsync = lazy(() => import('./About').then(module => ({ default: module.About }) ))
export default AboutPageAsync;
