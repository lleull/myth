import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../../button-component/button-componet";
import { connect } from "react-redux";
import { addItem } from "../../../redux/Cart/cart.action";


const CollectionItem = ({  addItem, item }) => {
  const { name, imageUrl, price} = item;

  return (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `Url(${imageUrl})` }} />

    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
    </div>
   
  </div>
 
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))

});

export default connect(null, mapDispatchToProps)(CollectionItem);
