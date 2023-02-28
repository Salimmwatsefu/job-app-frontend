import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect, Route } from "react-router";


function Elogin({onLogin}){
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);
function handleSubmit(e) {
  e.preventDefault();
  setErrors([]);
  setIsLoading(true);
  fetch("https://careerconnect-production.up.railway.app/employers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((r) => r.json())
    .then((data) => {
      setIsLoading(false);
      if (data.success) {
        <Redirect to="/eform" />
      } else {
        setErrors(data.errors);
      }
    })
    .catch((err) => {
      setIsLoading(false);
      setErrors([err]);
    });
}
return (
  <section id="Login" className="relative flex flex-wrap lg:h-screen lg:items-center">
    <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2" style={{float:'right'}}>
      <img
        alt="Welcome"
        src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        className="object-cover h-64 w-full sm:h-96 lg:h-full lg:w-full"
/>
    </div>
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24" style={{float:'left'}}>
<div className="mx-auto max-w-lg text-center">
<h1 className="text-2xl font-bold sm:text-3xl">Welcome employer</h1>
  </div>
  <form onSubmit={handleSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
    <div>
      <label htmlFor="email" className="sr-only">
        Username:
      </label>
      <div className="relative">
        <input
          type="text"
          id="username"
          autoComplete="off"
          placeholder=" Please enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
        />
      </div>
    </div>
    <div>
      <label htmlFor="password" className="sr-only">
        Password:
      </label>
      <div className="relative">
        <input
          type="password"
          className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          id="password"
          autoComplete="current-password"
          placeholder=" Please enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
    {errors.length > 0 && (
      <div className="text-red-500 text-sm">
        {errors.map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div>
    )}
    
        <p className="text-sm text-gray-500">
          No account?
          <Link to="/esignup" className="underline">
            Sign up
          </Link>
        </p>
        <button
          type="submit"
          className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          {isLoading ? "Loading..." : "Sign in"}
        </button>
     
      </form>
  </div>
</section>
);
}
export default Elogin;