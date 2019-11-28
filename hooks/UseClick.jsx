import React , { useState , useEffect , useRef } from 'react';

const useClick = (onClick) => {
    const element = useRef();
    useEffect( () => {
        if(element.current) {
            element.current.addEventListener('click' , onClick);
        }
        return () => {
            if(element.current) {
                element.current.removeEventListener('click' , onClick);
            }
        }
    }, [])
    return element
} 

const UseClick = () => {
    const sayHello = () => console.log('say hello')
    const title = useClick(sayHello);
    const input = useRef();
    setTimeout( () => input.current.focus() , 3000)
    return(
        <>
            <h1 ref={title}>useClick</h1>
            <input ref={input} type="text" placeholder="la" />
           
        </>
    );
}

export default UseClick;