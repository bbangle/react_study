import {useCount} from "./V2_ContextCounter.tsx";

function ChildCounter() {
    return (
        <div>
            <h2>Child Counter</h2>
            <ChildChildCounter/>
        </div>
    );
}

function ChildChildCounter() {
    return (
        <div>
            <h3>Child Child Counter</h3>
            <ChildChildChildCounter/>
        </div>
    );
}

//실제 사용하는 컴포넌트에서만 직접 값을 가져와 넣어주는 형태
function ChildChildChildCounter() {
    const {count, increment} = useCount();
    return (
        <div>
            <h4>Child Child Child Counter</h4>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default ChildCounter;