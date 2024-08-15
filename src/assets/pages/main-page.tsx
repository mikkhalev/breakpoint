import React from 'react';
import MainPageTitleScreen from "../sections/main-page-title-screen";
import Services from "../sections/services";
import Advantages from "../sections/advantages";
import Steps from "../sections/steps";

const MainPage = () => {
    return (
        <main>
            <MainPageTitleScreen/>
            <Services/>
            <Advantages/>
            <Steps/>
        </main>
    );
};

export default MainPage;