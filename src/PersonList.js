
import React from 'react';
import PropTypes from "prop-types";

import Person from "./Person";

function PersonList(props) {
    return (
        <div>
            {props.people.map(p => <Person key={p.id} first_name={p.first_name} last_name={p.last_name}/>)}
        </div>
    );
}

PersonList.propTypes = {
    people: PropTypes.array.isRequired
};
export default PersonList
