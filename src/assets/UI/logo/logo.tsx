import React from 'react';
// @ts-ignore
import classes from './logo.module.scss'
import {Link} from "react-router-dom";

interface logoCfg {
    white:boolean
}
const Logo = (props:logoCfg) => {
    return (
        <Link to={"/"}>
            <span className={`${classes.logo} ${props.white ? classes.white : ''}`}>
                the breakpoint.
            </span>
        </Link>

    );
};

export default Logo;