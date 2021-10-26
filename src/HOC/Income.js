import React from 'react';
import RenderHelper from '../RenderElement';
import MyHocComponent from './MyHocComponent';

const Income = props => {
    const url = 'http://13.232.99.42/get_income';
    const incomeComp = MyHocComponent('Income', url);

    return (
        <RenderHelper>
            <div>{incomeComp}</div>
        </RenderHelper>
    )
};

export default Income;
