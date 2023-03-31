import React from "react"
const useOutsideClick = (callback)=>{
    const ref = React.useRef()
    React.useEffect(()=>{
        const handleClick = (event)=>{
            if (ref.current && !ref.current.contains(EventTarget)){
                callback()
            }
        }
        document.addEventListener('click',handleClick);
        return ()=>{
            document.removeEventListener('click',handleClick)
        }
    },[callback, ref])
}
export {useOutsideClick}