import React from 'react';
import RenderHelper from '../RenderElement';
import MyHocComponent from './MyHocComponent';

const Countries = props => {
    const url = 'http://13.232.99.42/get_country';
    const countriesComp = MyHocComponent('Countries', url);

    return (
        <RenderHelper>
            <div>{countriesComp}</div>
        </RenderHelper>
    )
};

export default Countries;
