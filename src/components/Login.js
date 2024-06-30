import React, { useState } from 'react'
import styled from 'styled-components'
import './Login.css'
import { useNavigate } from 'react-router-dom'
function Login() {

    const [name, setName] = useState("")
    const [mobile, setMobile] = useState()
    const [mail, setMail] = useState("")
    var [msg,setmsg]=useState("")
    const navigate = useNavigate()
const validate=(e)=>{
    if (name && mobile && mail) {
        navigate('/products')
    }
    else{
        setmsg("Fill the Details")
    }
    e.preventDefault()
}
    return (
        <div className='mainform'>
            <div className="neumorph">
                <div className="neoParent">
                    <div className="neoForm">
                        <div className="neoMain">
                            <div className="neoimg_bg">
                                <div className="neoIcon">
                                    <img src={require('./logo.jpg')} id="formlogo" alt="wrong"></img>
                                </div>
                            </div>
                            <div className="neoHead">
                                <h1>Let's Join with Us !!</h1>
                            </div>
                            <div className="neoContent">
                                <form autoComplete="off" onSubmit={validate} method='post'>
                                    <div className="neoformdata">
                                        <span id="neoinput"><input type="text" name="name" id="neoname"
                                            placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} /></span>
                                    </div>
                                    <div>
                                        <span id="neoinput"><input type="number" name="mobile" id="neonum"
                                            placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                        </span>
                                    </div>
                                    <div>
                                        <span id="neoinput"><input type="text" name="mail" id="neomail"
                                            placeholder="E-mail Address" value={mail} onChange={(e) => setMail(e.target.value)} />
                                        </span>
                                    </div>
                                    <Message>
                                        <label>{msg}</label>
                                    </Message>
                                    <div className="enq_btn">
                                        <span><input type="submit" value="Register" id="neobtn" /></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
const Message=styled.div`
label
{
color:red;
font-size:20px; 
display:grid;
place-content:center;
}
`