import React from "react";

const initialState = {
  title: "",
  category: "",
  qualifications: "",
  deadline: "",
  description: "",
};


function Eform({onAddJob}) {

  const [formData, setFormData] = useState(initialState)
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/job_listing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title, category, qualifications, deadline}),
    })
      .then((r) => r.json())
      .then((newJob) => {
        setFormData(initialState);
        onAddJob(newJob);
      });
  }
  return (
    <div>
      <section>
        <h1 class="sr-only">Checkout</h1>

        <div class="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
          <div class="py-12 bg-gray-50 md:py-24">
            <div class="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
              <div class="flex items-center">
                <span class="w-10 h-10 bg-blue-700 rounded-full"></span>

                <h2 class="ml-4 font-medium text-gray-900">Job posting form</h2>
              </div>

              <div>
                <p class="text-2xl font-medium tracking-tight text-gray-900">
                  $99.99
                </p>

                <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
              </div>

              <div>
                <div class="flow-root">
                  <ul class="-my-4 divide-y divide-gray-100">
                    <li class="flex items-center py-4">
                      <img
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                        alt=""
                        class="object-cover w-16 h-16 rounded"
                      />

                      <div class="ml-4">
                        <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                        <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt class="inline">Size:</dt>
                            <dd class="inline">XXS</dd>
                          </div>

                          <div>
                            <dt class="inline">Color:</dt>
                            <dd class="inline">White</dd>
                          </div>
                        </dl>
                      </div>
                    </li>

                    <li class="flex items-center py-4">
                      <img
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                        alt=""
                        class="object-cover w-16 h-16 rounded"
                      />

                      <div class="ml-4">
                        <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                        <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt class="inline">Size:</dt>
                            <dd class="inline">XXS</dd>
                          </div>

                          <div>
                            <dt class="inline">Color:</dt>
                            <dd class="inline">White</dd>
                          </div>
                        </dl>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="py-12 bg-white md:py-24">
            <div class="max-w-lg px-4 mx-auto lg:px-8">
              <form class="grid grid-cols-6 gap-4" onSubmit={handleSubmit}>
                <div class="col-span-3">
                  <label
                    for="FirstName"
                    class="block text-xs font-medium text-gray-700"
                    
                  >
                    Job title
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <fieldset class="col-span-6">
                  <legend class="block text-sm font-medium text-gray-700">
                    Category
                  </legend>

                  <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                    <div>
                      <label for="Country" class="sr-only" >
                        Category
                      </label>

                      <select
                        id="Country"
                        class="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="1">Human & Resources</option>
                        <option value="2">Programming</option>
                        <option value="3">Data Science</option>
                        <option value="4">Other</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-xs font-medium text-gray-700"
                    
                  >
                    Qualifications
                  </label>

                  <textarea
                    type="email"
                    id="Email"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    value={qualifications}
                    onChange={(e) => setQualifications(e.target.value)}
                  />
                </div>
                <fieldset class="col-span-6">
                  <legend class="block text-sm font-medium text-gray-700">
                    Description
                  </legend>

                  <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                    <div>
                      <label for="Description" class="sr-only" ></label>

                      <textarea
                        type="text"
                        id="CardNumber"
                        placeholder="Description"
                        class="relative w-full mt-1 border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                </fieldset>
                <div class="col-span-3">
                  <label
                    for="FirstName"
                    class="block text-xs font-medium text-gray-700"


                  >
                    Deadline
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                </div>
                <div class="col-span-6">
                  <button class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Eform;
