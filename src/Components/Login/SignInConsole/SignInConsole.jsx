import React,{useState} from 'react'
import Modal from 'react-modal'
import './signInConsole.scss'
import {BiUser,RiLockPasswordLine} from "react-icons/all";
import {NavLink} from "react-router-dom";
import {setModalSignInIsClosedCreator} from "../../../redux/loginPage-reducer";
const SignInConsole = (props)=> {
   let signInModal_isOpen=props.signInModalIsOpen;
   let closeModalSign_in = ()=>{
       props.dispatch(setModalSignInIsClosedCreator())
   }
    return(
        <Modal className = "signInConsole_ p-3" isOpen = {signInModal_isOpen} onRequestClose = {closeModalSign_in}>
            <div className="login-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2 className="text-center">Sign In</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                    <span className="input-group-text btn_sign_in_color">
                        <span><BiUser/></span>
                    </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" required="required"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                    <span className="input-group-text btn_sign_in_color">
                       <RiLockPasswordLine/>
                    </span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password" required="required"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block btn_sign_in_color">Log in</button>
                    </div>
                    <div className="bottom-action clearfix">
                        <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
                        <NavLink to="#" className="float-right navLinkPassword ">Forgot Password?</NavLink>
                    </div>
                </form>
                <p className="text-center small ">Don't have an account? <NavLink to="#" className="navLinkSignUpHere">Sign up here!</NavLink></p>
            </div>
        </Modal>
    )
}
//demo
export default SignInConsole
//