import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import './App.css';
import Homepage from './components/page/homepage/homepage.component';
import  { Routes, Route, Navigate} from 'react-router-dom';
import Shop from './components/Shop-page/shop.component';
import Header from './components/header.component/header-component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import { auth, createUserProfileDocument} from './assests/firebase/firebase.utils';
import { checkUserSession } from './redux/user/user.action';
import Checkout from './checkout page/checkout.cart.components';
import { SelectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import Contact from './components/contact/contact'
import MainAppp from './components/newfile/main';
import QuizApp from './components/Question/QuizApp';


 

const App = ({checkUserSession, currentUser}) => {
 
 

useEffect(() => {
checkUserSession()
}, [checkUserSession])
    return (
    <>
    <div>
        
        <Header />
        <Routes>
       <Route path='/quiz' Component={QuizApp} />
        <Route  path='/contact' Component={Contact} />  
        <Route  path='/Mount' Component={MainAppp}  />
            <Route  path='/' Component={Homepage}  />
            <Route  path='/shop' Component={Shop} />
            <Route exact path='/signin' element={currentUser ? (
            <Navigate to='/' />
            ) : (
            <SignInAndSignUpPage />
            )}/>
            
            <Route  path='/checkout' Component={Checkout}/>
          </Routes>
    
    </div>
   
    </>
    )
 }

const mapStateToProps = createStructuredSelector({
 currentUser: SelectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())

})



export default connect( mapStateToProps, mapDispatchToProps) (App);
