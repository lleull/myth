import { takeEvery, call, put} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { fecthCollectionFailure, fetchCollectionSuccess} from './shop.action';
import { firestore } from '../../assests/firebase/firebase.utils';
import { convertCollectionsSnapshotToMap } from '../../assests/firebase/firebase.utils';

export function* fetchCollectionAsync() {


    try {
        yield console.log("i am fired")
        const collectionRef =  firestore.collection('collections');
        const snapshot = yield collectionRef.get()
        const collectionsMap =  yield call(convertCollectionsSnapshotToMap, snapshot)
        yield  put( fetchCollectionSuccess(collectionsMap))
    } catch (error) {
       yield put(fecthCollectionFailure(error.message))
    }
}
     
export function* fetchCollectionsStart() {

    yield takeEvery(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
     )
}