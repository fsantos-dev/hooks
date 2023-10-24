import { useState } from "react";

export const UseState = () => {
    let [state, setState] = useState({
        count: 10,
        count2: 20
    })
    let { count, count2 } = state;
    return (
        <div className="App">
            <label>{count}</label><button onClick={() => setState({
                ...state,
                count: count + 1
            })}>+1</button>
            <br />
            <label>{count2}</label><button onClick={() => setState({
                ...state,
                count2: count2 + 1
            })}>+1</button>
            <br />

        </div>
    );
}