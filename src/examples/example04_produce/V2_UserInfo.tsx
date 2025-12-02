import {useState} from "react";
import {produce} from "immer";

function UserInfo() {
    const [user, setUser] = useState({
        id: 2,
        name: "alice",
        address: {
            street: "5678",
            city: "seoul"
        },
        hobbies: ["game", "tennis"]
    });

    const updateCity = (city:string)=>{
        setUser(
            produce(draft => {draft.address.city = city})
        );
    }

    return (
        <div>
            <h2>User Info</h2>
            <p>Name: {user.name}</p>
            <p>City: {user.address.city}</p>
            <input type="text" onChange={(e) => updateCity(e.target.value)}/>
        </div>
    )
}

export default UserInfo;
