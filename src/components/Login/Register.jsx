import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useContext } from "react";
import { ContextProvide } from "../../Context.jsx";
import "./login.css";

function Register() {
  const nav = useNavigate();

  const [item, setItem, login, setLogin, user, setUser] =
    useContext(ContextProvide);

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
      confirmPassword: "",
    },
    
    
    validate: (values) => {
      let error = {};
      if (values.firstName === "") {
        error.firstName = "*Please enter the first name*";
      } else if (values.firstName.length < 4 || values.firstName.length > 25) {
        error.firstName =
          "*First name should be above 3 chars and below 25 chars*";
      } else if (!/^[A-Za-z ]*$/.test(values.firstName)) {
        error.firstName = "*First name should be in chars*";
      }

      if (values.lastName === "") {
        error.lastName = "*Please enter the last name*";
      } else if (values.lastName.length < 1 || values.firstName.length > 15) {
        error.lastName =
          "*Last name should be above 1 char and below 15 chars*";
      } else if (!/^[A-Za-z ]*$/.test(values.lastName)) {
        error.lastName = "*Last name should be in chars*";
      }

      if (values.mobileNumber === "") {
        error.mobileNumber = "*Please enter the mobile number*";
      } else if (
        values.mobileNumber.length < 10 ||
        values.mobileNumber.length > 10
      ) {
        error.mobileNumber = "*Mobile number should contains 10 numbers*";
      } else if (!/^\d{10}$/.test(values.mobileNumber)) {
        error.mobileNumber = "*Please Enter numbers only*";
      }

      if (values.Email === "") {
        error.Email = "*Please enter the email*";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
      ) {
        error.Email = "Invalid email address";
      }
      if (values.Password === "") {
        error.Password = "*Please enter the password*";
      } else if (values.Password.length < 8) {
        error.Password = "*Password must be 8 letters*";
      }
      if (values.confirmPassword === "") {
        error.confirmPassword = "*Please enter the conform password*";
      } else if (values.Password !== values.confirmPassword) {
        error.confirmPassword = "*Please enter the same password*";
      }
      return error;
    },

     onSubmit: async (values) => {
      console.log(values)

      // const formData = new FormData();
      // formData.append("firstName", values.firstName);
      // formData.append("lastName", values.lastName);
      // formData.append("mobileNumber", values.mobileNumber);
      // formData.append("Email", values.Email);
      // formData.append("Password", values.Password);
      // formData.append("confirmPassword", values.confirmPassword);

      try {
       const response = await axios.post("http://localhost:5555/Register", values,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data)

        nav("/Header");
      } catch (error) {
        alert("Register error");
      }
    },
  });
  const handleNavigate = () => {
    nav("/login");
  };
  return (
    <>
      <div className="mainRegister">
        <br></br>
        <br></br>
        <div className="register">
          <div className="page">
            <i className="fa-solid fa-user"></i>
            <p>Register</p>
          </div>

          <form className="registerDetails" onSubmit={formik.handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder="First name"
                  ></input>
                  <span style={{ color: "red" }}>
                    {formik.errors.firstName}
                  </span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder="Last name"
                  ></input>
                  <span style={{ color: "red" }}>{formik.errors.lastName}</span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="mobileNumber"
                    onChange={formik.handleChange}
                    value={formik.values.mobileNumber}
                    placeholder="Mobile number"
                  ></input>
                  <span style={{ color: "red" }}>
                    {formik.errors.mobileNumber}
                  </span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="Email"
                    onChange={formik.handleChange}
                    value={formik.values.Email}
                    placeholder="Email"
                  ></input>
                  <span style={{ color: "red" }}>{formik.errors.Email}</span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="Password"
                    onChange={formik.handleChange}
                    value={formik.values.Password}
                    placeholder="Password"
                  ></input>
                  <span style={{ color: "red" }}>{formik.errors.Password}</span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    placeholder="Confirm Password"
                  ></input>
                  <span style={{ color: "red" }}>
                    {formik.errors.confirmPassword}
                  </span>
                </div>
              </div>
            </div>
            <ul className="registerUl">
              <li>
                <button type="submit" className="registerButton">
                  Register
                </button>
              </li>
              <li>
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  <button className="registerButton1">Login</button>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>

      {/* <div className={`notification ${login ? "notification1" : ""}`}>
        <p className="sucess">successfully</p>
        <p>
          <i className="fa-solid fa-check"></i>
        </p>
        <span className="close" onClick={handleNavigate}>
          Continue
        </span>
      </div> */}
    </>
  );
}

export default Register;
