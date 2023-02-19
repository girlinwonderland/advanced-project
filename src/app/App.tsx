import React, { Suspense } from 'react';
import { classNames } from 'shared';
import { Navbar, Sidebar } from 'widgets';
import { useTheme, AppRouter, ErrorBoundary } from './providers';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <ErrorBoundary>
                <Suspense fallback="">
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};
export default App;
