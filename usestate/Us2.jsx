import { useState } from "react";
function Us2() {
    const [count, setcount] = useState(20)
    function increasecount() {
        if (count < 50) {
            setcount(count + 1)
        }
        else {
            return false;
        }
    }
    function decreasecount() {
        if (count > 0) {
            setcount(count - 1)
        }
        else {
            return false;
        }
    }
    return (
        <>
            <div>
                <h1>useState</h1>
                <button onClick={increasecount}>Click to increase the count</button>
                <button onClick={decreasecount}>Click to decrease the count</button>
                <h2>Count: {count} </h2>
            </div>
        </>
    )
}export default Us2 
