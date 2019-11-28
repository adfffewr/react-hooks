import React , { useState } from 'react';

const useInput = (initialValue , validator) => {
    const [value , setValue] = useState(initialValue);
    const onChange = (event) => {
        console.log(event.target);
        const {
            target : {value}
        } = event
        let willUpdate = true;
        if(typeof validator === 'function') {
            willUpdate = validator(value);
        }
        if(willUpdate) {
            setValue(value)
        }
    }
    return {value , onChange}
}

const UseInput = () => {
    // const maxLen = (value) => value.length <= 10;
    const maxLen = (value) => !value.includes('@');
    const name = useInput('Mr.' , maxLen)
    return(
        <>
            <h1>UseInput</h1>
            {/* <input type="text" placeholder="Name" vlaue={name.value} onChange={name.onChange} /> */}
            <input type="text" placeholder="Name" {...name} />
        </>
    );
}

export default UseInput;