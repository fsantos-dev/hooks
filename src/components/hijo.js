import React from "react";

export const Hijo = React.memo(({increment}) => {
    console.log('Me volvi a generar');
    return (
        <>
            <li>CallBacks</li>
            <button onClick={()=>{increment(5)}}>Incrementar</button>
        </>
    );
});