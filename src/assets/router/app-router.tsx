import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../pages/main-page";
import NotFound404 from "../pages/not-found-404";
import Development from "../pages/development";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/development/'} element={<Development/>}/>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'404'} element={<NotFound404/>}/>
            <Route path={'*'} element={<NotFound404/>}/>
        </Routes>
    );
};

export default AppRouter;