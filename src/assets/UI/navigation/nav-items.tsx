import React from 'react';
// @ts-ignore
import classes from './nav-items.module.scss'
const NavItems = () => {
    return (
        <div className={classes.navItems}>
            <a href="#">
                Услуги
                <div className={classes.hoverCircle}></div>
            </a>
            <a href="#">
                Преимущества
                <div className={classes.hoverCircle}></div>
            </a>
            <a href="#">
                Этапы
                <div className={classes.hoverCircle}></div>
            </a>
            <a href="#">
                Контакты
                <div className={classes.hoverCircle}></div>
            </a>
        </div>
    );
};

export default NavItems;