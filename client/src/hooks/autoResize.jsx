import React, { useRef, useEffect } from 'react'

const autoResize = (textAreaRef, value) => {
    useEffect(() => {
        if (textAreaRef.current) {
            // setting height to 0px to calculate the scrollheight
            textAreaRef.current.style.height = '0px';
            const scrollHeight = textAreaRef.current.scrollHeight;
            // setting the height based on the content's scroll height
            textAreaRef.current.style.height = scrollHeight + 'px';

        }
    }, [value]);
}

export default autoResize