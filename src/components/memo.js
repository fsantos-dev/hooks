import { useState, useMemo, useEffect} from "react";
import { UseCounter } from "./useCounter";

export const Memo = () => {
    const [show, setShow] = useState(false);
    const {state, handleIncrement} = UseCounter(500);
    const procesoPesado = (iteraciones) => {
        for(let i=0; i<iteraciones; i ++){
            console.log('contador: ', iteraciones);
        }
        return `total ${iteraciones}`;
    }
    const memorizado = useMemo(()=>
        procesoPesado(state)
    , [state]);

    // useEffect(()=>{
    //     procesoPesado(state);
    //     console.log('me ejecute');
    // }, [state]);
    console.log('show: ', show);
    console.log('memorizado: ', memorizado);
    return(
        <>
            <li>Contador: {memorizado}</li>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
        </>
    );
}