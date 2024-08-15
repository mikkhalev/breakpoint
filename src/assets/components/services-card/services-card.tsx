import React from 'react';
// @ts-ignore
import classes from "./services-card.module.scss";
interface CardConfig {
    href: string,
    number: string,
    icon: string,
    iconHover: string,
    price: string,
    date: string,
    title: string
}
const ServicesCard = ({href, number, icon, iconHover, price, date, title}:CardConfig) => {
    return (
        <a href={`${href}`} className={`${classes.card} flex-box-column space-between`}>
            <div className={`${classes.numberRow} flex-box-row space-between`}>
                <span>
                   #{number}
                </span>
                <img src={'../../../../images/link-arrow.svg'} alt={'Ссылка'}/>
            </div>
            <div className={classes.cardImages}>
                <img className={`${classes.cardImageDefault}`} src={`${icon}`} alt={''}/>
                <img className={`${classes.cardImageHover}`} src={`${iconHover}`} alt={''}/>
            </div>
            <div className={`${classes.cardInfo} flex-box-column`}>
                <div className={'flex-box-row space-between'}>
                    <span>
                        от {price} ₽
                    </span>
                    <span>
                        {date}
                    </span>
                </div>
                <span>
                    {title}
                </span>
            </div>
        </a>
    );
};

export default ServicesCard;