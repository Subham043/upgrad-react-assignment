import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import "./Register.css"
import Button from '@material-ui/core/Button';
import axios from 'axios'


const Register = () => {
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [fNameError, setFNameError] = useState(false)
    const [lNameError, setLNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [contactError, setContactError] = useState(false)
    

    const registerHandler = () =>{
        if(fName.length===0 && lName.length===0 && email.length===0 && password.length===0 && contact.length===0){
            setFNameError(true)
            setLNameError(true)
            setEmailError(true)
            setPasswordError(true)
            setContactError(true)
            return;
        }else{
            setFNameError(false)
            setLNameError(false)
            setEmailError(false)
            setPasswordError(false)
            setContactError(false)
        }
        if(fName.length===0){
            setFNameError(true)
            return;
        }else{
            setFNameError(false)
        }
        if(lName.length===0){
            setLNameError(true)
            return;
        }else{
            setLNameError(false)
        }
        if(email.length===0){
            setEmailError(true)
            return;
        }else{
            setEmailError(false)
        }
        if(password.length===0){
            setPasswordError(true)
            return;
        }else{
            setPasswordError(false)
        }
        if(contact.length===0){
            setContactError(true)
            return;
        }else{
            setContactError(false)
        }
        let formData = {first_name:fName, last_name:lName, email_address:email, password:password, mobile_number:contact}
        console.log(formData)
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post('http://localhost:8085/api/v1/signup', formData)
        .then((response)=>{console.log(response)})
        .catch((error)=>{console.log(error)})
        setFName("")
        setLName("")
        setEmail("")
        setPassword("")
        setContact("")
    }

    return (
        <div>
            <FormControl className="form-control">
                <TextField

                    id="standard-error-helper-text"
                    label="First Name"
                    style={{width:"100%"}}
                value={fName}
                onChange={(event) => { setFName(event.target.value) }}
                />
                { fNameError===true ? <div style={{color:"red",textAlign:"left"}}>required</div> : null}
            </FormControl>
            <FormControl className="form-control">
                <TextField

                    id="standard-error-helper-text"
                    label="Last Name"
                    style={{width:"100%"}}
                    value={lName}
                    onChange={(event) => { setLName(event.target.value) }}
                />
                { lNameError===true ? <div style={{color:"red",textAlign:"left"}}>required</div> : null}
            </FormControl>
            <FormControl className="form-control">
                <TextField

                    id="standard-error-helper-text"
                    label="Email"
                    type="email"
                    style={{width:"100%"}}
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />
                { emailError===true ? <div style={{color:"red",textAlign:"left"}}>required</div> : null}
            </FormControl>
            <FormControl className="form-control">
                <TextField

                    id="standard-error-helper-text"
                    label="Password"
                    type="password"
                    style={{width:"100%"}}
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />
                { passwordError===true ? <div style={{color:"red",textAlign:"left"}}>required</div> : null}
            </FormControl>
            <FormControl className="form-control">
                <TextField

                    id="standard-error-helper-text"
                    label="Contact"
                    style={{width:"100%"}}
                value={contact}
                onChange={(event) => { setContact(event.target.value) }}
                />
                { contactError===true ? <div style={{color:"red",textAlign:"left"}}>required</div> : null}
            </FormControl>
            <FormControl className="form-control" style={{textAlign:"center"}}>
                <Button onClick={registerHandler} variant="contained" color="primary">
                    Submit
                </Button>
            </FormControl>
        </div>
    )
}

export default Register
