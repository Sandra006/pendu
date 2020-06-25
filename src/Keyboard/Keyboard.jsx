import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './Keyboard.css';

const Keyboard = ({keyboard, usedLetters, onClick}) => {
    const handleClick = letter => {
        if (!usedLetters.includes(letter)) {
            onClick(letter);
        }
    }
    return (<div className="keyboard d-flex flex-column w-100">
        <div className="d-flex align-items-center w-100">
        {
            keyboard.map((letter, index) => 
                {
                    return (index < 13 && (
                        <div onClick={() => handleClick(letter)} key={index} className={classNames({ disabled: usedLetters.includes(letter)}, "letter mx-2 d-flex justify-content-center align-items-center")}>
                            <span  >{letter}</span>
                        </div>
                    ))
                }
            )
        }
        </div>
        <div className="d-flex align-items-center w-100 mt-2">
        {
            keyboard.map((letter, index) => 
                {
                    return (index > 12 && (
                        <div onClick={() => handleClick(letter)} key={index} className={classNames({ disabled: usedLetters.includes(letter)}, "letter mx-2 d-flex justify-content-center align-items-center")}>
                            <span>{letter}</span>
                        </div>
                ))}
            )
        }
        </div>
    </div>)
};

Keyboard.propTypes = {
    usedLetters: propTypes.arrayOf(
        propTypes.string
    ).isRequired,
    keyboard: propTypes.arrayOf(
        propTypes.string
    ).isRequired,
    onClick: propTypes.func.isRequired,
};

export default Keyboard;