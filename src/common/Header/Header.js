import React from 'react'
import './Header.css';
import logo from "../../assets/logo.svg";
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} class="" alt="" />
            </div>

            <div className="button__div">
                <Button variant="contained">Login</Button>
            </div>
        </div>
    )
}

export default Header
