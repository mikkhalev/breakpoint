import React from 'react';

// @ts-ignore
import classes from '../../css/sections/main-page-title-screen.module.scss'
import Button from "../../UI/button/button";
const MainPageTitleScreen = () => {
    return (
        <section id="title-section">
            <div className={`${classes.section} wrapper flex-box-column`}>
                <div className={`${classes.btnsRow} flex-box-row`}>
                    <div className={classes.button}>
                        <Button
                            color="grey"
                            isArrow={false}
                            title="Обслуживание сайтов"
                        />
                    </div>
                    <div className={classes.button}>
                        <Button
                            color="grey"
                            isArrow={false}
                            title="Аудит сайта"
                        />
                    </div>
                    <div className={classes.button}>
                        <Button
                            color="grey"
                            isArrow={false}
                            title="Разработка сайтов"
                        />
                    </div>
                    <div className={classes.button}>
                        <Button
                            color="grey"
                            isArrow={false}
                            title="Редизайн и улучшение"
                        />
                    </div>
                </div>
                <h1>
                    бюджетные сайты<br/>для малого бизнеса
                </h1>
                <div className={`${classes.infoBoxRow} flex-box-row space-between`}>
                    <div className={classes.infoBox}>
                        <span>
                            3 дня
                        </span>
                        <span>
                            Минимальное время<br/>разработки сайта
                        </span>
                    </div>
                    <div className={classes.infoBox}>
                        <span>
                            10 000 ₽
                        </span>
                        <span>
                            Минимальная<br/>стоимость сайта
                        </span>
                    </div>
                </div>
                <div className={`${classes.borders}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default MainPageTitleScreen;