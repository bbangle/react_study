import {useEffect, useState} from "react";

const styles = {
    container:{
        textAlign:"center",
        margin:"50px",
    },
    heading:{
        color: "navy",
        fontFamily: "Arial, sans-serif",
    },
};

const ClockExample01 = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setCurrentTime(new Date().toLocaleTimeString());
        },1000);

        return ()=>clearInterval(timerId);
    },[]);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Hello World!</h1>
            <p>The Current time is {currentTime}</p>
        </div>
    );
}

export default ClockExample01;