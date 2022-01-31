import {useState, useEffect} from "react"

const actionByKey=(key)=>{
    const keys = {
        KeyW: 'forward',
        KeyS: 'backward',
        KeyA: 'left',
        KeyD: 'right',
        Space: 'jump',
    }
    return keys[key];
}

export const usePersonControls = () => {
    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        jump: false,
    })

    useEffect(() => {
        const handleKeyDown = (e) => {
            //Movement Key
            if(actionByKey(e.code)){
                setMovement((state)=>({...state, [actionByKey(e.code)]: true}))

            }
        }
        const handleKeyUp = (e) => {
//Movement Key
            if(actionByKey(e.code)){
                setMovement((state)=>({...state, [actionByKey(e.code)]: false}))
            }        }
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])
    return movement
}
