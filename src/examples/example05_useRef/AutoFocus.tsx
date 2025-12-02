import {useEffect, useRef} from "react";

function TextInputWithFocusbutton(){
    const inputRef = useRef(null); //DOM 요소를 참조할 객체 생성

    useEffect(function setFocusOnMount(){
        if(inputRef.current){
            inputRef.current.focus(); // input요소에 포커스 설정
        }
    },[]);

    return (
        <div>
            <input type="text" ref={inputRef} type="text" placeholder="Focus Me!"/>
            <button onClick={() => inputRef.current.focus()}>Focus the input with button</button>
        </div>
    );
}

export default TextInputWithFocusbutton;