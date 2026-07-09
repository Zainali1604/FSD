import { useContext, useReducer } from "react";
import { fnmae, lname } from "./Uc1";

export default function Uc3() {
    var fn = useContext(fnmae)
    var ln = useContext(lname)
    return (
        <>
            <h1 style={{color:"purple", font:"55px",textDecoration:"underline"}}>welcome {fn} {ln}</h1>
        </>
    )
}