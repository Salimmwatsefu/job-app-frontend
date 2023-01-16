import React, {useState, useRef} from 'react';
import emailjs from "emailjs-com";

function FileUploader() {
    const [file, setFile] = useState();
 
  const inputFile = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const form = useRef();

const addFile = () => {
   inputFile.current.click();
 };

 const sendEmail = (e) => {
   e.preventDefault();

   emailjs.sendForm("service_uog23se",  "template_j10za1a", form.current, "u_o34Ox9L0zLMJiLp")
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });
 };


return (
  <div align="center">
    <div className="jumbotron" style={{backgroundColor:"#fce4d8", height:"90vh"}}>
  <h1 className="display-4">Hello, Welcome!</h1>
  <h2>Thank you for choosing Career Connect</h2>
  <br/>
  <p className="lead">This is a simple Application that guarantees a connection to your employer</p>
  <hr className="my-4"/>
  <br/>
  <p>We are glad to forward your CV to the associated employer by simply uploading it below. Please attach your file in PDF.</p>
 <br/>
 <br/>
  <p className="lead">
  <form ref={form} enctype="multipart/form-data">
    <input type="file" onChange={addFile} />

    <div>{file && `${file.name} - ${file.type}`}</div>

    <button className="btn btn-primary" onClick={sendEmail}>Upload</button>
    </form>
  </p>
</div>
  
  </div>
);
}

export default FileUploader;