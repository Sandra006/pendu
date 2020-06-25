import React from 'react';
import propTypes from 'prop-types';
import './Letters.css';

const Letters = ({ word }) => {
    return (
        <div>
            {
                word.split('').map((letter, index) => (
                    <span className="letter mx-2" key={index}>{letter}</span>
                ))
            }
        </div>
    )
};

Letters.propTypes = {
    word: propTypes.string.isRequired,
}

export default Letters;