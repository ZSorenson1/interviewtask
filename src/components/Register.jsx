import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("");
    const [password, setPassword] = useState("");
    const [disabled , setDisabled] = useState(true);


    const submitHandler = (e) => {
        e.preventDefault();
    }

    const validEmail = () => {
        var re =  /^\S+@\S+\.\S+$/;
        if(re.test(email)){
            return true;
        } else {
            return false
        }
    }

    const validator = () => {
        if(name !== "" && validEmail() && password.length >=8){
            setDisabled(false)
        } else {
            setDisabled(true)
        }
        
    }

    return (
        <div className="register">
            <div className="d-flex flex-row justify-content-end top">
                <p>Step 1 of 3</p>
                <h4>...</h4>
            </div>
            <div className="d-flex flex-column justify-content-center bottom">
                <h3>Let's set up your account</h3>
                <p>Already have an account? <a href="/">Sign In</a></p>
                <form action="" onSubmit={e => submitHandler(e)} onChange={() => validator()} className="d-flex flex-column">
                    <input type="text" onChange = { (e)=> {setName(e.target.value)} }value={name} placeholder="Your Name"/>
                    <input type="text" onChange = { (e)=> setEmail(e.target.value) } value={email} placeholder="Email Address"/>
                    {validEmail() ? "" : email !== "" ? <p>Please enter a valid email address.</p> : ""}
                    <select onClick={e => setUserType(e.target.value)}>
                        <option value="">I would describe my user type as</option>
                        <option value="Developer">Developer</option>
                    </select>
                    <input type="text" onChange = { (e)=> setPassword(e.target.value) } value={password} placeholder="Password" className="password"/>
                    <p>Minimum 8 characters.</p>
                    <input type="submit" disabled={disabled ? "disabled" : "" } value="Next" />
                </form>
                <p>By clicking the "Next" button, you agree to creating a free account, and to <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.</p>
            </div>
        </div>
    )
}

export default Register;