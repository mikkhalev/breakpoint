import React from 'react';
// @ts-ignore
import classes from '../../css/sections/footer.module.scss'
import Button from "../../UI/button/button";
import Logo from "../../UI/logo/logo";
import Navigation from "../../UI/navigation/navigation";
import Input from "../../UI/input/input";
const Footer = () => {
    return (
        <footer>
            <div className={`wrapper flex-box-column`}>
                <span className={`${classes.title}`}>
                    Обсудим проект?
                </span>
                <div className={`${classes.contacts} flex-box-row`}>
                    <div className={`${classes.links} flex-box-column`}>
                        <a href='tel:+79633261649'>
                            +7 (963) 326-16-49
                        </a>
                        <a href='mailto:hello@thebreakpoint.com'>
                            hello@thebreakpoint.com
                        </a>
                    </div>
                    <div className={`${classes.form} flex-box-column`}>
                        <form className={`flex-box-row`}>
                            <Input type={'text'} placeholder={'Имя'} defaultValue={''}/>
                            <Input type={'tel'} placeholder={'Телефон'} defaultValue={''}/>
                            <Input type={'submit'} placeholder={''} defaultValue={'Отправить'}/>
                        </form>
                        <div className={`${classes.socials} flex-box-row`}>
                            <a href="/" target="_blank" className={`${classes.whatsapp}`}>
                                WHATSAPP
                            </a>
                            <a href="/" target="_blank" className={`${classes.telegram}`}>
                                TELEGRAM
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`${classes.navigation} flex-box-row space-between`}>
                    <div className={`${classes.logo} flex-box-column`}>
                        <Logo white={true}/>
                        <span>
                            агентство Разработки сайтов
                        </span>
                    </div>
                    <div className={`${classes.nav}`}>
                        <Navigation/>
                    </div>
                </div>
                <img className={classes.vector} src="../../../../images/vector-circle-dark.svg" alt={""}/>
                <div className={`${classes.borders}`}>

                </div>
            </div>
        </footer>
    );
};

export default Footer;