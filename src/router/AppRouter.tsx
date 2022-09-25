import React from 'react';
import {publicRoutes} from "./routes";
import {Route, Routes} from "react-router-dom";
import Header from "../components/Header/Header";
import "./AppRouter.scss"

const AppRouter = () => {

    return (
        <>
            <Header/>
            <Routes>
                {
                    publicRoutes.map(({path, Component}, i) => {
                        return <Route key={i} path={path} element={<Component/>}/>
                    })
                }
            </Routes>
        </>

    );
};

export default AppRouter;