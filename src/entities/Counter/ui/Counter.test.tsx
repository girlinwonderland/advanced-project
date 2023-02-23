import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/test/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('should get text', () => {
        componentRender(<Counter />, { initState: { counter: { value: 10 } } });
        expect(screen.getByTestId('title-value')).toHaveTextContent('10');
    });

    test('should up value', () => {
        componentRender(<Counter />, { initState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('title-value')).toHaveTextContent('11');
    });

    test('should down value', () => {
        componentRender(<Counter />, { initState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('title-value')).toHaveTextContent('9');
    });
});
