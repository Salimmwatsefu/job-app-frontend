import Navbar from './components/Navbar';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/user/Signup';
import  Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from './components/Contact';


function App() {
  const [user, setUser] = useState(null);
  {/*useEffect(() => {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

if (!user) return <SignUp onLogin={setUser} />;*/}


  return (
    <div className="App">
      <div><Navbar /></div>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>



      

   {/*} <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path="/signup" exact component = {SignUp} setUser = {setUser} ></Route>
  </Routes>*/}
    </div>
  );
}

export default App;
