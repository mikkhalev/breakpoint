import React from 'react';
// @ts-ignore
import classes from "./advantages-card.module.scss";

interface CardCfg {
    num:number,
    title:string,
    text:string
}
const AdvantagesCard = ({num, title, text}:CardCfg) => {
    return (
        <div className={`${classes.card} ${classes['card' + num]} flex-box-column space-between`}>
            <div className={`${classes.cardNum}`}>
                /0{num}
            </div>
            <div className={`${classes.cardContent} flex-box-column`}>
                <span className={`${classes.cardTitle}`}>
                    {title}
                </span>
                <span className={`${classes.cardText}`}>
                    {text}
                </span>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/vector-circle.svg`} alt={''}/>
        </div>
    );
};

export default AdvantagesCard;