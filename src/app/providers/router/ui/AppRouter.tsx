import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig';
import { Loading } from 'widgets/Loading/ui/Loading';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
    const renderWithWrapper = useCallback(({
        path, element, authOnly, roles,
    }: AppRoutesProps) => {
        const elem = (
            <Suspense fallback={<Loading />}>
                {element}
            </Suspense>
        );
        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <ProtectedRoute roles={roles}>{elem}</ProtectedRoute> : elem}
            />
        );
    }, []);

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};
