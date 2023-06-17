import './App.css';
import {useState} from 'react';

const App = () => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    let [cnfPass, setCnfPass] = useState("");
    let [err, setErr] = useState("");
    let [success, setSuccess] = useState("");

    const signup = () => {
        if(name === "" || email === "" || pass === "" || cnfPass === ""){
            setErr("Error : All the fields are mandatory");
        }
        else if(pass !== cnfPass){
            setErr("Password and Confirm Password do not match");
        }
        else{
            setErr("");
            setSuccess("Successfully Signed Up!");
        }
    }

    return (
        <div className="form-cont">
            <h1>Signup</h1>
            <div className="form">
                <input type="text" placeholder="Full Name" onChange = {(e)=> {setName(e.target.value)}}/>
                <input type="email" placeholder="Email" onChange = {(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange = {(e) => setPass(e.target.value)}/>
                <input type="password" placeholder="Confirm Password" onChange = {(e) => setCnfPass(e.target.value)}/>
                {
                    // if suceess then color is green else red
                    err ? <span style={{color: 'red'}}>{err}</span> : <span style={{color: 'green'}}>{success}</span>
                }
                <button type="submit" onClick={signup}>Signup</button>
            </div>
        </div>
    )
}

export default App;