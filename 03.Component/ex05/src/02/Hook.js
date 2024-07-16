import React, {useState, useEffect} from 'react';

export default function Hook({ color }) {
    const [backgroundColor, setBackgourndColor] = useState(null);
    const [text, setText] = useState('');

    /**
     *  Alternative 01: getDerivedStateFromProps
     */
    if(color !== backgroundColor) {
        setBackgourndColor(color);
    }

    /**
     *  After Rendering
     *  class component(componentDidUpdate, componentDidMount)
     * 
     */
    useEffect(() => {
        console.log('After Rendering: update text or update backgroundColor');
    });

    /**
     * After Rendering
     * 어떤 특정 상태의 변화에 반응하는 함수
     * 
     */
    useEffect(() => {
        console.log('After Rendering: update text');
    }, [text]);

    return (
        <>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: backgroundColor
                } } />
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        </>
    );
}