import React , { useState , useEffect } from 'react';


const useNetwork = onChange => {
    const [status , setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if(typeof onChange === 'function') {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect( () => {
        window.addEventListener('online' , handleChange);  
        window.addEventListener('offline' , handleChange); 
        return () => {
            window.removeEventListener('online' , handleChange);  
            window.removeEventListener('offline' , handleChange);  
        } ;
    }, []);
    return status;
}

const UseNetwork = () => {
    const handleNetworkChange = (online) => {
        console.log( online ? "We just online" : "We just offline" )
    }
    const onLine = useNetwork(handleNetworkChange);
    return(
        <>
            <h1>UseNetwork</h1>
            <p>{onLine ? 'Online' : 'Offline'}</p>
        </>
    );
}

export default UseNetwork;