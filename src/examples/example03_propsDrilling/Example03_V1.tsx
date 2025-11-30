import {JSX, useState} from "react";
import V1_ChildCounter from "./V1_ChildCounter.tsx";

function Example03_V1() : JSX.Element {
    const [count, setCount] = useState(0);
    return (
        <V1_ChildCounter initialCount={count} increment={() => setCount(count + 1)}/>
    );
}


export default Example03_V1;