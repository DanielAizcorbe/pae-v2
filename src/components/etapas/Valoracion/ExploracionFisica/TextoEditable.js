import TextArea from 'antd/es/input/TextArea';
import React from 'react'

export const TextoEditable = ({placeholder, text, setText}) => {

    const changeText = (event) => {
        setText(event.target.value);
    }

    return (
        <TextArea 
            value={text}
            onChange={changeText}
            variant='outlined'
            autoSize
            placeholder={placeholder}
        />
    )
}
