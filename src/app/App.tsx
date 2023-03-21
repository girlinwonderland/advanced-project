import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared';
import { Navbar, Sidebar } from 'widgets';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions, getUserInit } from 'entities/User';
import { useTheme, AppRouter } from './providers';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    const init = useSelector(getUserInit);

    useEffect(() => {
        dispatch(UserActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {init && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
export default App;
