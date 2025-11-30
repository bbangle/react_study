import ChildCounter from "./V2_ChildCounter.tsx";
import {CounterProvider} from "./V2_ContextCounter.tsx";


function Example03(){
    return (
        <CounterProvider>
            <ChildCounter/>
        </CounterProvider>
    );
}


export default Example03;