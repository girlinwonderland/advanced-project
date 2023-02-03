
export type TClassNamesMode = Record<string, boolean | string>

/** Функция по заданным параметрам возвращает строку классов */
export const classNames = (mainClass: string, mode: TClassNamesMode, otherClasses: string[]): string => {
    return (
        [mainClass, ...otherClasses, ...Object.entries(mode)
            .filter(([, value]) => value).map(([value,]) => value)]
        .join(' ')
    )
}
