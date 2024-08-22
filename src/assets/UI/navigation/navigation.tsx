import React, {useState} from 'react';
// @ts-ignore
import classes from './navigation.module.scss'
import MobNavigation from "./mob-navigation";
import NavItems from "./nav-items";

const Navigation = () => {
    const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

    return (
        <div className={classes.navigation}>
           <NavItems/>
            <div className={`${classes.mobileMenuOpen}`} onClick={() => setMobileMenuStatus(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                    <line y1="15" x2="24" y2="15" stroke="#101010" stroke-width="2"/>
                    <line x1="6" y1="8" x2="24" y2="8" stroke="#101010" stroke-width="2"/>
                    <line y1="1" x2="24" y2="1" stroke="#101010" stroke-width="2"/>
                </svg>
            </div>
            <MobNavigation
                isOpen={mobileMenuStatus}
                setMobileMenuStatus={setMobileMenuStatus}
            />
        </div>
    );
};

export default Navigation;