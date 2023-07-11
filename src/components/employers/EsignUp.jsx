import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EsignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [message, setmessage] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/employers/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        navigate("/elogin");
      } else {
        setmessage("All fields are required!");
      }
    });
    setFormData({ username: "", email: "", password: "" });
  }

  return (
    <div id="signup" className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-[#BA4B2F] lg:col-span-5 lg:h-full xl:col-span-6">
          
          <div className="hidden lg:relative lg:block lg:p-12">
            

            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Career Connect
            </h2>

            <p class="mt-4 leading-relaxed text-white/90">
              Please Sign Up to continue if you do not have an account
            </p>
          </div>
        </section>

        <main
          aria-label="Main"
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div class="max-w-xl lg:max-w-3xl">
            <div class="relative -mt-16 block lg:hidden">
              

              <h1 class="mt-5 text-2xl font-bold text-[#BA4B2F] sm:text-3xl md:text-4xl">
                Welcome to Career connect
              </h1>

              <p class="mt-4 leading-relaxed text-gray-500">
                Empowering job seekers to connect, discover and explore
                opportunities to advance their careers and achieve success
              </p>
            </div>
            <div>
              <h3 className="text-[#BA4B2F]">Employers Registration form</h3>
            </div>
            <form onSubmit={handleSubmit} class="mt-8 grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  class="block text-sm font-medium text-gray-700"
                >
                  Username:
                </label>

                <input
                  type="text"
                  autoComplete="off"
                  id="username"
                  placeholder="  Enter your username..."
                  name="username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6">
                <label
                  htmlFor="Email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email:
                </label>

                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  name="email"
                  placeholder="  Enter your email address..."
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password:
                </label>

                <input
                  type="password"
                  id="password"
                  placeholder="  Enter your password..."
                  name="password"
                  value={formData.password}
                  autoComplete="off"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div class="col-span-6">
                <p class="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" class="text-gray-700 underline">
                    terms and conditions
                  </a>
                  and
                  <a href="#" class="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button class="inline-block shrink-0  border  bg-[#BA4B2F] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Register
                </button>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to="/elogin" class="text-red-700 ml-2 underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
            <div className="message text-sm text-red-500 col-span-6">
              {message ? <p>{message}</p> : null}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EsignUp;
