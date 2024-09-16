import React from 'react';
// @ts-ignore
import classes from "./category-card.module.scss";

interface category {
    title:string,
    text:string[],
    price:string
}
const CategoryCard = ({title, text, price}:category) => {
    return (
        <div className={`${classes.categoryCard} flex-box-column space-between`}>
            <div className={`${classes.categoryContent}`}>
                <span>
                    {title}
                </span>
                <div></div>
                <div>
                    {
                        text.map(row =>
                            <span>{row}</span>
                        )
                    }
                </div>
            </div>
            <div className={`${classes.categoryInfo} flex-box-row space-between`}>
                <span>
                    {price}
                </span>
                <div>
                    <a href={'/'}>
                        <span>
                            Оставить заявку
                        </span>
                        <img src={`${process.env.PUBLIC_URL}/images/arrow-r.svg`} alt={''}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;