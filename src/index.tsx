import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, ErrorBoundary, StoreProvider } from 'app/providers';
import App from 'app/App';
import 'shared/config/i18n';
import './app/styles/index.scss';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
