import React from 'react';

const Spinner = ({ message }) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                { message }
            </div>
        </div>
    );
}

// props por defecto si no se especifican
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;