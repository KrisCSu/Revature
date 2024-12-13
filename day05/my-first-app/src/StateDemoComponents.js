import { useState } from "react";


const StateDemoComponents = () =>{
    const [name, setName] = useState("Kris");
    const [age, setAge]=useState(45)
    const changeName=(inputName, age)=>{
        setName(inputName)
        setAge(age)
    }
    return (
        <>
        <h2>{name}, {age}</h2>
        <button onClick={()=>changeName("Su", 47)}>Change Name</button>
        </>
    )
}

export default StateDemoComponents