import React from "react";
import "./textarea.css";

const TextArea = ({ text, setText }) => {
    return (
        <textarea
            className="textarea"
            value={text}
            onChange={(event) => setText(event.target.value)}
        />
    );
};

export { TextArea };
