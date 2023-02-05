import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared';
import { useTheme, AppRouter } from './providers';
import './styles/index.scss';

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <AppRouter />
        </div>
    )
}
export default App
