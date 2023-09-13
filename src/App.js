import './App.css';
import Homepage from './components/page/homepage/homepage.component';
import  { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop-page/shop.component';



function App() {
  return (
<div>
  <Routes>
      <Route exact path='/' Component={Homepage} />
      <Route path='/hats' Component={Shop} />
  </Routes>
    

    
   
   </div>
  );
}

export default App;
