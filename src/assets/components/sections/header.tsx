import React, {useState} from 'react';
import Logo from "../../UI/logo/logo";
import Navigation from "../../UI/navigation/navigation";
import Button from "../../UI/button/button";
// @ts-ignore
import classes from '../../css/sections/header.module.scss'
const Header = () => {
    const [scrollTop, setScrollTop] = useState(0)
    onscroll = (event) => {
        setScrollTop(window.scrollY)
    };
    return (
        <header>
            <div className="wrapper flex-box-row space-between">
                <div className={classes.logo}>
                    <Logo
                        white={false}
                    />
                </div>
                <div className={classes.navigation}>
                    <Navigation/>
                </div>
                <div className={`${classes.headerButton} flex-box-row space-between`}>
                    <Button
                        color="black"
                        isArrow={true}
                        title="заполнить бриф"
                    />
                </div>
            </div>
            <div className={`${classes.borders} ${scrollTop > 0 ? classes.hiddenBorders : ''}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    );
};

export default Header;