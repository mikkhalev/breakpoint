import React from 'react';
// @ts-ignore
import classes from '../../css/sections/category.module.scss'
import CategoryCard from "../category-card/category-card";

interface catCfg {
    title: string[],
    cards: Array<{ title: string, list: string[], price: string }>
}
const Category = ({title,cards}:catCfg) => {
    return (
        <section className={classes.categoriesScreen}>
            <div className={'wrapper flex-box-column'}>
                <div className={`${classes.titleRow}`}>
                    <span className={"small-title"}>
                        пакеты услуг
                    </span>
                    <span className={'title'}>
                        {title[0]}
                    </span>
                    <span className={'title'}>
                        {title[1]}
                    </span>
                </div>
                <div className={`${classes.categories} flex-box-row`}>
                    {
                        cards.map((card, key) =>
                            <CategoryCard
                                title={card.title}
                                text={card.list}
                                price={card.price}
                            />
                        )
                    }
                </div>
            </div>
            <div className={`${classes.borders}`}>

            </div>
        </section>
    );
};

export default Category;