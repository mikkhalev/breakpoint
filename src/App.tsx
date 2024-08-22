import React from 'react';
import './assets/css/app.scss';
import './assets/css/general.scss';
import Header from "./assets/components/sections/header";
import Footer from "./assets/components/sections/footer";
import MainPage from "./assets/pages/main-page";
import AppRouter from "./assets/router/app-router";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
