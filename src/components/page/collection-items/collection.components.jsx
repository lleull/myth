import React from "react";
import "./collection-item.styles.scss";

import { connect } from "react-redux";
import { addItem } from "../../../redux/Cart/cart.action";
import { AddCart } from "./newbu";

const CollectionItem = ({  addItem, item }) => {
  const { name, imageUrl, price} = item;

  return (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `Url(${imageUrl})` }} />
    <AddCart onClick={() => addItem(item)} >Add Cart</AddCart>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>

    </div>
   
  </div>
 
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))

});

export default connect(null,  mapDispatchToProps)(CollectionItem);
