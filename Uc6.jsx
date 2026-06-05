import { useContext } from "react";
import { Num } from "./Uc4";
import { color } from "./Uc5"

export default function Uc6() {

    var num = useContext(Num)
    var color1 = useContext(color)
    console.log(num)
    console.log(color1)
    return (
        <>
            <h1 style={{ color: color1 }}>{num.n1 * num.n2 / num.n3}</h1>
        </>
    )
}