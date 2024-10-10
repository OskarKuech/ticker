import React from "react";
import '../../styles/navigation.css';

interface TabProps {
    name: string;
    isActive: boolean;
    onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ name, isActive, onClick }) => {
    return (
        <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
            <div className="tabname">
                <p>{name}</p>
            </div>
            <div className={`tab-underline ${isActive ? 'visible' : ''}`}></div>
        </div>
    );
};

export default Tab;