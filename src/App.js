import React, {useEffect} from 'react';
import Contact from './components/contact/contact'
import MainAppp from './components/newfile/main';
import QuizApp from './components/Question/QuizApp';


import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Checkout from './components/checkout page/checkout.cart.components';
import Homepage from './components/page/homepage/homepage.component';
import  { Routes, Route, Navigate} from 'react-router-dom';
import Shop from './components/Shop-page/shop.component';
import Header from './components/header.component/header-component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import { auth, createUserProfileDocument} from './assests/firebase/firebase.utils';
import { checkUserSession } from './redux/user/user.action';
import { SelectCurrentUser } from './redux/user/user.selector';


 

const App = () => {
 
 const currentUser = useSelector(SelectCurrentUser)
 const dispatch = useDispatch()


useEffect(() => {
dispatch(checkUserSession())
},[dispatch])


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




export default App;
