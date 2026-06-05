import { useEffect, useState } from "react";

function Ue2() {
    const [date, setdate] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setdate(new Date())
        }, 1000)
    }, [])
    return (
        <>
            <h1>{date.toLocaleTimeString()}</h1>
            <h2>Hour: {date.getHours()}  Minutes: {date.getMinutes()}   Second: {date.getSeconds()}
            </h2>
        </>
    )
} export default Ue2