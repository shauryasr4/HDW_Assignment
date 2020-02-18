import React from 'react';

const Pagination = (props) => {
    const { showNextPageButton, showPreviousPageButton, onClickPrevious, onClickNext } = props;

    return (
        <div className="mw8 center">
            <nav className="cf pa3 pa4-ns">
                <div className={"fl dib link f6 f5-ns b pa2" + (showPreviousPageButton ? " light-red" : " o-50 gray")}
                    onClick={() => { if (showPreviousPageButton) { onClickPrevious() } }}>
                    &larr; Previous
                </div>

                <div className={"fr dib link f6 f5-ns b pa2" + (showNextPageButton ? " light-red" : " o-50 gray")}
                    onClick={() => { if (showNextPageButton) { onClickNext() } }}>
                    Next &rarr;
                </div>
            </nav>
        </div>
    )
}

export default Pagination;