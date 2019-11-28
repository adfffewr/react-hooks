import React , { useState , useEffect , useRef } from 'react';

const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = '';
    }
    const enablePreve = () => window.addEventListener('beforeunload' , listener);
    const disablePrevent = () => window.removeEventListener('beforeunload' , listener);
    return { enablePreve , disablePrevent }
}

const UsePreventLeave = () => {
    const {enablePreve , disablePrevent} = usePreventLeave();
    return(
        <>
            <h1>UsePreventLeave</h1>
            <button onClick={enablePreve}>protect</button>
            <button onClick={disablePrevent}>unprotect</button>
        </>
    );
}

export default UsePreventLeave;