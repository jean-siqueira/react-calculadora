import React from "react";
import './Button.css'

export default props => 
    <button className={`
        button
        ${props.operation? 'operation': ''}
        ${props.duble? 'duble': ''}
        ${props.triple? 'triple': ''}
    `}>
        {props.label}
    </button>