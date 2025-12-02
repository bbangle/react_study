import {useState} from "react";

function UserInfo() {
    const [user, setUser] = useState({
        id: 1,
        name:"peter",
        address:{
            street:"1234",
            city:"seoul"
        },
        hobbies:["basketball","football"]
    });

    const updateCity = (city:string)=>{
        setUser({...user,address:{...user.address,city}});
    }


    return (
        <div>
            <h2>User Info</h2>
            <p>Name: {user.name}</p>
            <p>City: {user.address.city}</p>
            <input type="text" onChange={(e) => updateCity(e.target.value)}/>
        </div>
    );
}

export default UserInfo;