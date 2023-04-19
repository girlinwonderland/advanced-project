import React from 'react';
import { Inside } from './Inside';

interface IProps {
    someObj: {
        name: string,
        age: number
    }

}

export const TextChild = React.memo(({ someObj }: IProps) => {
    return (
        <div>
            <p>{someObj.name}</p>
            <Inside value={someObj.age} />
        </div>
    );
});
