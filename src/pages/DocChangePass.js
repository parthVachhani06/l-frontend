import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DocChangePass = () => {

  const [password, setPassword] = useState({});
  const [doctorData, setDoctorData] = useState([]);
  const [error, seterror] = useState({});

  const getValue = (e)=>{
    const name = e.target.name;
    const value= e.target.value;

    setPassword({...password,[name]:value});

    if(name === "pass"){
        if (value === "") {
            seterror({...error,passwodrError:"Enter Your Current Password"});
        } else {
            seterror({...error,passwodrError : ""})
        }
    }

    else if(name === "newPass"){
        if (value==="") {
            seterror({...error,newPassError:"Enter Your New Password"})
        } else {
            seterror({...error,newPassError:""})
        }
    }

    else if(name === "confirmPass"){
        if (value === "") {
            seterror({...error,confirmPassError:"Enter Your Confirm Password"})
        } else {
            seterror({...error,confirmPassError:""})
        }
    }
  }

  const handleSubmit =(e)=>{
    e.preventDefault();

    const userId = doctorData.find((v)=>v.pass === password.pass)

    if(password.pass === undefined){
        seterror({...error,passwodrError:"Enter Your Current Password"});
    }
    else if(password.newPass ===undefined){
        seterror({...error,newPassError:"Enter Your New Password"})
    }
    else if(password.confirmPass === undefined){
        seterror({...error,confirmPassError:"Enter Youre Confirm Password"})
    }
    else if(password.pass !== doctorData.pass){
        seterror({...error,passwodrError:"Current Paasword Is Not Match"});
    }
    else if(password.pass !== password.confirmPass){
        seterror({...error,passwodrError:"Confirm Paasword Is Not Match"});
    }
    else {
        try {

            const updatedUser = { ...userId, pass: password.newPass };
        
             axios.put(`https://l-backend-eg7s.onrender.com/doctor/${userId.id}`, updatedUser);
            
            alert('Password successfully updated!');
            seterror({});
          } catch (error) {
            console.error("Error updating password:", error);
          }
    }
  }

  useEffect(() => {
    const getAdminData = async () => {
      const res = await axios.get("https://l-backend-eg7s.onrender.com/doctor");
      setDoctorData(res.data);
    };
    getAdminData();
  }, []);


  return (
    <div>
      <div className="flex h-screen">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <div className="flex items-center">
            <img
              src="https://placehold.co/40x40"
              alt="Hospital Logo"
              className="w-10 h-10"
            />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-blue-600">Hospital</h1>
              <p className="text-sm text-gray-500">Tagline here</p>
            </div>
          </div>
        </div>
        <nav className="mt-10">
          <Link
            to={""}
            className="flex items-center py-2 px-6 bg-blue-50 text-blue-600 text-sm"
          >
            <i class="fa-solid fa-calendar-days mr-3"></i>
            Appointment Management
          </Link>
          <Link
            to={""}
            className="flex items-center py-2 px-6 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm"
          >
            <i class="fa-solid fa-clipboard mr-3"></i>
            Patient Record Access
          </Link>
          
          <div className="py-2 px-6 text-gray-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm">
              <i class="fa-solid fa-briefcase-medical mr-2"></i>
                Priscription Tools
              </div>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="ml-6 mt-2">
              <a
                href="#"
                className="block py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm"
              >
                Submenu 1
              </a>
              <a
                href="#"
                className="block py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm"
              >
                Submenu 2
              </a>
            </div>
          </div>
          <Link
            to={""}
            className="flex items-center py-2 px-6 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm"
          >
            <i class="fa-solid fa-phone mr-2"></i>
            Teleconsulation Module
          </Link>
          <a
            href="#"
            className="flex items-center py-2 px-6 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm"
          >
            <i class="fa-solid fa-message mr-2"></i>
            Chat
          </a>
        </nav>
        <div className="mt-auto p-6">
          <a
            href="#"
            className="flex items-center py-2 px-6 text-red-600 hover:bg-red-50"
          >
            <i className="fas fa-sign-out-alt mr-3"></i>
            Logout
          </a>
        </div>
      </aside>
        <main className="flex-1 bg-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div className="text-gray-600">
              <a href="#" className="text-gray-500">
                Profile Setting
              </a>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Quick Search"
                className="px-4 py-2 border rounded-md"
              />
              <i className="fas fa-search ml-2 text-gray-500"></i>
              <div className="ml-6 flex items-center">
                <img
                  src="https://placehold.co/40x40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-gray-700">Lincoln Philips</p>
                  <p className="text-sm text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">
              Profile Setting
            </h2>
            <div className="flex mt-6">
              <div className="w-1/3">
                <div className="flex flex-col items-center">
                  <img
                    src="https://placehold.co/100x100"
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full"
                  />
                  <h3 className="mt-4 text-xl font-semibold">
                    Lincoln Philips
                  </h3>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold">Menu</h4>
                  <ul className="mt-4">
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md">
                      <i className="fas fa-user"></i>
                      <Link to={"/doctor"} className="ml-3">
                        Profile
                      </Link>
                    </li>
                    <li className="flex items-center px-4 py-2 text-blue-600 bg-blue-100 rounded-md">
                      <i className="fas fa-lock"></i>
                      <Link to={"/docChangePass"} className="ml-3">
                        Change Password
                      </Link>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md">
                      <i className="fas fa-file-alt"></i>
                      <Link to={"/docTerms"} className="ml-3">
                        Terms & Condition
                      </Link>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md">
                      <i className="fas fa-shield-alt"></i>
                      <Link to={"/docPrivacy"} className="ml-3">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-2/3 ml-6">
                <h3 className="text-xl font-semibold">Change Password</h3>
                <p className="mt-2 text-gray-600">
                  To change your password, please fill in the fields below. Your
                  password must contain at least 8 characters, it must also
                  include at least one upper case letter, one lower case letter,
                  one number and one special character.
                </p>
                <form className="mt-6" onSubmit={(e)=>handleSubmit(e)}>
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        name="pass"
                        onChange={(e)=>getValue(e)}
                        placeholder="Enter Current Password"
                        className="w-full px-4 py-2 border rounded-md"
                      />
                      <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                      <span>{error.passwodrError?error.passwodrError:""}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">New Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        name="newPass"
                        onChange={(e)=>getValue(e)}
                        placeholder="Enter New Password"
                        className="w-full px-4 py-2 border rounded-md"
                      />
                      <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                      <span>{error.newPassError?error.newPassError:""}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        name="confirmPass"
                        onChange={(e)=>getValue(e)}
                        value={password.confirmPass?password.confirmPass:""}
                        placeholder="Enter Confirm Password"
                        className="w-full px-4 py-2 border rounded-md"
                      />
                      <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                      <span>{error.confirmPassError?error.confirmPassError:""}</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-md"
                  >
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocChangePass;
