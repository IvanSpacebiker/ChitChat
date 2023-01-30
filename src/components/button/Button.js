import React from "react";
import PropTypes from "prop-types";


function Button(props) {
    return (
        <div>Button</div>
    );
}

Button.propTypes = {
    label   : PropTypes.string.isRequired,
    type    : PropTypes.string.isRequired,

    // Handlers
    onClick : PropTypes.func.isRequired,
};

export default Button;