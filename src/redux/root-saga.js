import { all, call } from "redux-saga/effects";
import { UserSagas } from "./user/user.sagas";
import { fetchCollectionsStart } from "./shop/shop.sagas";
import { cartSagas } from "./Cart/cart.sagas";




function* rootSaga() {
    yield all([call(fetchCollectionsStart), call(UserSagas), call(cartSagas)])
}

export default rootSaga
