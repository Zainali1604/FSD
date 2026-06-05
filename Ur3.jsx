import { useReducer } from "react";
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
function reduser(state, action) {
    if (action.type === "chn") {
        if (state === img1) {
            state=img2
        }
        else {
            state=img1
        }
        return state;
    }
}
function Ur3() {
    const [state, dispatch] = useReducer(reduser,img1)
    return (
        <>
            <img src={state} alt="image" width="300" height="300" />
            <button onClick={()=>dispatch({type:"chn"})}>change</button>
        </>
    )
}export default Ur3