import { useReducer } from "react";
function reduser(state, action) {
    if (action.type === "inc") {
        return state + 2
    }
    else if (action.type === 'dec') {
        return state-2
    }
    else {
        return state
    }
}
function Ur2() {
    const [state, dispatch] = useReducer(reduser, 50)
    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: 'inc' })}>Inc</button>
            <button onClick={() => dispatch({ type: 'dec' })}>Dec</button>
        </>
    )
} export default Ur2