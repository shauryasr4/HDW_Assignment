import React from 'react';

const TypeNav = (props) => {

    const handleTypeChange = function (val) {
        props.setValue('type', val);
        props.setValue('page', 0);
    }

    return (
        <div>
            <div className="tc flex justify-between items-center f5 w-100 mt-4">
                <div className={"pa3 " + (props.currentType === 'All' ? " bb bw2 b--light-red" : "")}
                    onClick={() => { handleTypeChange('All') }}>
                    All
                </div>

                <div className={"pa3 " + (props.currentType === 'International' ? " bb bw2 b--light-red" : "")}
                    onClick={() => { handleTypeChange('International') }}>
                    International
                </div>

                <div className={"pa3 " + (props.currentType === 'Domestic' ? " bb bw2 b--light-red" : "")}
                    onClick={() => { handleTypeChange('Domestic') }}>
                    Domestic
                </div>
            </div>
        </div>
    )
}

export default TypeNav;