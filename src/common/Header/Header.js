import React, { useState, useContext } from 'react'
import './Header.css';
import logo from "../../assets/logo.svg";
import Button from '@material-ui/core/Button';
import FormModal from '../FormModal/FormModal'
import {Context} from "../../store"

const Header = (props) => {
    const [user, setUser] = useState("subham")
    const [modal, setModal] = useState(false)

    const handleModalClose = () => {
        setModal(false)
    }

    const [viewBtn, setViewBtn] = useContext(Context);

   


    return (
        <div>
        <div className="header">
            <div className="logo">
                <img src={logo} className="" alt="" />
            </div>

            <div className="button__div">
                {viewBtn===true?<Button variant="contained" color="primary" className="book__show__btn">Book Show</Button>:null}
                
                {
                    user ? <Button variant="contained" onClick={() => { setModal(true) }}>Login</Button> : <Button variant="contained">Logout</Button>
                }

            </div>

            

        </div>
            <FormModal modalOpen={modal} modalClose={handleModalClose} />
        </div>
    )
}

export default Header
