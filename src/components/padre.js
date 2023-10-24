import { useCallback, useState } from "react";
import { Hijo } from "./hijo";

export const Padre = () => {

    const [ contador, setContador ] = useState(0);
    const [show, setShow] = useState(false);
    const increment = useCallback((numero)=> {
        setContador(valor => {
            console.log('VALOR: ', valor);
            return valor + numero
        });
    }, []);


    return(
        <>
            <li>contador: {contador}</li>
            <Hijo increment={increment}/>
            { show ? <li>true</li> : <li>false</li> }
            <button onClick={()=>{setShow(!show)}}>Mostrar/Ocultar</button>
        </>
    );
}