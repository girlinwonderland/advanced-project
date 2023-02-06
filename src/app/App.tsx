import React, { Suspense } from 'react';
import { classNames } from 'shared';
import { useTheme, AppRouter } from './providers';
import { Navbar, Sidebar } from 'widgets';
import './styles/index.scss';

const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
export default App
