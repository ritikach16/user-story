import React from 'react';

interface ImageProp{
    src : string;
    onClick : () => void;
    className ?: string
}

const Image = (props : ImageProp) => {
    return(
        <img src={props.src} alt="book" onClick={props.onClick} className={props.className}/>
    )
}

export default Image;