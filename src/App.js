import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <div><Navbar /></div>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>



      
    </div>
  );
}

export default App;
