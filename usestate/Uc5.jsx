import { createContext } from "react";
import Uc6 from './Uc6';
const color = createContext();
export default function Uc5() {
    return (
        <>
            <color.Provider value='red'>
                <Uc6/>
            </color.Provider>
        </>
    )
}export {color}