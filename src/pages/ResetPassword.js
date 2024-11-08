import React, { useEffect, useState } from "react";
import img from "../images/Group 1116602997.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'


const ResetPassword = () => {

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[showPassword,setShowPassword] = useState(false)
  const [error,setError] = useState({})
  const navigate = useNavigate();
  const location = useLocation()

  const { email } = location.state;

  

  const handleSubmit = async () => {

    if (newPassword === "") {
      setError({...error,newPasswordError:"Please Enter Your New Password"})
    }
    else if(confirmPassword === ""){
      setError({...error,confirmPassError:"Please Enter Your Confirm Password"})
    } 
    else {
      if (newPassword !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      setError({})
      try {
        const response = await axios.get(`https://l-backend-eg7s.onrender.com/data?email=${email}`);
  
        const result = await axios.get(`https://l-backend-eg7s.onrender.com/patientData?email=${email}`)
  
        const user = response.data[0];
        const patient = result.data[0]
        
        if (user) {
          await axios.put(`https://l-backend-eg7s.onrender.com/data/${user.id}`, {
            ...user,
            pass: newPassword,
            ConfirmPass:confirmPassword,
          });
          Swal.fire({
            title: 'success',
            text: 'Password Reset Successfull',
            icon: 'success',
            confirmButtonText: 'Save'
          }).then(()=>{
            navigate("/login")
          })
        }
        else if(patient){
          await axios.put(`https://l-backend-eg7s.onrender.com/patientData/${patient.id}`,{
            ...patient,
            pass: newPassword,
            ConfirmPass:confirmPassword
          })
          Swal.fire({
            title: 'success',
            text: 'Password Reset Successfull',
            icon: 'success',
            confirmButtonText: 'Save'
          }).then(()=>{
            navigate("/login")
          })
        }
        else {
          Swal.fire({
            title: "Error!",
            text: "User not found.",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      } catch (error) {
        console.error("Error updating password:", error);
      }
    }
    

    
  };

  return (
    <div>
      <div className="flex h-screen">
        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-[500px]">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Reset Password
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="new-password"
              >
                New Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="new-password"
                  type={showPassword?"text":"password"}
                  placeholder="Enter New Password"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline ${
                    error.newPasswordError
                        ? "border-red-500"
                        : newPassword
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }`} value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <i
                  className={`fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  } absolute right-3 top-3 text-gray-500 cursor-pointer`}
                  onClick={() => setShowPassword(!showPassword)}
                />
                <span className="text-red-500 font-semibold text-sm">{error.newPasswordError?error.newPasswordError:""}</span>
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="confirm-password"
                  type={showPassword?"text":"password"}
                  placeholder="Enter Confirm Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i
                  className={`fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  } absolute right-3 top-3 text-gray-500 cursor-pointer`}
                  onClick={() => setShowPassword(!showPassword)}
                />
                <span>{error.confirmPassError?error.confirmPassError:""}</span>
              </div>
            </div>
            <button
              className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={handleSubmit}
            >
              Reset Password
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-gray-50 flex items-center justify-center relative">
          <div className="text-center">
            <div className="mb-4">
              <img
                src={img}
                alt="Illustration of a person using medical technology"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
