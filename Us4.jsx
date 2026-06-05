import { useState } from "react";
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'

function Us4() {
    const [image, setimage] = useState(img1)
    const img=[img2,img3,img4]
    function handleimage() {
        if (image === img1) {
            setimage(img[Math.floor(Math.random()*img.length)])
        }
        else {
            setimage(img1)
        }
    }
    return (
        <>
            <div>
                <img src={image} alt="image" width="300" height="300" />
                <button onClick={handleimage}>Change Image</button>
            </div>
        </>
    )
}export default Us4