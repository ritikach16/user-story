import React from 'react';

interface IconProp{
    src : string;
    className ?: string
}

const Icons = (props : IconProp) => {
    return(
        <img src={props.src} alt="icon" className={props.className}/>
    )
}

export default Icons;