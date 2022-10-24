import {Route,Routes} from 'react-router-dom';
import React from 'react';
import Initialcards from './Components/Cards';
import Cards from './Components/axios';
import Secondcards from './Components/Cards2';
import MultipleImage from './Components/MultipleImage';
import Cards3 from './Components/Cards3';
import Last from './Components/Last';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Form from './Components/Form';
import './App.css';

function App() {
  return (
    <div>  
      
    <Nav/>
    
    <Routes>
    <Route path="home" element={<Home/>}></Route>
   
    </Routes>
    <Initialcards/>
    <br></br>
    <Cards/>
    <br></br><br></br>
    <Secondcards></Secondcards>
    <br></br><br></br>
    <MultipleImage></MultipleImage>
    <br></br><br></br>
    <Form></Form>
    <br></br><br></br>
    <Cards3></Cards3>
   
    <Last></Last>

   </div>
   );
  
}

export default App;
