import React from "react";
import '../../styles/navigation.css'

interface TabProps {
    name: string;
}

const Tab: React.FC<TabProps> = ({name}) => {
    return (
        <div className="tab">
            <div className="tabname">
                <p>{name}</p>
            </div>
            {/* RECTANGLE FOR UNDERLINE */}
            <div className="tab-underline"></div>
        </div>
    )
}

export default Tab;