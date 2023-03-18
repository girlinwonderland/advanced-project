export type TMode = Record<string, boolean | string | undefined>

/** Функция по заданным параметрам возвращает строку классов */
export const classNames = (
    mainClass: string,
    mode: TMode = {},
    otherClasses: Array<string | undefined> = [],
): string => (
    [mainClass, ...otherClasses.filter(Boolean), ...Object.entries(mode)
        .filter(([, value]) => value).map(([value]) => value)]
        .join(' ')
);
