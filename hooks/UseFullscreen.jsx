import React , { useState , useEffect , useRef } from 'react';

const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = isFull => {
        if (callback && typeof callback === "function") {
          callback(isFull);
        }
    };
    const triggerFull = () => {
        if(element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            runCb(true);
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        runCb(false);
    }
    return {element , triggerFull , exitFull};
}

const UseFullscreen = () => {
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small")
    }
    const {element , triggerFull , exitFull} = useFullscreen(onFullS);
    return(
        <>
            <h1>UseFullscreen</h1>
            <div ref={element}>
                <img  src="./image/img4.jpg" style={{width:'300px'}} alt=""/>
                <button onClick={exitFull}>원래 화면으로</button>

            </div>
            
            <button onClick={triggerFull}>이미지 풀 스크린</button>
        </>
    );
}

export default UseFullscreen;