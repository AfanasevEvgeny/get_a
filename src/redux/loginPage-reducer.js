const SET_MODAL_SIGN_IN_IS_OPEN = 'SET_MODAL_SIGN_IN_IS_OPEN'
const SET_MODAL_SIGN_IN_IS_CLOSED = 'SET_MODAL_SIGN_IN_IS_CLOSED'

let initialState = {
    signInModal_isOpen:false,
}

const loginPageReducer = (state=initialState,action)=>{
switch (action.type){
    case SET_MODAL_SIGN_IN_IS_OPEN:{
        state.signInModal_isOpen=true
        return state
    }
    case SET_MODAL_SIGN_IN_IS_CLOSED:{
        state.signInModal_isOpen=false
        return state
    }
    default:return state
}
}
//action creators
export const setModalSignInIsOpenCreator = ()=>({type:SET_MODAL_SIGN_IN_IS_OPEN})
export const setModalSignInIsClosedCreator = ()=> ({type:SET_MODAL_SIGN_IN_IS_CLOSED})

export default loginPageReducer

