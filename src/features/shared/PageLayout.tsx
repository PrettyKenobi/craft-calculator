import React from 'react';
import Mast from './Mast';
import Foot from './Foot';
import styles from './shared.module.css';

export function PageLayout() {
    return (
        <div className='pageLayout'>
           <div className={styles.mast}>
               <Mast />
           </div>
            <div className={styles.foot}>
                <Foot />
            </div>
        </div>
    )
}
