import {useReducer} from "react";

function Reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        case "reset":
            return {count: 0};
        default:
            throw new Error("unknown action type");
    }
}

function Counter() {
    const [state, dispatch] = useReducer(Reducer, {count: 0});

    return (
        <div>
            <p>Count :{state.count}</p>
            <button onClick={()=> dispatch({type:"increment"})}>+</button>
            <button onClick={()=> dispatch({type:"decrement"})}>-</button>
            <button onClick={()=> dispatch({type: "reset"})}>reset</button>
        </div>
    );
}

export default Counter;