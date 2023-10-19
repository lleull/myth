import React from "react";

import PreviewCollection from "../page/preview.collection.component/preview.collection.components";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";


const CollectionOverview = () => {

  const collections = useSelector(selectCollectionForPreview)
return (
  <div className="collection-overview">
   
    {collections.map(({  id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
)
};



export default CollectionOverview;
