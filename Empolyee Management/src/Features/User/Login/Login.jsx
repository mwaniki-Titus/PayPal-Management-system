import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useLoginEmployeeMutation } from '../UserApi';
import { SuccessToast, ErrorToast, LoadingToast, ToasterContainer } from "../../../toaster/Toster";
import MainContent from "../../../Layout/MainContent";
import EmployeeDashboard from "../../../Employee/Layout/Employee/EmployeeDashboard";
import './Login.scss'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginEmployee] = useLoginEmployeeMutation();
  const navigate = useNavigate();

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

  const onSubmit = async (data) => {
    try {
      // setIsLoading(true);
      const response = await loginEmployee(data).unwrap();
      console.log(response)

      if (!response.error) {
        const { token, userDetails } = response;
        localStorage.setItem("token", token);
        localStorage.setItem("employeeDetails", JSON.stringify(userDetails));
        SuccessToast("Login successful");

        if (userDetails.admin==true) {
          navigate("/MainContent");
        } else {
          navigate("/EmployeeDashboard");
        }
      } else {
        ErrorToast(response.error.data.message);
      }
    } catch (error) {
      console.log(error)
      ErrorToast("Logging failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="loginpage">
      <ToasterContainer/>
      <div className="login-card">
        <div className="form">
          <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <h1>Welcome....</h1>
            <input type="text" placeholder="Enter your Email..." {...register("Email")} />
            <p role="alert">{errors.Email?.message}</p>
            <input type="password" placeholder="Enter your Password..." {...register("Password")} />
            <p role="alert">{errors.Password?.message}</p>
            <input type="submit" value="Login" className="loginbtns" disabled={isLoading} />
          </form>
        </div>
      </div>
      {isLoading && <LoadingToast />}
    </div>
  );
};

export default Login;
