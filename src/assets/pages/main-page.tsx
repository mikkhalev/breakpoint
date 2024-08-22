import React from 'react';
import MainPageTitleScreen from "../components/sections/main-page-title-screen";
import Services from "../components/sections/services";
import Advantages from "../components/sections/advantages";
import Steps from "../components/sections/steps";

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