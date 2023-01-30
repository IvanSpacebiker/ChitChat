import React from "react";
import PropTypes from "prop-types";

//Styles
import "./Button.scss"


function Button(props) {

    return (
        <div className={"button type_" + props.type} onClick={props.onClick}>
            <p>{props.label}</p>
        </div>
    );
}

Button.propTypes = {
    label   : PropTypes.string.isRequired,
    type    : PropTypes.number.isRequired,

    // Handlers
    onClick : PropTypes.func.isRequired,
};







export default Button;