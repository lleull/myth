import React from 'react';
import './App.css';
import Homepage from './components/page/homepage/homepage.component';
import  { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop-page/shop.component';
import Header from './components/header.component/header-component';
import SignInAndSignUp from './components/sign-in and sign-up/sign-in and sign-up';
import { auth } from './assests/firebase/firebase.utils';


class  App extends React.Component {
      
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
}
unsubscriberFromAuth = null

     componentDidMount(){
      this.unsubscriberFromAuth =  auth.onAuthStateChanged(user => {
        this.setState({currentUser: user})
        console.log(user)
      })
     }
     componentWillUnmount() {
      this.unsubscriberFromAuth()
     }
 
 render () {
    return (
    
      <div>
        <Header  currentUser={this.state.currentUser}/>
        <Routes>
            <Route exact path='/' Component={Homepage} />
            <Route path='/shop' Component={Shop} />
            <Route path='/signin' Component={SignInAndSignUp} />
        </Routes>

         </div>
    )
 }
}


export default App;
