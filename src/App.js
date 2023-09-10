import './App.css';
import Homepage from './components/page/homepage/homepage.component';
import  { Routes, Route } from 'react-router-dom';

function Hatspage() {
  return (
    <div>
      <h1>HATS PAGE </h1>
    </div>
  )
}
function App() {
  return (
<div>
  <Routes>
      <Route exact path='/' Component={Homepage} />
      <Route path='/hat' Component={Hatspage} />
  </Routes>
    

    
   
   </div>
  );
}

export default App;
