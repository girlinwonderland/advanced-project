import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, ErrorBoundary, StoreProvider } from 'app/providers';
import App from 'app/App';
import 'shared/config/i18n';
import './app/styles/index.scss';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
