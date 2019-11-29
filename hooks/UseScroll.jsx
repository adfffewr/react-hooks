import React , { useState , useEffect } from 'react';

const useScroll = () => {
    const [state , setState] = useState({
        x:0,
        y:0
    });
    const onScroll = () => {
        setState({ y:window.scrollY , x:window.scrollX })
        // console.log('y' , window.scrollY , 'x' , window.scrollX);
    }
    useEffect( () => {
        window.addEventListener('scroll' , onScroll);
        return () => window.removeEventListener('scroll' , onScroll);
    }, [])
    return state;
}

const UseScroll = () => {
    const {y} = useScroll();
    return(
        <>
            <h1 style={{position:'fixed' , right:'0', top:'50%', color : y > 100 ? 'red' : 'blue'}}>UseScroll</h1>
        </>
    );
}

export default UseScroll;