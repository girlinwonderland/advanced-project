import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared';
import { Navbar, Sidebar } from 'widgets';
import { useDispatch } from 'react-redux';
import { UserActions } from 'entities/User';
import { useTheme, AppRouter } from './providers';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
export default App;
