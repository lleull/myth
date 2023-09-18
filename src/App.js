import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Homepage from './components/page/homepage/homepage.component';
import  { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop-page/shop.component';
import Header from './components/header.component/header-component';
import SignInAndSignUp from './components/sign-in and sign-up/sign-in and sign-up';
import { auth, createUserProfileDocument} from './assests/firebase/firebase.utils';
import Contact from './components/contact/contact';
import setCurrentUser from './redux/user/user.action';



class  App extends React.Component {
 
      
  
unsubscriberFromAuth = null

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
            <Route exact path='/' Component={Homepage}  />
            <Route path='/shop' Component={Shop} />
            <Route path='/signin' Component={SignInAndSignUp} />
            <Route path='/contact' Component={Contact} />
        </Routes>
           
         </div>
    )
 }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps) (App);
