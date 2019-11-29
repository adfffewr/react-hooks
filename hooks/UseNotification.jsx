import React , { useState , useEffect , useRef } from 'react';

const useNotification = (title , options) => {
    if(!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        if(Notification.permission !== 'granted') {
            Notification.requestPermission().then(permission => {
                if(permission === 'geanted') {
                   new Notification(title , options) 
                } else {
                    return;
                }
            })
        } else {
            new Notification(title , options);
        }
    }
    useEffect( () => {

    })
    return fireNotif
}

const UseNotification = () => {
    const triggerNotif = useNotification("안녕하세요" , {body:"싸랑햐욧"});
    return(
        <>
            <h1>UseNotification</h1>
            <button onClick={triggerNotif}>hello</button> 
        </>
    );
}

export default UseNotification;