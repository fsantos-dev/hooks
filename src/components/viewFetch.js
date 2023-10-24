import { useFetch } from "../hooks/useFetch";
import { UseCounter } from "./useCounter";
import { Prueba } from "./prueba";
import { useState } from "react";

export const ViewFetch = () => {

    const { state, handleIncrement } = UseCounter();
    const { loading, data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${state}`);
    const { author, quote } = !!data && data[0];
    const [ boolean, setBoolean ] = useState(false);


    function handleBoolean(){
        if(boolean){
            setBoolean(false);
            return;
        }
        setBoolean(true);
    }

    return (
        <div className="container">
            <label style={{ with: '100%', display: 'block' }}>Quotes</label>
            <div style={{ width: '100%' }}>
                {loading ? <span>Cargando...</span> : <span style={{ with: '100%', display: 'block', border: '1px solid #ccc', height: '50px', display: 'block' }}>
                    {author} - {quote}
                </span>}

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button onClick={handleIncrement} >Generar</button>
                </div>
            </div>
            <button onClick={handleBoolean}>Cambiar estado</button>
            {boolean ? <Prueba></Prueba> : 'No hay data' }
        </div>
    );
}