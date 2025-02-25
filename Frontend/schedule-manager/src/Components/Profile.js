import React, { useRef,useEffect, useState } from 'react';
import axios from 'axios';
import defaultimg from './images/profile.png';
import editimg from './images/edit.png'
import { CiEdit } from "react-icons/ci"
import { toast } from 'react-toastify';
function Profile({ isLoggedin, setIsLoggedIn }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [profileImage, setProfileImage] = useState('');
  const [isChangeEmail, setIsChangeEmail] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [newData, setNewData] = useState({
    name: '',
    email: '',
    image: ''
  });
  const [isEmailChange, setIsEmailChange] = useState(false);
  const id = localStorage.getItem('email');
  console.log(id);
  useEffect(() => {
    if (!id) {
      console.error('No email found in localStorage');
      return;
    }

    axios.get(`http://localhost:7001/user/getUser/${id}`, { withCredentials: true })
      .then((response) => {
        const userData = response.data.response;
        console.log(userData);
        if (userData) {
          setName(userData.name);
          setEmail(userData.email);
          setProfileImage(userData.profileImage);
          setNewData({
            name: userData.name,
            email: userData.email
          });
        }
        else {
          console.error('No user data found in response.');
        }
      })
      .catch((error) => {
        console.log("Error fetching user details:", error);
      });
  }, [id]);

  const userId = localStorage.getItem('user_id');
  const changeNameHandler = async () => {

    try {
      const res = await axios.put(`http://localhost:7001/user/UpdateName/${userId}`, { name: newData.name }, { withCredentials: true });
      console.log(res);
      console.log(newData.name);
      setName(newData.name);
      setIsChange(false);
    }

    catch (error) {
      console.error("Error updating name:", error)
    };
  };



  const changeEmailHandler = () => {
    let OTP = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem('otp', OTP);
    axios.patch(`http://localhost:7001/user/EmailVerify/${newData.email}/${OTP}`, { withCredentials: true })
      .then(() => {
        setIsChangeEmail(false);
        setIsEmailChange(true);
      })
      .catch(error => (toast.error('Email Already exists')));
  };
  const onChangeHandler = (event) => {
    setNewData({
      ...newData,
      [event.target.name]: event.target.value
    });
  };

  const OTPHandler = (e) => {
    e.preventDefault();
    const otpValue = e.target[0].value;
    const storedOtp = localStorage.getItem('otp');
    if (otpValue === storedOtp) {
      alert("OTP Verified Successfully!");
      setIsEmailChange(false);
      axios.patch(`http://localhost:7001/user/editEmail/${email}`, { email: newData.email }, { withCredentials: true }).then(() => {
        console.log("Email updated successfully.");
        setEmail(newData.email);
      });
    } else {
      alert("Incorrect OTP. Try again.");
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  }

    const [isOpen, setIsOpen] = useState(true); // State to control visibility
    const profileRef = useRef(null); // Ref for the profile container
  
    // Close the profile when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
          setIsOpen(false); // Close the profile
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    if (!isOpen) return null; // Don't render if the profile is closed
  
    return (
      <div
        ref={profileRef}
        className="w-full max-w-md p-6 backdrop-blur-xl bg-[rgba(5,7,10,0.4)]
        shadow-[rgba(9,11,17,0.7)_0px_4px_16px_0px,rgba(19,23,32,0.8)_0px_8px_16px_-5px] rounded-[calc(16px)]
        border-solid border-[rgba(51,60,77,0.6)] relative min-h-[48px] shrink-0"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mt-2 mb-2">Profile</h1>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="mb-8">
            <h2 className="font-semibold text-white mb-2">Name:</h2>
            <div className="flex items-center justify-between">
              {isChange ? (
                <input
                  className="font-normal text-sm leading-[1.4375em] box-border cursor-text inline-flex items-center w-full 
                relative text-white rounded-lg border border-[hsla(220,20%,25%,0.6)] bg-[#05080f] transition-[border] 
                duration-[120ms] ease-[ease-in] h-10 px-3 py-2 border-solid"
                  type="text"
                  name="name"
                  value={newData.name}
                  onChange={onChangeHandler}
                />
              ) : (
                <p className="text-white flex-grow">{name ? name : "Loading..."}</p>
              )}
  
              {isChange ? (
                <button
                  className="ml-4 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition shadow-md"
                  onClick={changeNameHandler}
                >
                  Save
                </button>
              ) : (
                <button
                  className="ml-4 px-4 py-2 text-white rounded-xl transition shadow-md translate-x-3"
                  onClick={() => setIsChange(true)}
                >
                  <CiEdit fontSize="1.45rem" />
                </button>
              )}
            </div>
          </div>
  
          {/* Email Section */}
          <div className="mb-8">
            <h2 className="font-semibold text-white mb-2">Email:</h2>
            <div className="flex items-center justify-between">
              {isChangeEmail ? (
                <input
                  className="font-normal text-sm leading-[1.4375em] box-border cursor-text inline-flex items-center w-full 
                relative text-white rounded-lg border border-[hsla(220,20%,25%,0.6)] bg-[#05080f] transition-[border] 
                duration-[120ms] ease-[ease-in] h-10 px-3 py-2 border-solid"
                  type="email"
                  name="email"
                  value={newData.email}
                  onChange={onChangeHandler}
                />
              ) : (
                <p className="text-white flex-grow">{email || "Loading..."}</p>
              )}
              {isChangeEmail ? (
                <button
                  className="ml-4 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition shadow-md"
                  onClick={changeEmailHandler}
                >
                  Save
                </button>
              ) : (
                <button
                  className="ml-4 px-4 py-2 text-white rounded-xl transition shadow-md"
                  onClick={() => setIsChangeEmail(true)}
                >
                  <CiEdit fontSize="1.45rem" />
                </button>
              )}
            </div>
          </div>
  
          {/* OTP Verification */}
          {isEmailChange && (
            <div className="mb-6">
              <h2 className="font-semibold text-white mb-2">Verify Email:</h2>
              <form onSubmit={OTPHandler} className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="font-normal text-sm leading-[1.4375em] box-border cursor-text inline-flex items-center w-full 
                relative text-white rounded-lg border border-[hsla(220,20%,25%,0.6)] bg-[#05080f] transition-[border] 
                duration-[120ms] ease-[ease-in] h-10 px-3 py-2 border-solid"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md"
                >
                  Verify
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center relative cursor-pointer select-none align-middle appearance-none 
                box-border font-medium text-sm leading-[1.75] min-w-[64px] w-full normal-case h-10 px-4 py-1.5 bg-white rounded-lg hover:bg-red-500 hover:text-white transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    );
  };
  
  export default Profile;
  