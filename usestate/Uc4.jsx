import { createContext } from "react";
import Uc5 from './Uc5';
const Num = createContext();
const obj = { n1: 5, n2: 4, n3: 2}
export default function Uc4() {
    return (
        <>
            <Num.Provider value={obj}>
                <Uc5  />
            </Num.Provider>
        </>
    )
}export {Num}