import React from "react";
import CollectionOverview from "../../components/collection overview/collection.overview";
import { fetchCollectionStartAync } from "../../redux/shop/shop.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionisFetching } from "../../redux/shop/shop.selector";


class Shop extends React.Component {

  componentDidMount() {
  const {fetchCollectionStartAync} = this.props
  fetchCollectionStartAync()
  }
  

  render()  {
    const {isFetching} = this.props
    return (
      <div>
        <CollectionOverview colletions={isFetching}   />
      </div>
    );
  }
}

const mapStateToProps =  createStructuredSelector({
  isFetching : selectCollectionisFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAync: () => dispatch(fetchCollectionStartAync())
})


export default connect(mapStateToProps ,mapDispatchToProps)(Shop);
