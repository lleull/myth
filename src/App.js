import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Homepage from './components/page/homepage/homepage.component';
import  { Routes, Route, Navigate} from 'react-router-dom';
import Shop from './components/Shop-page/shop.component';
import Header from './components/header.component/header-component';
import SignInAndSignUp from './components/sign-in and sign-up/sign-in and sign-up';
import { auth, createUserProfileDocument} from './assests/firebase/firebase.utils';

import setCurrentUser from './redux/user/user.action';
import Checkout from './checkout page/checkout.cart.components';
import { SelectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';



class  App extends React.Component {
 
      
  
unsubscriberFromAuth = null;

componentDidMount() {
  const {setCurrentUser} = this.props
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

      });
    }

    setCurrentUser(userAuth);
  });
}
 
 render () {
    return (
    
    <div>
        
        <Header />
        <Routes>
         
            <Route  path='/' Component={Homepage}  />
            <Route path='/shop' Component={Shop} />
            <Route exact path='/signin' element={this.props.currentUser ? (
            <Navigate to='/' />
            ) : (
            <SignInAndSignUp />
            )}/>
            
            <Route exact path='/checkout' Component={Checkout}/>
           </Routes>
    
    </div>
    )
 }
}
const mapStateToProps = createStructuredSelector({
 currentUser: SelectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default (connect( mapStateToProps, mapDispatchToProps) (App));
