import React, {useRef} from 'react';
// @ts-ignore
import classes from './mob-navigation.module.scss'
import Logo from "../logo/logo";
import NavItems from "./nav-items";
import Button from "../button/button";

interface modalStatus {
    isOpen:boolean,
    setMobileMenuStatus:any
}
const MobNavigation = ({isOpen, setMobileMenuStatus}:modalStatus) => {
    const menuRef = useRef<HTMLDivElement>(null);
    if (isOpen && menuRef.current != null) {
        const menu = menuRef.current;
        menu.classList.add(classes.mobileMenuActive);
    } else  if (!isOpen && menuRef.current != null){
        const menu = menuRef.current;
        menu.classList.remove(classes.mobileMenuActive);
    }
    return (
        <div className={classes.mobileMenuWrapper} ref={menuRef}>
            <div className={`${classes.mobileMenu} flex-box-column space-between`}>
                <div className="flex-box-row space-between">
                    <Logo
                        white={false}
                    />
                    <div className={`${classes.mobileMenuClose}`} onClick={() => setMobileMenuStatus(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="0.5" y="0.5" width="19" height="19" stroke="#101010"/>
                            <line x1="4.35355" y1="3.64645" x2="16.3536" y2="15.6464" stroke="#101010"/>
                            <line y1="-0.5" x2="16.9706" y2="-0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4)" stroke="#101010"/>
                        </svg>
                    </div>
                </div>
                <NavItems/>
                <div className={classes.button}>
                    <Button
                        color={'black'}
                        isArrow={true}
                        title={'заполнить бриф'}
                    />
                </div>
            </div>
        </div>
    );
};

export default MobNavigation;