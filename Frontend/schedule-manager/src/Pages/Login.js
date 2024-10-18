import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post(
        'http://localhost:7001/user/login',
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        
        const id = response.data.isUser._id;
        console.log(id);
        localStorage.setItem('user_id', id);
        localStorage.setItem('email', formData.email);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('name', response.data.isUser.name);
      //  toast.success('Login Successfull!',{
      //   position : toast.POSITION.TOP_RIGHT,
      //   autoClose : 3000
      //  })
        navigate('/');
        
      })
      .catch((error) => {
        alert('The user is not signed in');
        navigate('/signup');
      });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center 
    bg-[radial-gradient(circle,#00365d_0%,#080b16_58%)] p-4">
      {/* Left Text Section */}
      <div className="lg:w-1/2 w-full lg:text-left text-center mb-8 lg:mb-0">
        <h1 className="text-5xl font-extrabold text-white">
          Welcome to Milestone Master Platform
        </h1>
        <h2 className="text-2xl text-gray-200 mt-4">
          Manage your money effortlessly.
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Sign in to keep track of your goals and journey towards acheiving your goals.
        </p>
      </div>


      {/* Right Form Section */}
      <div className="lg:w-1/2 w-full max-w-md p-6 backdrop-blur-xl bg-[rgba(5,7,10,0.4)] 
      shadow-[rgba(9,11,17,0.7)_0px_4px_16px_0px,rgba(19,23,32,0.8)_0px_8px_16px_-5px] rounded-[calc(16px)]
      border-solid border-[rgba(51,60,77,0.6)] relative min-h-[48px] shrink-0">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">
          Login to Your Account
        </h2>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter your Email ID"
              className="font-normal text-sm leading-[1.4375em] box-border cursor-text inline-flex items-center w-full 
              relative text-white rounded-lg border border-[hsla(220,20%,25%,0.6)] bg-[#05080f] transition-[border] 
              duration-[120ms] ease-[ease-in] h-10 px-3 py-2 border-solid"
            />

          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter your Password"
              className="font-normal text-sm leading-[1.4375em] box-border cursor-text inline-flex items-center w-full 
              relative text-white rounded-lg border border-[hsla(220,20%,25%,0.6)] bg-[#05080f] transition-[border] 
              duration-[120ms] ease-[ease-in] h-10 px-3 py-2 border-solid"
            />

          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center relative cursor-pointer select-none align-middle appearance-none 
              box-border font-medium text-sm leading-[1.75] min-w-[64px] w-full normal-case h-10 px-4 py-1.5 bg-white rounded-lg "
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-white mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-white underline">
            Sign Up
          </a>
          {/* B8AC94 for underline*/}
        </p>
      </div>
    </div>
  );
}

export default Login;
