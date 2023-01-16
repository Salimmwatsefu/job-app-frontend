import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import SignUp from './components/user/Signup';
// import Login from './components/user/Login';
// import Logout from './components/user/Logout';
import Loading from './components/Loading';
import Review from './components/Review';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ehome from './components/employers/Ehome';
//import Account from './components/Account';
import  Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from './components/Contact';
import Jobs from './components/Jobs';
// import JobsCards from './components/JobsCards';




function App() {
  const [user, setUser] = useState(null);
  const [jobs, setJobs]= useState([])

  useEffect(() => {
    fetch("/job_listings")
    .then((res)=>res.json())
    .then((jobs)=> setJobs(jobs))
  }, [])

//   useEffect(() => {
//     //auto-login
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

// if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">


      <div><Navbar setUser={setUser}/></div>
      
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/loading' element={<Loading/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/jobs' element={<Jobs jobs={jobs}/>}/>
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
