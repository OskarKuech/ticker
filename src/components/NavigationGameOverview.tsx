import React from "react";
import '../styles/navigation.css';
import Tab from "./item/Tab";

interface NavigationProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;

}
const NavigationGameOverview: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="navigation">
            <div className="navigation-line-fullwidth">
                <Tab name="Neutral" isActive={activeTab === "Neutral"} onClick={() => setActiveTab("Neutral")} />
                <Tab name="Union-Style" isActive={activeTab === "Union-Style"} onClick={() => setActiveTab("Union-Style")} />
            </div>
        </div>
    );
};

export default NavigationGameOverview;