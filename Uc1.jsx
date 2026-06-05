import { createContext, useContext } from "react";
import Uc2 from './Uc2';
const fnmae = createContext();
const lname = createContext();
export default function Uc1() {
    return (
        <>
            <fnmae.Provider value='Zainali'>
                <lname.Provider value='Patel'>
                    <Uc2  />
                </lname.Provider>
            </fnmae.Provider>
        </>
    )
}export {fnmae,lname}