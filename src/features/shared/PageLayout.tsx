import React from 'react';
import Mast from './Mast';
import Foot from './Foot';

export function PageLayout() {
    return (
        <div>
           <div>
               <Mast />
           </div>
           <div>
               <p>Middle bit</p>
           </div>
            <div>
                <Foot />
            </div>
        </div>
    );
}
