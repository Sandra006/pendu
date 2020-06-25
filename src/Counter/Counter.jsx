import React from 'react';
import propTypes from 'prop-types';
import './Counter.css';

const Counter = ({counter}) => {
    return (
        <div>
            Nombre de tentatives : {counter}
        </div>
    )
}

Counter.propTypes = {
    counter: propTypes.number.isRequired
}

export default Counter;