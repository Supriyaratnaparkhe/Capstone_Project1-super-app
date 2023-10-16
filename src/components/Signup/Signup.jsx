import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [UserState, setUserState] = useState({
    Name: "",
    userName: "",
    email: "",
    mobile: "",
    acceptTerms:false,
  });
  
  const [errors, setErrors] = useState({});
  

  const validateValues = (UserState) => {
    const errors = {};
    if (!UserState.Name) {
      errors.Name = "*Name field is required";
    }
    if (!UserState.userName) {
      errors.userName = "*UserName field is required";
    }
    if (!UserState.email) {
      errors.email = "*Email field is required";
    }else if (!/^\S+@\S+\.\S+$/.test(UserState.email)) {
        errors.email = 'Invalid email format';
      }

    if (!UserState.mobile) {
      errors.mobile = "*Mobile number is required";
    }else if(UserState.mobile.length!==10){
        errors.mobile="*Enter valid mobile number";
    }
    if (!UserState.acceptTerms) {
      errors.acceptTerms = "*Check this box if you want to proceed";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateValues(UserState);

    if (isValid) {
      
      localStorage.setItem('UserState', JSON.stringify(UserState));

      navigate("/category");
    }
    
    

    
    console.log("Name is:", UserState.Name);
    console.log("UserName is:", UserState.userName);
    console.log("Email is:", UserState.email);
    console.log("Mobile is:", UserState.mobile);
  };

  const updateForm = (e) => {
    let { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setUserState({
      ...UserState,
      [name]: inputValue,
    });
  };
  return (
    <>
      <div className="container1">
        <div className="image-side">
          <div className="heading">Discover new things on Superapp</div>
        </div>
        <div className="signup">
          <div className="super-heading">
            <span id="super">Super app</span>
            <br />
            <span>Create your new account</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                name="Name"
                value={UserState.Name}
                onChange={updateForm}
                className="input-box"
                placeholder="Name"
              />
              <br />
              <span className="error">{errors.Name}</span>
              <br />
              <input
                type="text"
                name="userName"
                value={UserState.userName}
                onChange={updateForm}
                className="input-box"
                placeholder="UserName"
              />
              <br />
              <span className="error">{errors.userName}</span>
              <br />
              <input
                type="email"
                name="email"
                value={UserState.email}
                onChange={updateForm}
                className="input-box"
                placeholder="Email"
              />
              <br />
              <span className="error">{errors.email}</span>
              <br />
              <input
                type="text"
                name="mobile"
                value={UserState.mobile}
                onChange={updateForm}
                className="input-box"
                placeholder="Mobile"
              />
              <br />
              <span className="error">{errors.mobile}</span>
              <br />
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={UserState.acceptTerms}
                onChange={updateForm}
                className="check-box"
              />
              <label>Share my registration data with Superapp</label>
              <br />
              <span className="error">{errors.acceptTerms}</span>
              <br />
            </div>
            <div>
              <button type="submit" className="signup-btn">
                <div id="signbut">Sign Up</div>
              </button>
            </div>
            <div className="rule">
              By clicking on Sign up. you agree to Superapp{" "}
              <span className="terms">Terms and Conditions of Use</span>
              <br />
              <br />
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span className="terms">Privacy Policy</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
