import React  from 'react'
import {setModalSignInIsClosedCreator} from "../../../redux/loginPage-reducer";
import SignInConsole from "./SignInConsole";

const SignInConsoleContainer = (props)=> {
    let signInModal_isOpen=props.signInModalIsOpen;
    let closeModalSign_in = ()=>{
        props.dispatch(setModalSignInIsClosedCreator())
    }
    return(
       <SignInConsole />
    )
}
//demo
export default SignInConsoleContainer
//