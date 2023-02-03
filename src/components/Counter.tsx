import React, { useState } from 'react';
import './Counter.scss';
import styles from './style.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(prev => prev + 1)} className={styles.btn}>up</button>
        </>
    )
}
