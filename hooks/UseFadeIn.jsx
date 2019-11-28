import React , { useState , useEffect , useRef } from 'react';

const useFadeIn = (duration = 1 , delay = 0) => {
    if(typeof duration !== 'number' || typeof delay !== 'number') {
        return
    }
    const element = useRef();
    useEffect( () => {
        if(element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
            current.style.opacity = 1;
        }
    }, [])
    return { ref : element , style : {opacity : 0} };
}

const UseFadeIn = () => {
    const fadeInH1 = useFadeIn(1,2);
    const fadeInp = useFadeIn(3,4);
    return(
        <>
            <h1 {...fadeInH1}>UseFadeIn</h1>
            <p {...fadeInp}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </>
    );
}

export default UseFadeIn;