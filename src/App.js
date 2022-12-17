import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/user/Signup';
import Login from './components/user/Login';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

if (!user) return <SignUp onLogin={setUser} />;


  return (
    <div className="App">
      <Navbar />
      

    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path="/Signup" exact component = {SignUp} setUser = {setUser} ></Route>
      <Route path="/Login" exact component = {Login} setUser = {setUser}></Route>
    </Routes>
    </div>
  );
}

export default App;
