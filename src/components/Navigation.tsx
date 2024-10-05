import React from "react";
import '../styles/navigation.css'
import Tab from "./item/Tab";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation-line-fullwidth">
                <Tab name="Ticker"/>
                <Tab name="Aufstellung"/>
            </div>
        </div>
    )
}

export default Navigation;