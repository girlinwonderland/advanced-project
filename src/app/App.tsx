import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPage, AboutPage } from 'pages';
import { classNames } from 'shared';
import { useTheme } from './providers';
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
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}
export default App
