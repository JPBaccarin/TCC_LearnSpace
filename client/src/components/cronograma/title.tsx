import React from "react";

function Title(props:any) {
    return(
        <div>
            <p className='font-bold mb-3 text-lg'>{ props.name }</p>
        </div>
    );
}

export default Title;