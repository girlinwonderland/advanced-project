import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { UserSchema } from 'entities/User/model/types/userSchema';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    login: LoginSchema
}
