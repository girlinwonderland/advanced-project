export type TClassNamesMode = Record<string, boolean | string>

/** Функция по заданным параметрам возвращает строку классов */
export const classNames = (
    mainClass: string,
    mode?: TClassNamesMode,
    otherClasses?: string[],
): string => (
    [mainClass, ...otherClasses.filter(Boolean), ...Object.entries(mode)
        .filter(([, value]) => value).map(([value]) => value)]
        .join(' ')
);
