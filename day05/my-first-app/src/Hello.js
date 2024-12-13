const Hello = (props) =>{
    return (
        <>
        <h2>Hello Functional Component</h2>
        <p>Hello {props.firstname} {props.lastname}... from a hello world component!</p>
        </>);
}
//html inside js, which is the jsx means to be

export default Hello;