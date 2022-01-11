import React from 'react';
import Mast from './mast';
import Foot from './foot';
//import './pageLayout.css'

function PageLayout() {
    return (
        <div className='pageLayout'>
           <div className='Mast'>
               <Mast />
           </div>
            <div className='Foot'>
                <Foot />
            </div>
        </div>
    )
}

export default PageLayout;