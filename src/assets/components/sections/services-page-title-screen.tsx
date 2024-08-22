import React from 'react';

// @ts-ignore
import classes from '../../css/sections/services-page-title-screen.module.scss'
interface section {
    title:string,
    bid:string,
    img:string
}
const ServicesPageTitleScreen = ({title, bid, img}:section) => {
    return (
        <section className={`${classes.titleScreen}`}>
            <div className={`${classes.title} wrapper flex-box-column`}>
                <h1>
                    { title.replace(/ /g, '\n') }
                </h1>
                <a href={bid}>
                    Заполнить бриф
                </a>
                <img className={classes.icon} src={img} alt={''}/>
                <img className={classes.vector1} src={'../../../../images/vector-circle.svg'} alt={''}/>
                <img className={classes.vector2} src={'../../../../images/vector-circle.svg'} alt={''}/>
                <img className={classes.vector3} src={'../../../../images/vector-circle.svg'} alt={''}/>
            </div>
            <div className={`${classes.borders}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default ServicesPageTitleScreen;