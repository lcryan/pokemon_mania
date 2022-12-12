import React from 'react';

function Button(props) {
    return (
        <div>
            <button type="button" className="btn"
                    onClick={Clickhandler}
                    disabled={disabled}>
                {children}</button>



        </div>
    );
}

export default Button;


