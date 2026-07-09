import { useState } from "react";
function Us3() {
    const [name, setname] = useState("LJ University")
    const [c, setc] = useState("red")
    const [hs, seths] = useState("Hide")
    const [hstext, sethstext] = useState("React Js")


    function handletext() {
        if (name === "LJ University") {
           setname("welcome student")
        }
        else {
            setname("LJ University")
        }
    }
    function changecolor() {
        if (c === "red") {
            setc("blue")
        }
        else {
            setc("red")
        }
    }
    function hideshow() {
        if (hs === "Hide") {
            seths("show")
            sethstext(" ")
        }
        else {
            seths("Hide")
            sethstext("React Js")
        }
    }
    return (
        <>
            <div>
                <h1>useState</h1>
                <h2 style={{ color: c }}>{name}</h2>
                <h3 >{hstext}</h3>
                <button onClick={handletext}>Change Text</button>
                <button onClick={changecolor}>Change color</button>
                <button onClick={hideshow}>{hs}</button>

            </div>
        </>
    )
}export default Us3 
