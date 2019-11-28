import React , { useState , useEffect , useRef } from 'react';

const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== 'function') {
        return;
    }
    const handle = (event) => {
        // console.log('leaving');
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
        
    }
    useEffect( () => {
        document.addEventListener('mouseleave' , handle);
        return () => {
            document.removeEventListener('mouseleave' , handle);
        }
    }, [])
}

const UseBeforeLeave = () => {
    const begForLife = () => console.log('Pls dont leave');
    useBeforeLeave(begForLife)
    return(
        <>
            <h1>UseBeforeLeave</h1>

        </>
    );
}

export default UseBeforeLeave;