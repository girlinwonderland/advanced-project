import React, { Suspense } from 'react';
// import { Counter } from './components/Counter';
import { Routes, Route, Link } from 'react-router-dom';
import MainPageAsync from './pages/Main.async';
import AboutPageAsync from './pages/About.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers';
import './styles/index.scss';

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />} />
                    <Route path='/' element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
export default App
