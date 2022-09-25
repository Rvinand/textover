import React from "react";
import Classes from "./LoadingPopup.module.scss";
import "./LoadingPopup.module.scss";

const LoadingPopup = () => {
    return (
        <div className={Classes.popup}>
            <div className={Classes["lds-ellipsis"]}><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default LoadingPopup;