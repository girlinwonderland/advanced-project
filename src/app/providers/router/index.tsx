import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared';

export const AppRouter = () => (
    <Suspense fallback={<div>...loading</div>}>
        <Routes>
            {Object.values(routeConfig).map((({ path, element }) => (
                <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
            )))}
        </Routes>
    </Suspense>
)
