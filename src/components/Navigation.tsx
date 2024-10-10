import React from "react";
import '../styles/navigation.css';
import Tab from "./item/Tab";

interface NavigationProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="navigation">
            <div className="navigation-line-fullwidth">
                <Tab name="Ticker" isActive={activeTab === "Ticker"} onClick={() => setActiveTab("Ticker")} />
                <Tab name="Aufstellung" isActive={activeTab === "Aufstellung"} onClick={() => setActiveTab("Aufstellung")} />
            </div>
        </div>
    );
};

export default Navigation;