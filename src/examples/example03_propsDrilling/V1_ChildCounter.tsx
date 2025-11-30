function V1_ChildCounter({initialCount, increment} :{initialCount:number, increment:Function}) {
    return (
        <div>
            <h2>Child Counter</h2>
            <ChildChildCounter initialCount={initialCount} increment={increment}/>
        </div>
    );
}

function ChildChildCounter({initialCount, increment}:{initialCount:number, increment:Function}) {
    return (
        <div>
            <h3>Child Child Counter</h3>
            <ChildChildChildCounter initialCount={initialCount} increment={increment}/>
        </div>
    );
}

//메인에서 count값을 쓰고 childchildchild에서도 같은을 쓸때
//안쓰는 child와 childchild에서도 count를 props로 받아야 한다는 문제가 있음.
function ChildChildChildCounter({initialCount, increment}:{initialCount:number, increment:Function}) {
    return (
        <div>
            <h4>Child Child Child Counter</h4>
            <p>Count: {initialCount}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default V1_ChildCounter;