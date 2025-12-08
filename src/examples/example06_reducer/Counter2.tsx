import {useReducer} from "react";

interface State {
    count: number;
}

type Action = { type: "increment" }
    | { type: "decrement" }
    | { type: "reset" }
    | { type: "set"; payload: number };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        case "set":
            return { count: action.payload };
    }
}

function Counter2() {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    const handleSet = ()=>{
        const value = parseInt(prompt("새 숫자를 입력하세요") || "0", 10);
        dispatch({type:"set", payload: value});
    }

    return (
        <div>
            <p>Count :{state.count}</p>
            <button onClick={()=> dispatch({type:"increment"})}>+</button>
            <button onClick={()=> dispatch({type:"decrement"})}>-</button>
            <button onClick={()=> dispatch({type: "reset"})}>reset</button>
            <button onClick={handleSet}>set</button>
        </div>
    );
}

export default Counter2;