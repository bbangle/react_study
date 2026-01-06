import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "./store";
import {increment, decrement} from "./counterSlice";

function Counter() {
    const count = useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <p>Count :{count}</p>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
        </div>
    );
}

export default Counter;
