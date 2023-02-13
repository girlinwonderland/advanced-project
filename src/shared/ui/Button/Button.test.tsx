import { render, screen } from '@testing-library/react';
import { Button, EButtonTheme } from './Button';

describe('button test', () => {
    test('ordinary', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('with class', () => {
        render(<Button theme={EButtonTheme.Clear}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
