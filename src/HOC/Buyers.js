import React from 'react';
import RenderHelper from '../RenderElement';
import MyHocComponent from './MyHocComponent';

const Buyers = props => {
    const url = 'http://13.232.99.42/get_buyer';
    const buyersComp = MyHocComponent('Buyers', url);
    
    return(
        <RenderHelper>
            <div>{buyersComp}</div>
        </RenderHelper>
    )
};

export default Buyers;
