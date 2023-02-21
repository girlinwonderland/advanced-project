import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { StateSchema, StoreProvider } from 'app/providers';
import { DeepPartial } from '@reduxjs/toolkit';
import i18n from '../../config/i18nForTesting';

export interface componentRenderOptions {
    route?: string;
    initState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initState,
    } = options;

    return render(
        <StoreProvider initState={initState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
