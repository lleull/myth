import {all,call, takeLatest, put} from 'redux-saga/effects'
import userActionTypes from '../user/user.types'
import { clearCart } from './cart.action'


export function* ClearCartOnSignout () {
    yield put(clearCart())
}

export function* onSignOutSuccess () {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS)
}
 export  function* cartSagas() {
    yield all([call(onSignOutSuccess), call(ClearCartOnSignout)])
}