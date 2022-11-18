import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import {Dashboard} from "../pages";
import React from "react";

const Layout = ({api, setApi}) => {
    return (
        <>
            <Outlet api={api} setApi={setApi}/>
            <Footer api={api} setApi={setApi}/>
        </>
    );
};

export default Layout;
