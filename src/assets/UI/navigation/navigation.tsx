import React from 'react';
// @ts-ignore
import classes from '../css/navigation.module.scss'

const Navigation = () => {
    return (
        <div className={classes.navigation}>
            <a href="#">
                Услуги
            </a>
            <a href="#">
                Преимущества
            </a>
            <a href="#">
                Этапы
            </a>
            <a href="#">
                Контакты
            </a>
        </div>
    );
};

export default Navigation;