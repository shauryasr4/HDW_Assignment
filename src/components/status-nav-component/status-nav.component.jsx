import React from 'react';

const StatusNav = (props) => {

    const handleStatusChange = function (val) {
        props.setValue('status', val);
        props.setValue('page', 0);
    }

    return (
        <div>
            <div className="tc flex justify-center items-center f7">
                <div className={"ba b--silver dib pa2 bg-light-gray silver " + (props.currentStatus === 'upcoming' ? "bg-white light-red" : "")}
                    onClick={() => { handleStatusChange('upcoming') }}>
                    UPCOMING
                </div>

                <div className={"ba b--silver dib pa2 bg-light-gray silver " + (props.currentStatus === 'running' ? "bg-white light-red" : "")}
                    onClick={() => { handleStatusChange('running') }}>
                    RUNNING
                </div>

                <div className={"ba b--silver dib pa2 bg-light-gray silver " + (props.currentStatus === 'completed' ? "bg-white light-red" : "")}
                    onClick={() => { handleStatusChange('completed') }}>
                    COMPLETED
                </div>
            </div>
        </div>
    )
}

export default StatusNav;