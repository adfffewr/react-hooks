import React , { useState } from 'react';

const content = [
    {
        tab : 'Section 1',
        content : 'set Section1 content'
    },
    {
        tab : 'Section 2',
        content : 'set Section2 content'
    },
]

const useTabs = (initialTab , allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currentItem: allTabs[currentIndex],
        changeItem : setCurrentIndex
    }
}

const UseTabs = () => {
    const {currentItem , changeItem} = useTabs(0 , content);
    return(
        <>
            <h1>UseTabs</h1>
            {content.map((section , index) => (
                <button 
                    key={index}
                    onClick={() => changeItem(index)}
                >
                    {section.tab}
                </button>
            ))}
            <div>
            {currentItem.content}
            </div>
        </>
    );
}

export default UseTabs;