import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Form1() {
    const [formdata, setformdata] = useState({})
    function handlechange(e) {
        const { name, value } = e.target
        setformdata({ ...formdata, [name]: value })
    }
    function handlesubmit(e) {
        e.preventDefault()
        if (!formdata.un || !formdata.eid || !formdata.pass || !formdata.cpass || !formdata.cn) {
            alert("Please fill required field ")
        }
        else if (formdata.pass.length <= 8) {
            alert("password length > 8")
        }
        else if (formdata.pass !== formdata.cpass) {
            alert("password must be same")
        }
        else if (!/^\d{10}$/.test(formdata.cn)) {
            alert("must be a 10 digit")
        }
        else {
            alert(`Thank you! Welcome ${formdata.un}`)
        }
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <label>Username: </label>
                <input type='text' name='un' onChange={handlechange} />
                <br />
                <br />
                <label>Email: </label>
                <input type="email" name='eid' onChange={handlechange} />
                <br />
                <br />
                <label>Password: </label>
                <input type="password" name="pass" onChange={handlechange} />
                <br />
                <br />
                <label>Conform Password: </label>
                <input type="password" name="cpass" onChange={handlechange} />
                <br />
                <br />
                <label>Contact: </label>
                <input type="number" name="cn" onChange={handlechange} />
                <br />
                <br />
                <label>MSG: </label>
                <textarea name="msg" onChange={handlechange}></textarea>
                <br />
                <br />
                <label>Gender: </label>
                <input type="radio" name='gender' value="male" onChange={handlechange} />Male
                <input type="radio" name='gender' value="female" onChange={handlechange} />Female
                <br />
                <br />
                <label>Hobby: </label>
                <input type="checkbox" name='hobby' value="xyz" onChange={handlechange} />XYZ
                <input type="checkbox" name='hobby' value="abc" onChange={handlechange} />ABC
                <input type="checkbox" name='hobby' value="pqr" onChange={handlechange} />PQR
                <input type="checkbox" name='hobby' value="lmn" onChange={handlechange} />LMN
                <br />
                <br />
                <label>City: </label>
                <select name='city' onChange={handlechange}>
                    <option value=" ">Select</option>
                    <option value="Ahm">Ahemdabad</option>
                    <option value="Rajkot">Rajkot</option>
                </select>
                <br />
                <br />
                <input type="submit"/>
            </form>
        </>
    )
}export default Form1