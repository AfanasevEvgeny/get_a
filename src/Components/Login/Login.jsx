import React, {Fragment,useState} from "react"
import main_logo from './login_images/logo.png'
import {
    FiMail,
    FaTelegram,
    FcCustomerSupport,
    GiPlantsAndAnimals,
    IoRocketOutline,
    GiChemicalDrop,
    DiCode,
    GiAtom,
    AiFillCalculator,
    IoIosPeople,
    GiBookmarklet
} from "react-icons/all";
import './login.scss'
import SignInConsole from "./SignInConsole/SignInConsole";

import {setModalSignInIsOpenCreator} from "../../redux/loginPage-reducer";

const Login = (props) => {
    ///
    let signInModal_isOpen = props.loginPage.signInModal_isOpen
    let openModalSign_in = ()=>{
        props.dispatch(setModalSignInIsOpenCreator())
    }
    ///
    return (
        <div className="fragmentLogin">
            <div className="d-flex flex-row align-items-center p-3 flex-wrap justify-content-center header">
                <div className="p-2">
                    <img src={main_logo} className="header_logo"/>
                </div>
                <div className="p-2 header_name">
                    <h2 className="header_sized">Student collaboration platform</h2>
                </div>
                <div className=" ml-md-auto p-md-2 align-self-end d-flex auth_header_block">
                    <ul className="list-group list-group-flush color_white">
                        <li className="list-group-item header">
                            <div className="signIU_wrapper d-flex p-md-2 justify-content-center">
                                <div className="p-2">
                                    <button type="button" className="btn btn-outline-success rounded-0 header_buttons-sized"
                                            onClick={openModalSign_in}
                                    >Sign in!
                                    </button>
                                </div>
                                <div className="p-2">
                                    <button type="button" className="btn btn-outline-light rounded-0 header_buttons-sized">Don't have
                                        account?
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item header header_subjects visible-xs-block d-none d-sm-block">
                            <h2>
                                <GiPlantsAndAnimals/><IoRocketOutline/><GiChemicalDrop/><DiCode/><GiAtom/><AiFillCalculator/><IoIosPeople/><GiBookmarklet/>
                            </h2>
                        </li>
                    </ul>
                </div>
                <div className="p-0 links align-self-start ml-auto">
                    <div className="d-flex flex-row align-items-center pt-0">
                        <div className="p-2 mail_header_icon">
                            <h2><FiMail/></h2>
                        </div>
                        <div className="p-2 tg_header_icon">
                            <h2><FaTelegram/></h2>
                        </div>
                        <div className="p-2">
                            <h2><FcCustomerSupport/></h2>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            sector with description
            */}
            <div className="hidden-lg-down d-flex flex-wrap flex-row p-md-4">
                <div className="p-2 login_section_img_holder d-flex flex-row justify-content-center align-items-center">
                    <div className="p-md-5 p-2 divider_">
                        <h2>Welcome!</h2>
                    </div>
                    <div className="p-md-5 p-2 my_pad">
                        <p>(ТЕКСТ РЫБА)Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    </div>
                </div>
            </div>

        <SignInConsole signInModalIsOpen = {signInModal_isOpen} dispatch = {props.dispatch}/>

        </div>
    )
}
export default Login
/*
export default connect(mapStateToProps, {login} )(Login);
*/