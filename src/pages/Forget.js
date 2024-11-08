import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../images/Group 1116602997.png";

const Forget = () => {  

  let [email,setEmail] = useState('');
  let [otp,setOtp] = useState(null);
  let navigate = useNavigate()

  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(otp);
    alert(`Your OTP is: ${otp}`);

    setTimeout(() => {
      navigate("/otp", { state: { otp, email } });
    }, 0);
  };

  const submitData = (e) => {
    e.preventDefault(); 
      if (email) {
        generateOTP();
      } else {
        alert("Please enter a valid email.");
      }
    
    
  };

  return (
    <>
      <div>
        <div className="flex h-screen">
          <div className="w-1/2 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-auto">
              <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
              <p className="text-gray-600 mb-6">
                Enter your email and we’ll send you a otp to reset your
                password.
              </p>
              <form onSubmit={(e)=>submitData(e)}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Email or Phone*
                  </label>
                  <input
                    type="text" name="email" value={email}  
                    placeholder="Enter Email or Phone Number"
                    className="w-[500px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 font-semibold rounded-md hover:bg-blue-600"
                >
                  Get OTP
                </button>
              </form>
              <Link
                to={"/login"}
                className="inline-block font-semibold text-blue-500 hover:text-blue-800"
              >
                Back to Login
              </Link>{" "}
            </div>
          </div>
          <div className="w-1/2 bg-blue-50 flex items-center justify-center relative">
            <div className="text-center">
              <img
                src={img}
                alt="Illustration of a person using medical technology"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;
