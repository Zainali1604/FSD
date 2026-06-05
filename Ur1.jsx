import { useReducer } from "react";
function reduser(state, action) {
    return state+action
}
function Ur1() {
    const [state, dispatch] = useReducer(reduser, 30)
    return (
        <>
            <h1>{state}</h1>
            <button onClick={()=>dispatch(5)}>Click</button>
        </>
    )
}export default Ur1