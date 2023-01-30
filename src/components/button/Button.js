import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

//Styles
import styles from "./button.module.scss"


function Button({ label, type, onClick }) {

    return (
        <div className={classNames(styles.button, styles[type])} onClick={onClick}>
            <p>{label}</p>
        </div>
    );
}

Button.propTypes = {
    label   : PropTypes.string.isRequired,
    type    : PropTypes.string.isRequired,

    // Handlers
    onClick : PropTypes.func.isRequired,
};







export default Button;