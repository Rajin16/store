// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Details from './component/Details';


function App() {
  return (
  
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/pd/:id' element={<Details/>}></Route>
    </Routes>
    <Footer/>
      

  </Router>
   
   
  );
}

export default App;
