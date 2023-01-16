import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Loading from './components/Loading';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/user/Signup';
import Login from './components/user/Login';
import Logout from './components/user/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';

import Review from './components/Review';
import Ehome from './components/employers/Ehome';
import  Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from './components/Contact';
import Eform from './components/employers/Eform';
import Jobs from './components/Jobs';
import FileUploader from './components/FileUploader';




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

      <Route path='/contact' element={<Contact/>}/>
      <Route path='/eform' element={<Eform/>}/>
     

      <Route path='/jobs' element={<Jobs jobs={jobs}/>}/>
      <Route path='/upload' element={<FileUploader  />}/>
      <Route path='/ehome' element={<Ehome/>}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/signup" element={<Logout setUser ={setUser} />} />
     <Route path='/contact' element={<Contact/>}/>
      <Route path='/upload' element={<FileUploader />}/>

      </Routes>
</div>
  );
}

export default App;
