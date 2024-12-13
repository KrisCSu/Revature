const EventsDemoComponents = () =>{
    const handleClick = () =>{
        console.log("Hello Event");
    }

    const handleClickAgain = (name) =>{
        console.log("Hello Event" + name);
    }
    return (
        <>
        <h3>Events Demo</h3>
        <button onClick={handleClick}>click me</button>
        <button onClick={()=>handleClickAgain("Kris")}>click me again</button>
        </>
    )
}

export default EventsDemoComponents;