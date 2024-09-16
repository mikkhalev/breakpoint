import React from 'react';
// @ts-ignore
import classes from './button.module.scss';

interface BtnConfig {
    color: string,
    isArrow: boolean,
    title: string
}
const Button = ({color, isArrow, title}:BtnConfig) => {
    let btnColor;
    if (color === 'black') {
        btnColor = classes.btnBlack;
    } else if (color === 'white') {
        btnColor = classes.btnWhite;
    } else if (color === 'grey') {
        btnColor = classes.btnGrey;
    } else {
        btnColor = classes.btnBlack;
    }
    return (
        <button className={btnColor}>
            <div>
                <span>
                    {title}
                </span>
                {
                    isArrow ? <img src={`${process.env.PUBLIC_URL}/images/arrow-r.svg`} alt=""/> : ''
                }
            </div>
        </button>
    );
};

export default Button;