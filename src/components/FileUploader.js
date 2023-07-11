import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import message from "react";

function FileUploader() {
  const [file, setFile] = useState();
  const [message, setmessage] = useState();
  const inputFile = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const form = useRef();
  //   const nameRef = useRef(null);
  //   const emailRef = useRef(null);
  //   const uploadRef = useRef(null);

  const addFile = () => {
    inputFile.current.click();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    //    nameRef.current.value = '';
    //    emailRef.current.value = '';
    //   uploadRef.current.value = '';

    emailjs
      .sendForm(
        "service_uog23se",
        "template_j10za1a",
        form.current,
        "u_o34Ox9L0zLMJiLp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setmessage("Application submited succesfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div align="center">
      <div
        className=""
      >
        
        <h1 className="pt-3 text-amber-700">Hello, Welcome!</h1>
        <h2 className=" text-amber-600">Thank you for choosing Career Connect</h2>
        <br />
        <p className="">
          This is a simple Application that guarantees a connection to your
          employer
        </p>
        <hr className="my-4 mx-20 text-black" />
        <br />
        <p>
          We are glad to forward your CV to the associated employer by simply
          uploading it below.<br/>Please attach your file in PDF.
        </p>
        <br />
        <div className="message text-sm text-green-500 col-span-6">{message ? <p>{message}</p> : null}</div>
        
        <h4 className="pb-3 text-amber-700">Fill this Application form</h4>
        <p className="lead">
          <form
            ref={form}
            enctype="multipart/form-data"
            className="bg-white shadow md:w-[400px] w-[370px] py-3"
          >
            <label htmlFor="fullName " className="font-semibold text-sm">Enter your fullname:</label>
            <input type="text" name="name" placeholder="Name" className=" rounded-none" />
            <br />
            <label htmlFor="email " className="font-semibold text-sm">Enter your email address:</label>
            <input type="text" name="email" placeholder="Email" />
            <br />
            <label htmlFor="fullName " className="font-semibold text-sm">Upload your resume:</label>
            <input
              type="file"
              name="message"
              onChange={addFile}
              
            />

            <div className="text-black font-semibold">{file && `${file.name} - ${file.type}`}</div>

            <button className="bg-[#BA4B2F] px-3 py-2 rounded-lg text-white text-sm font-semibold" onClick={sendEmail}>
              Upload
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default FileUploader;
