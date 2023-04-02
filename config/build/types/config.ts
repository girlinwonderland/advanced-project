export type TBuildMode = 'production' | 'development';

export type TBuildPath = {
    entry: string,
    output: string,
    html: string,
    src: string,
    locales: string,
    buildLocales: string
}

export interface IBuildOptions {
    mode: TBuildMode,
    path: TBuildPath,
    isDev: boolean,
    port: number,
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest'
}

export interface IBuildEnv {
    mode: TBuildMode,
    port: number,
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest'
}
