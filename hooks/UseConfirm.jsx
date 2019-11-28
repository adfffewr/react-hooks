import React , { useState , useEffect , useRef } from 'react';

const useConfirm = (message = '' , onConfirm , onCancel) => {
    if (!onConfirm || typeof onConfirm !== 'function') {
        return
    }
    if (onCancel && typeof onCancel !== 'function') {
        return
    }
    const confirmAction = () => {
        if(confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }
    return confirmAction
}

const UseConfirm = () => {
    const deleteWorld = () => console.log('Delete the world');
    const abort = () => console.log('Aborted');
    const confirmDelete = useConfirm('Are you sure' , deleteWorld , abort);
    return(
        <>
            <h1>UseConfirm</h1>
            <button onClick={confirmDelete}>Delete the world</button>
        </>
    );
}

export default UseConfirm;