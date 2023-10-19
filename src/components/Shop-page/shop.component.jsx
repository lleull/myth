import React from "react";
import CollectionOverview from "../../components/collection overview/collection.overview";
import { connect} from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.action";

const  Shop = () => {


  
    return (
      <div>
        <CollectionOverview isfetching={fetchCollectionStart}  />
      </div>
    );
  }




const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
