import React from "react";
import Frame from "./item/Frame";

interface CommentProps {
    minute: number;
    icon?: string;
    headline?: string;
    text?: string;
    extra_time?: number;
}

const Comment: React.FC <CommentProps> = ({minute, icon, headline, text, extra_time}) => {
    return (
        <div>
            <Frame minute={minute} extra_time={extra_time} icon={icon} headline={headline} text = {text}></Frame>
        </div>
    )
}

export default Comment;

