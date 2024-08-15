import React from 'react';
// @ts-ignore
import classes from '../../../css/section-three.module.scss'
const Advantages = () => {
    return (
        <section className="section">
            <div className={`wrapper flex-box-column`}>
                <div className={`${classes.titleRow}`}>
                    <span className={'small-title'}>
                        преимущества
                    </span>
                    <span className={'title'}>
                        Получить<br/>качественный&nbsp;
                    </span>
                    <span className={'title'}>
                        результат,<br/> за доступную цену<br/>
                    </span>
                    <span className={'title'}>
                         — реально!
                    </span>
                </div>
                <div className={`${classes.advantages} flex-box-row`}>
                    <div className={`${classes.card} ${classes.card1} flex-box-column space-between`}>
                        <div className={`${classes.cardNum}`}>
                            /01
                        </div>
                        <div className={`${classes.cardContent} flex-box-column`}>
                            <span className={`${classes.cardTitle}`}>
                                Круглосуточная<br/>поддержка
                            </span>
                            <span className={`${classes.cardText}`}>
                                Даём пожизненную гарантию на разработки, находимся на связи 24/7, отвечаем
                                на интересующие вопросы в мессенджерах
                                или по телефону
                            </span>
                        </div>
                        <img src={'../../../../images/vector-circle.svg'} alt={''}/>
                    </div>
                    <div className={'flex-box-column'}>
                        <div className={`${classes.card} ${classes.card2} flex-box-column space-between`}>
                            <div className={`${classes.cardNum}`}>
                                /02
                            </div>
                            <div className={`${classes.cardContent} flex-box-column`}>
                                <span className={`${classes.cardTitle}`}>
                                    Опытная команда<br/>специалистов
                                </span>
                                <span className={`${classes.cardText}`}>
                                    Имеем широкий профильный опыт: каждый член команды занимается разработками более 10-ти лет.
                                    Мы работали с данными и создавали решения в реальных секторах
                                    бизнеса: от финансов до строительства
                                </span>
                            </div>
                            <img src={'../../../../images/vector-circle.svg'} alt={''}/>
                        </div>
                        <div className={`${classes.twoCardsRow} flex-box-row`}>
                            <div className={`${classes.card} ${classes.card3} flex-box-column space-between`}>
                                <div className={`${classes.cardNum}`}>
                                    /03
                                </div>
                                <div className={`${classes.cardContent} flex-box-column`}>
                                    <span className={`${classes.cardTitle}`}>
                                        Глубокий<br/>анализ
                                    </span>
                                    <span className={`${classes.cardText}`}>
                                        Погружаемся в процессы компании, анализируем их в реальном времени
                                        и выявляем задачи, которые предстоит закрыть, чтобы создать решение
                                    </span>
                                </div>
                                <img src={'../../../../images/vector-circle.svg'} alt={''}/>
                            </div>
                            <div className={`${classes.card} ${classes.card4} flex-box-column space-between`}>
                                <div className={`${classes.cardNum}`}>
                                    /04
                                </div>
                                <div className={`${classes.cardContent} flex-box-column`}>
                                    <span className={`${classes.cardTitle}`}>
                                        Уникальные<br/>решения
                                    </span>
                                    <span className={`${classes.cardText}`}>
                                        Подбираем готовые разработки
                                        под задачи заказчика или создаём новый продукт, который эффективно решит проблемы бизнеса
                                    </span>
                                </div>
                                <img src={'../../../../images/vector-circle.svg'} alt={''}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;