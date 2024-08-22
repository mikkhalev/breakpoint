import React from 'react';
// @ts-ignore
import classes from '../../css/sections/services.module.scss'
import ServicesCard from "../services-card/services-card";


const Services = () => {
    return (
        <section className="section">
            <div className="wrapper flex-box-column">
                <div className={`${classes.titleRow} flex-box-row`}>
                    <div className="small-title">
                        услуги
                    </div>
                    <div className={`${classes.title} title flex-box-column`}>
                        <span>
                            Предоставляем комплекс
                        </span>
                        <span>
                            инструментов для цифровой
                        </span>
                        <span>
                            трансформации бизнеса:
                        </span>
                        <span className={`${classes.titleMob}`}>
                            Предоставляем комплекс инструментов для цифровой трансформации бизнеса:
                        </span>
                    </div>
                </div>
                <div className={`${classes.services} flex-box-row`}>
                    <ServicesCard
                        href="/development/"
                        number="1"
                        icon="../../../../images/semicircle.svg"
                        iconHover="../../../../images/card-1-hover.png"
                        price="20 000"
                        date="от 5 дней"
                        title="Разработка сайтов"
                    />
                    <ServicesCard
                        href="/"
                        number="2"
                        icon="../../../../images/euler-circles.svg"
                        iconHover="../../../../images/card-2-hover.png"
                        price="800"
                        date="от 1 часа"
                        title="обслужива–ние сайтов"
                    />
                    <ServicesCard
                        href="/"
                        number="3"
                        icon="../../../../images/semicircle-2.svg"
                        iconHover="../../../../images/card-3-hover.png"
                        price="15 000"
                        date="от 10 дней"
                        title="Дизайн"
                    />
                    <ServicesCard
                        href="/"
                        number="4"
                        icon="../../../../images/ovals.svg"
                        iconHover="../../../../images/card-4-hover.png"
                        price="10 000"
                        date="от 5 дней"
                        title="Апгрейт сайтов"
                    />
                </div>
                <div className={`${classes.borders}`}>

                </div>
            </div>
        </section>
    );
};

export default Services;