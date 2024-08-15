import React from 'react';
// @ts-ignore
import classes from '../../../css/section-four.module.scss'
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

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Steps;