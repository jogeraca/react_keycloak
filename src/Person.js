import React from 'react';
import PropTypes from "prop-types";

function Person(props) {
    return (
        <div className="person">
            <span> {props.first_name}</span>
            <span> {props.last_name}</span>
        </div>
    );
}


Person.propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired
}

export default Person;
