import React from 'react';
 
import "./Modal.css";

export function Modal(props){
    return(
        <div className='modal--background-container'>
            <div className='modal--container'>
                {props.children}
            </div>
        </div>
    );
}