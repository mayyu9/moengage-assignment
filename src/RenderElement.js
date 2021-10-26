import React from 'react';

const RenderHelper = props => {
    const { children } = props;
    return (
        <div className="row col-12 mt-4 mx-1">
            {children}
        </div>
    )
};

export default RenderHelper;
