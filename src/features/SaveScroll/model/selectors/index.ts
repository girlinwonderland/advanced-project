import { StateSchema } from 'app/providers';
import { createSelector } from '@reduxjs/toolkit';

export const getScroll = (state: StateSchema) => state.scroll;

export const getScrollByPath = createSelector(
    getScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll.scroll[path] || 0,
);
