import ShopActionTypes from "./shop.types";
import { firestore, convertCollectioSnapShotToMap } from "../../assests/firebase/firebase.utils";

export const fetchCollectionStart= () => ({
    type: ShopActionTypes.FETCH_COLLECTION_STARTS
    
})

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
})

export const fecthCollectionFailure = (errorMessage) => ({
type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
payload: errorMessage
})

export const fetchCollectionStartAync = () => {
    return dispatch => {
   const collectionRef = firestore.collection("collections");
dispatch(fetchCollectionStart())


  collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectioSnapShotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionsMap))
    })
    .catch(error =>  dispatch(fecthCollectionFailure(error.message)))

    }
}
