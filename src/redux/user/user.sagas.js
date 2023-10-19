import { takeLatest,  all , call, put} from "redux-saga/effects";
import  userActionTypes  from "./user.types";
import {auth, googleProvider, createUserProfileDocument, getCurrentUser } from "../../assests/firebase/firebase.utils";
import { SignInFailure, 
  SignInSuccess,
   SignupSuccess,
    signOutFailure,
     signOutSuccess} from "./user.action";




export function* signOut() {
try {
  yield auth.signOut()
  yield put(signOutSuccess())
  
} catch (error) {
  yield put(signOutFailure(error))
}

}

export function* signInWithGoogle () {

try {
  const { user } = yield auth.signInWithPopup(googleProvider)
  yield snapShotUserRef(user)
  } catch (error) {
  yield put(SignInFailure(error))
}
}



export function* snapShotUserRef (userAuth, additionalData) {
try{
  const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
  const userSnapshot = yield userRef.get();
  yield put(SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
  
} catch (error) {
  put(SignInFailure(error))
}
}
export function* isUserAuthentication() {
  try {
   const userAuth = yield getCurrentUser()
   if (!userAuth) return;
   yield snapShotUserRef(userAuth)
   
  } catch (error) {
   yield put(SignInFailure(error))
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* emailSignInStart({payload: {email,password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email,password)
 
   yield snapShotUserRef(user)
    } catch (error) {
    put(SignInFailure(error))
  }
}
export function* onEmailSignin() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, emailSignInStart)
}

export function* SignUp({payload: {email, password, displayName}}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(SignupSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signOutFailure(error));
  }
}
export function* signInAfterSignUp({payload: {user, additionalData}}) {
  yield snapShotUserRef(user, additionalData)
}

export function* onSignUpStart () {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,SignUp )
}
export function* onSignupSuccess () {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function*  onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthentication)
}
export function* onSignoutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut )
}

export function* UserSagas () {
  yield all([
    call(onGoogleSigninStart), 
    call(onEmailSignin),
     call(onCheckUserSession),
    call(onSignoutStart),
    call(onSignUpStart),
    call(onSignupSuccess)
  
  
  ])}




