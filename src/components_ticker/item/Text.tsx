import React from "react";
import '../../styles/style.css';

interface TextProps {
    text?: string;
    headline?: string;
}

const Text: React.FC<TextProps> = ({ text, headline }) => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: headline ? "16px" : "0px" }}>
                <p className="text-event">{headline}</p>
            {text && text.split('\n').map((line, index) => (
                <p key={index} style={{ margin: 0 }}>{line}</p>
            ))}
        </div>
    );
}

export default Text;
