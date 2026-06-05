import { useEffect, useState } from "react";
import axios from "axios";
export default function A1() {
    const [image, setimage] = useState("")
    useEffect(() => {
        setInterval(() => {
            axios
                .get("https://randomfox.ca/floof/")
                //.get("https://official-joke-api.appspot.com/random_joke")
                .then((r) => {
                    console.log(r.data);
                    setimage(r.data)
                })
                .catch((e)=>{console.log(e)})
        },2000)
    }, [])
    return (
        <>
            <img src={image.image} alt="fox" width='500' height='500' />
            <a href={image.link} target="_blank">click here</a>
        </>
    )
}