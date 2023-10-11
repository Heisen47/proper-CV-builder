import "../app.css";
import PropTypes from "prop-types";

function DisplayCV(props) {


  return (
    <div className="Preview" id="preview">
      <div className="NameInfo">
        <h2>
          <b>{props.Name.charAt(0).toUpperCase() + props.Name.slice(1).toLowerCase()}</b>
        </h2>
        <h3>{props.Email}</h3>
        
        <div>
          Contact : 
          <strong> {props.Num
          // .length >10 ? props.Num :alert("please enter 10 digits")
          }
          </strong>
        </div>
        <div>
          Date of Birth : <strong> {props.Dob}</strong>
        </div>
        <div>
          Gender: <strong>{props.Gender}</strong>
        </div>
        <span>
          Nationality : <strong> {props.country} </strong>{" "}
        </span>

        <div>
          
          State : <strong> {props.state} </strong> <br />
          <span> pin : <strong> {props.pin} </strong> </span>
        </div>
        <div>Address : <strong>{props.add}</strong></div>
      </div>
      <br />
      <hr />
    </div>
  );
}

DisplayCV.propTypes = {
  Name: PropTypes.string,
  Email: PropTypes.string,
  Gender: PropTypes.string,
  country: PropTypes.string,
  Dob: PropTypes.any,
  Num: PropTypes.any,
  state: PropTypes.string,
  pin: PropTypes.any,
  add: PropTypes.string,
};

export default DisplayCV;
