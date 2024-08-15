import React from 'react';
import Logo from "../UI/logo/logo";
import Navigation from "../UI/navigation/navigation";
import Button from "../UI/button/button";
// @ts-ignore
import classes from '../css/header.module.scss'
const Header = () => {
    return (
        <header>
            <div className="wrapper flex-box-row space-between">
                <div className={classes.logo}>
                    <Logo/>
                </div>
                <div className={classes.navigation}>
                    <Navigation/>
                </div>
                <div className={`${classes.headerButton} flex-box-row space-between`}>
                    <Button
                        color="black"
                        isArrow={true}
                        title="Заполнить бриф"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;