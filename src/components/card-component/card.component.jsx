import React from 'react';

const Card = (props) => {
    return (
        <div className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            {
                props.emptyList ?
                    <div className="tc">
                        <img src="https://img.icons8.com/cute-clipart/64/000000/nothing-found.png" className="br-100 h3 w3 dib" alt='No Data' />
                        <h1 className="f4">{props.message}</h1>
                    </div>
                    : props.errorCard ?
                        <div className="tc">
                            <img src="https://img.icons8.com/cute-clipart/64/000000/error.png" className="br-100 h3 w3 dib" alt='Error' />
                            <h1 className="f4">{props.message}</h1>
                        </div>
                        :
                        <div>
                            <div className="tc">
                                <h1 className="f4">{props.status + " " + props.type}</h1>
                                <hr className="mw3 bb bw1 b--black-10" />
                            </div>
                            <p className="lh-copy measure center f6 black-70">
                                {props.seriesName}
                            </p>
                        </div>
            }
        </div>
    )
}

export default Card;