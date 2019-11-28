import React , { useState , useEffect } from 'react';


const UseEffect = () => {

    const sayHello = () => {
        console.log('hello')
    }

    const [number , setNumber] = useState(0);
    const [aNumber , setAnumber] = useState(0);

    useEffect( () => {
        sayHello();
    }, [number]);
    
    return(
        <>
            <h1>useEffect</h1>
            <div>Hi</div>
            <button onClick={ () => setNumber(number+1)}>{number}</button>
            <button onClick={ () => setAnumber(aNumber+1)}>{aNumber}</button>
        </>
    );
}

export default UseEffect;