import Child from "./Child"
function Parent() {
    var a = "ABC";
    const obj = { name: "virat", clg: "L J University" }
    return (
        <>
            <Child name="pqr" age='21' />
            <Child name={a} age={22} />
            <User data={obj} />
        </>
    )
}
function User(props) {
    return (
        <>
            <h1 style={{ color: "blue", textTransform: "uppercase", textDecoration: "underline" }}>
                Welcome {props.data.name} to {props.data.clg}
            </h1>
        </>
    )
}
export default Parent