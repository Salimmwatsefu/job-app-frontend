import Navbar from './components/Navbar';
import './App.css';
import Loading from './components/Loading';
import Review from './components/Review';

import Login from './components/user/Login';
import Logout from './components/user/Logout';
import { useState, useEffect } from 'react';


import { Routes, Route } from 'react-router-dom';
// import SignUp from './components/user/Signup';

import  Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from './components/Contact';

import Ehome from './components/employers/Ehome';


import Account from './components/Account';



function App() {
  const [loading, setLoading] = useState(false)
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     //auto-login
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);


// if (!user) return <SignUp onLogin={setUser} />;


  return (
    <div className="App">


      <div><Navbar /></div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/loading' element={<Loading/>}/>
      <Route path='/blog' element={<Blog/>}/>

      <Route path='/contact' element={<Contact/>}/>
      <Route path='/ehome' element={<Ehome/>}/>
  
      {/* <Route path='/account/*' element={<Account/>}/> */}
      {/* <Route path="/signup" exact component = {SignUp} setUser = {setUser} ></Route>
      <Route path="/Login" exact component = {Login} setUser =  {setUser} ></Route>
      <Route path="/logout" exact component= {Logout} setUser ={setUser} ></Route> */}
     <Route path='/contact' element={<Contact/>}/>

      </Routes>
</div>
  );
}

export default App;
