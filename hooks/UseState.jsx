import React , { useState } from 'react';

const UseState = () => {
    const [item , setItem] = useState(1);

    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    return(
        <>
            <h1>Hello {item}</h1>
            <button onClick={incrementItem}>플러스</button>
            <button onClick={decrementItem}>마이너스</button>
        </>
    );
}

export default UseState;