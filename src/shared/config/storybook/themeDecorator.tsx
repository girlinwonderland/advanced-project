import { Story } from '@storybook/react';
import { ETheme } from 'app/providers';

export const ThemeDecorator = (theme: ETheme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
