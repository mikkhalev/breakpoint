import React from 'react';
// @ts-ignore
import classes from '../../css/sections/advantages.module.scss'
import AdvantagesCard from "../advantages-card/advantages-card";
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
                    <AdvantagesCard
                        num={1}
                        title={'Круглосуточная\nподдержка'}
                        text={'Даём пожизненную гарантию на разработки, находимся на связи 24/7, отвечаем на интересующие вопросы в мессенджерах или по телефону'}
                    />
                    <div className={'flex-box-column'}>
                        <AdvantagesCard
                            num={2}
                            title={'Опытная команда\nспециалистов'}
                            text={'Имеем широкий профильный опыт: каждый член команды занимается разработками более 10-ти лет. Мы работали с данными и создавали решения в реальных секторах бизнеса: от финансов до строительства'}
                        />
                        <div className={`${classes.twoCardsRow} flex-box-row`}>
                            <AdvantagesCard
                                num={3}
                                title={'Глубокий\nанализ'}
                                text={'Погружаемся в процессы компании, анализируем их в реальном времени и выявляем задачи, которые предстоит закрыть, чтобы создать решение'}
                            />
                            <AdvantagesCard
                                num={4}
                                title={'Уникальные\nрешения'}
                                text={'Подбираем готовые разработки под задачи заказчика или создаём новый продукт, который эффективно решит проблемы бизнеса'}
                            />
                        </div>
                    </div>
                </div>
                <div className={`${classes.borders}`}>

                </div>
            </div>
        </section>
    );
};

export default Advantages;