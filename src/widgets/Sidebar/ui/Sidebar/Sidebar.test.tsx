import { screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
    test('ordinary', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
