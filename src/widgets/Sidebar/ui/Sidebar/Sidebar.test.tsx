import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/test/componentRender';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
    test('ordinary', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
