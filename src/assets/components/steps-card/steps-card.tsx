import React from 'react';
// @ts-ignore
import classes from './steps-card.module.scss'
interface stepCfg {
    num:number,
    title:string,
    text:string
}
const StepsCard = ({num, title, text}:stepCfg) => {
    return (
        <div className={`${classes.step} flex-box-row space-between`}>
            <div className={'flex-box-row'}>
                <span className={`${classes.stepNum}`}>
                    /0{num}/
                </span>
                <div className={`flex-box-column`}>
                    <span className={`${classes.stepTitle}`}>
                        {title}
                    </span>
                    <span className={`${classes.stepInfo}`}>
                        {text}
                    </span>
                </div>
            </div>
            <img src={'../../../../images/link-arrow.svg'} alt={'Подробнее'}/>
        </div>
    );
};

export default StepsCard;