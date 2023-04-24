import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers';
import { ETheme } from '../../const';

export const ThemeDecorator = (theme: ETheme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
