import './App.css';
import Homepage from './components/page/homepage/homepage.component';
import  { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop-page/shop.component';
import Header from './components/header.component/header-component';


function App() {
  return (
    
<div>
  <Header />
  <Routes>
      <Route exact path='/' Component={Homepage} />
      <Route path='/shop' Component={Shop} />
  </Routes>
    

    
   
   </div>
  );
}

export default App;
