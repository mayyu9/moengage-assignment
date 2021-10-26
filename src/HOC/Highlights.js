import React from 'react';
import RenderHelper from '../RenderElement';
import MyHocComponent from './MyHocComponent';

const HighLights = props => {
    const url = 'http://13.232.99.42/get_highlight';
    const highLightComp = MyHocComponent('Highlights', url);
    
    return(
        <RenderHelper>
            <div>{highLightComp}</div>
        </RenderHelper>
    )
};

export default HighLights;
