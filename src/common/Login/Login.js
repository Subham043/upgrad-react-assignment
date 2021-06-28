import React, {useState, useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import "./Login.css"
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {Context} from "../../store"


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [loggedIn, setLoggedIn] = useContext(Context);

    const loginHandler = () =>{
        if(email.length===0 && password.length===0){
            setEmailError(true)
            setPasswordError(true)
            return;
        }else{
            setEmailError(false)
            setPasswordError(false)
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
        
        let formData = {email_address:email, password:password}
        console.log(formData)
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post('http://localhost:8085/api/v1/auth/login', formData)
        .then((response)=>{
            console.log(response)
            setLoggedIn(true)
        })
        .catch((error)=>{console.log(error)})
        setEmail("")
        setPassword("")
    }


    return (
        <div>
            <FormControl className="form-control">
                <TextField

                    id="standard-error-helper-text"
                    label="Username"
                    size="large"
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
            <FormControl className="form-control" style={{textAlign:"center"}}>
                <Button onClick={loginHandler} variant="contained" color="primary">
                    Submit
                </Button>
            </FormControl>
        </div>
    )
}

export default Login
