import { useState } from "react";
export const UseCounter = (inicialState = 1) => {
    const [state, setState]= useState(inicialState);
    
    const handleIncrement = () => {
        setState(state + 1)
    }

    const handleDecrement = () => {
        setState(state - 1)
    }

    const handleReset = () =>{
        setState(inicialState)
    }
    
    return{
        state, 
        handleIncrement,
        handleDecrement,
        handleReset
    }
}