import React from "react";
import "./collection.styles.scss"
import  { selectCollection } from "../redux/shop/shop.selector";
import { connect } from "react-redux";

const CollectionPage = ({collection}) => {
     <div className="collection-page">
           <h1>Category Page</h1>

     </div>
}
  
mapStateToProps = (state, ownProps) ({
     collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);