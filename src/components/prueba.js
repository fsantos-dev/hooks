import { useEffect } from "react";

export const Prueba = () => {
    console.log('componente montado');
    const mouseMove = (e) => {
        console.log(e);
    }

    window.addEventListener('mousemove', mouseMove);
    useEffect(()=>{
        return () => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);
    return(
        <>
            <label>Eres Exitoso!</label>
        </>
    );
}