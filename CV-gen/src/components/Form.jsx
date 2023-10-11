import { useState } from "react";
import "../app.css";
import DisplayCV from "./DisplayCV";

function Form() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState("");
  const [Dob, setDob] = useState("");
  const [Num , setNum]=useState("");
  const [country , setCountry] = useState("");
  const [state , setState] = useState("");
  const [pin , setPin] = useState("");
  const [add , setAdd] = useState("");

  function NewName(e) {
    let updatedName = e.target.value;
    setName(updatedName);
  }

  function NewEmail(e) {
    const updatedEmail = e.target.value;
    setEmail(updatedEmail);
  }

  function NewMaleGender() {
    setGender("Male");
  }
  function NewFemaleGender() {
    setGender("Female");
  }

  function NewDob(e){
    setDob(e.target.value)
  }

  function NewNum(e){
    setNum(e.target.value)
  }

  function NewCountry(e){
    setCountry(e.target.value);
  }

  function NewState(e){
    setState(e.target.value);
  }

  function NewPin(e){
    setPin(e.target.value);
  }

  function NewAdd(e){
    setAdd(e.target.value)
  }

  function SubmitData(e){
    e.preventDefault();
    const formData ={Name,Email,Gender,Dob,Num,country,state,pin,add};

    const formDataJson = JSON.stringify(formData);
    localStorage.setItem("formData", formDataJson);

    console.log(formData);
  }

  return (
    <div id="AllContainer" className="container my-2">
      <div id="form-details">
        <div className="input-group mb-3" width="300px">
          <input
            type="text"
            className="form-control"
            placeholder="Name :"
            aria-label="Name"
            aria-describedby="basic-addon1"
            required
            onChange={NewName}
            value={Name}
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email :"
            onChange={NewEmail}
            value={Email}
            required
          />
        </div>

        <div className="mb-3">
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
              placeholder="Contact Num :"
              onChange={NewNum}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group" onClick={NewDob}>
            <span className="input-group-text">Date of Birth: </span>
            <input type="date" className="form-control" onChange={NewDob} />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text">Gender: </span>
            <div className="dropdown mx-4">
              <button
                className="btn btn-outline-success dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ---Select Gender---
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={NewMaleGender}>
                    Male
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={NewFemaleGender}>
                    Female
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text">Country : </span>
            <input type="text" className="form-control" onChange={NewCountry}/>
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text">State : </span>
            <input type="text" className="form-control" onChange={NewState}/>
            <span className="input-group-text">PIN : </span>
            <input type="number" className="form-control" onChange={NewPin} />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text">Address : </span>
            <textarea type="text" className="form-control" onChange={NewAdd}/>
          </div>
        </div>
        <div className="btns">
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label ">
              Upload your picture :
            </label>
            <input
              className="form-control btn btn-secondary"
              type="file"
              id="formFile"
            />
          </div>
          <button
            className="btn btn-outline-success mx-5"
            style={{ width: "30em", height: "3em" }}
            onClick={SubmitData}
          >
            Submit
          </button>
        </div>
      </div>
      <DisplayCV Name={Name} Email={Email} Gender={Gender} Dob={Dob} Num ={Num} country={country} state={state} pin={pin} add={add}/>
    </div>
  );
}

export default Form;
