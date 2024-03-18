import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  // Dummy data for admin and employee
  const adminData = {
    email: "admin@example.com",
    password: "adminpassword",
  };

  const employeeData = {
    
    email: "employee@example.com",
    password: "employeepassword",
  };

  const schema = yup.object().shape({
    Email: yup.string().required("Username is required"),
    Password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form data: ", data);

    // Check if user is admin
    if (data.Email === adminData.email && data.Password === adminData.password) {
      const userDetails = {
        admin: true,
      };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      navigate("/MainContent");
    }
    
    else if (
      data.Email === employeeData.email &&
      data.Password === employeeData.password
    ) {
      const userDetails = {
        admin: false,
      };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      navigate("/employeeDashboard");
    } else {

      console.log("Invalid credentials");
    }
  };

  return (
    <div className="loginpage">
      <div className="form">
        <form action="" className="login" onSubmit={handleSubmit(onSubmit)}>
          <h1>Holla...</h1>
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Enter your Email..."
            {...register("Email")}
          />
          <p>{errors.Email?.message}</p>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Enter your Password..."
            {...register("Password")}
          />
          <p>{errors.Password?.message}</p>
          <input type="submit" value="Login" className="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;

