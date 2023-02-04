export type TBuildMode = 'production' | 'development';

export type TBuildPath = {
    entry: string,
    output: string,
    html: string,
    src: string
}

export interface IBuildOptions {
    mode: TBuildMode,
    path: TBuildPath,
    isDev: boolean,
    port: number
}

export interface IBuildEnv {
    mode: TBuildMode,
    port: number
}
