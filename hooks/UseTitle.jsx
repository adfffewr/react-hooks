import React , { useState , useEffect } from 'react';

const useTitle = (initialTitle) => {
    const [title , setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle , [title])
    return setTitle;
}

const UseTitle = () => {
    const titleUpdater = useTitle('Loading...');
    setTimeout( () => titleUpdater('home') ,3000)
    
    
    return(
        <>
            <h1>useTitle</h1>
            <div>Hi</div>
           
        </>
    );
}

export default UseTitle;