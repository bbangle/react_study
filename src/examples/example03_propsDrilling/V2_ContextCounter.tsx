import React, {useContext, useState} from "react";

const CounterContext = React.createContext();

//지정한
export const CounterProvider = ({children})=>{
    const[count, setCount] = useState(0);
    const increment = () => setCount((c:number):number => c + 1);

    return (
        <CounterContext.Provider value={{count, increment}}>
            {children}
        </CounterContext.Provider>
    );
}

export const useCount = () => useContext(CounterContext);