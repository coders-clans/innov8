import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const submitHandler = (event) => {
        event.preventDefault();

        console.log(formData, "after submitting the form");

        axios.post("http://localhost:7001/user/signUp", {
            name: formData.name,
            email: formData.email,
            password: formData.password
        }).then((response) => {
            navigate('/login');
        }).catch((error) => {
            setFormData({
                name: '',
                email: '',
                password: ''
            });
            alert("This email is already signed up");
        });
    };

    const ChangeHandler = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[radial-gradient(circle,#00365d_0%,#080b16_58%)]">
            <div className="lg:w-1/2 w-full max-w-md p-6 backdrop-blur-xl bg-[rgba(5,7,10,0.4)] 
      shadow-[rgba(9,11,17,0.7)_0px_4px_16px_0px,rgba(19,23,32,0.8)_0px_8px_16px_-5px] rounded-[calc(16px)]
      border-solid border-[rgba(51,60,77,0.6)] relative min-h-[48px] shrink-0">
                <h2 className="text-4xl font-bold mb-6 text-center text-white">Create Your Account</h2>
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <input 
                            type="text" 
                            name='name'
                            value={formData.name}
                            onChange={ChangeHandler}
                            placeholder="Enter your Name" 
                            className="font-normal text-sm leading-[1.4375em] box-border cursor-text inline-flex items-center w-full 
                            relative text-white rounded-lg border border-[hsla(220,20%,25%,0.6)] bg-[#05080f] transition-[border] 
                            duration-[120ms] ease-[ease-in] h-10 px-3 py-2 border-solid"
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            name='email'
                            value={formData.email}
                            onChange={ChangeHandler}
                            placeholder="Enter your Email ID" 
                            className="font-normal text-sm leading-[1.4375em] box-border cursor-text inline-flex items-center w-full 
                            relative text-white rounded-lg border border-[hsla(220,20%,25%,0.6)] bg-[#05080f] transition-[border] 
                            duration-[120ms] ease-[ease-in] h-10 px-3 py-2 border-solid"
                        />
                    </div>
                    <div>
                        <input 
                            type="password"
                            name='password' 
                            value={formData.password}
                            onChange={ChangeHandler}
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
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="text-center text-white mt-6">
                    Already have an account? <a href="/login" className="text-white underline">Log In</a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
