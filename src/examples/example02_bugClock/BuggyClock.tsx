import { useState } from "react";

const BuggyClock = () => {
    const [crash, setCrash] = useState(false);

    if (crash) {
        // 렌더링 중에 에러 발생시킴
        throw new Error("일부러 터뜨린 에러!");
    }

    return (
        <div>
            <h2>정상 화면</h2>
            <button onClick={() => setCrash(true)}>에러 발생시키기</button>
        </div>
    );
};

export default BuggyClock;