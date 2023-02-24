export enum EErrors {
    IncorrectData = 'login error incorrect',
    SererError = 'login error server',
}
export interface LoginSchema {
    username: string,
    password: string,
    isLoading: boolean,
    error?: EErrors,
}
