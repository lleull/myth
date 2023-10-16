import  userActionTypes  from "./user.types"; 
 
 const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})


export const googleSigninStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START,
})

export const emailSigninStart = (emailandpassword) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailandpassword
})

export const SignInSuccess = (user) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const SignInFailure = (error) => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
})
export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION,
})
export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})
export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_START,

})
export const signOutFailure = (error) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
})
export const SignUpStart  = (userCredentials) => ( {
    type: userActionTypes.SIGN_UP_START,
    payload: userCredentials
})

export const SignupSuccess = ({user, additionalData}) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    apyload: {user, additionalData}
})
export const SignUpFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payoad: error
})



export default setCurrentUser;