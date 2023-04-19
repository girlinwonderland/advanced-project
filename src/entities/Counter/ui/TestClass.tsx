import React, {
    Component, PureComponent,
} from 'react';
import { Inside } from './Inside';

interface IProps {
    someObj: {
        name: string,
        age: number
    }

}

interface ErrorBoundaryState {
    hasError: boolean
}

export class TestClass extends PureComponent<IProps, any> {
    render() {
        const { someObj } = this.props;
        return (
            <div>
                <p>{someObj.name}</p>
                <Inside value={someObj.age} />
            </div>
        );
    }
}
