import React from 'react';
// @ts-ignore
import classes from '../../css/sections/steps.module.scss'
import StepsCard from "../steps-card/steps-card";
const Steps = () => {
    return (
        <section className={'section'}>
            <div className={`${classes.steps} wrapper flex-box-column`}>
                <div className={`${classes.titleRow}`}>
                    <span className={'small-title'}>
                        Этапы работы
                    </span>
                    <span className={'title'}>
                        прозрачные<br/>и комфортные&nbsp;
                    </span>
                    <span className={'title'}>
                        условия<br/>разработки
                    </span>
                </div>
                <div className={`${classes.stepsRow} flex-box-row`}>
                    <div className={`${classes.stepsColumn} flex-box-column`}>
                        <StepsCard
                            num={1}
                            title={'Знакомство'}
                            text={'Подбираю референсы и обсуждаю их с вами. На примере 1-2 блоков сайта представляю дизайн-концепцию. После её согласования создаю дизайн для веб- и мобильной версии сайта.'}
                        />
                        <StepsCard
                            num={2}
                            title={'Исследование'}
                            text={'Подбираю референсы и обсуждаю их с вами. На примере 1-2 блоков сайта представляю дизайн-концепцию. После её согласования создаю дизайн для веб- и мобильной версии сайта.'}
                        />
                        <StepsCard
                            num={3}
                            title={'Прототип'}
                            text={'Подбираю референсы и обсуждаю их с вами. На примере 1-2 блоков сайта представляю дизайн-концепцию. После её согласования создаю дизайн для веб- и мобильной версии сайта.'}
                        />
                    </div>
                    <div className={`${classes.stepsColumn} flex-box-column`}>
                        <StepsCard
                            num={4}
                            title={'Дизайн'}
                            text={'Подбираю референсы и обсуждаю их с вами. На примере 1-2 блоков сайта представляю дизайн-концепцию. После её согласования создаю дизайн для веб- и мобильной версии сайта.'}
                        />
                        <StepsCard
                            num={5}
                            title={'Вёрстка'}
                            text={'Подбираю референсы и обсуждаю их с вами. На примере 1-2 блоков сайта представляю дизайн-концепцию. После её согласования создаю дизайн для веб- и мобильной версии сайта.'}
                        />
                        <StepsCard
                            num={6}
                            title={'Запуск'}
                            text={'Подбираю референсы и обсуждаю их с вами. На примере 1-2 блоков сайта представляю дизайн-концепцию. После её согласования создаю дизайн для веб- и мобильной версии сайта.'}
                        />
                    </div>
                </div>
                <div className={`${classes.borders}`}>

                </div>
            </div>
        </section>
    );
};

export default Steps;