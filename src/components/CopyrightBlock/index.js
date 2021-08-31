import React from 'react';

const CopyrightBlock = (props) => {
    console.log(props.copyright)
    return (
        <div>
            {props.copyright}            
        </div>
    );
};

export default CopyrightBlock;