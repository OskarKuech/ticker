import React from "react";
import '../../styles/style.css'

interface TextProps {
    text?: string;
    headline?: string;
}

const Text: React.FC <TextProps> = ({text, headline}) => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px"}}>
                <p className="text-event">{headline}</p>
                <p>{text}</p>
        </div>
    )
}
 
export default Text;