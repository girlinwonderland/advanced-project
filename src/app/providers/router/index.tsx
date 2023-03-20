import React, { Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared';
import { getUserAuth } from 'entities/User';
import { Loading } from 'widgets';

export const AppRouter = () => {
    const isAuth = useSelector(getUserAuth);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {routes.map((({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                )))}
            </Routes>
        </Suspense>
    );
};
