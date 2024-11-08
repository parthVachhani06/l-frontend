import React, { useEffect, useState } from "react";
import img from "../images/Group 1116603021.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  let [loginUser, setLoginUer] = useState({});
  let [registerUser, setRegisterUser] = useState([]);
  let [doctorData,setDoctorData] = useState([])
  let [patientUser, setPatientUser] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  let [error,setError] = useState({})
  let navigate = useNavigate();

  const getValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLoginUer({ ...loginUser, [name]: value });

        
    if(name === "email"){
        if(value === ""){
            setError({...error,emailError:"Enter Your Email Or Phone-Number"})
        }
        else{
            setError({...error,emailError:""})
        }
    }
    else if(name=== "pass"){
        if(value === ""){
            setError({...error,passError:"Enter Your Password"})
        }
        else{
            setError({...error,passError:""})
        }
    }
  };

  useEffect(() => {
    getPatientData();
    getDoctor()
    getRegisterUser();
  }, []);
  console.log(registerUser);

  const getRegisterUser = async () => {
    const res = await axios.get("https://l-backend-eg7s.onrender.com/data");
    setRegisterUser(res.data);
  };

  const getPatientData = async () => {
    const response = await axios.get("https://l-backend-eg7s.onrender.com/patientData");
    setPatientUser(response.data);
  };

  const getDoctor = async ()=>{
    const result = await axios.get("https://l-backend-eg7s.onrender.com/doctor")
    setDoctorData(result.data)
  }

  const submitUser = (e) => {
    e.preventDefault()
    if (loginUser.email === undefined) {
        setError({...error,emailError:"Enter Your Email Or Phone-Number"})
    } 
    else if(loginUser.pass === undefined){
        setError({...error,passError:"Enter Your Password"})
    }
    else {
        const user = registerUser.find((v) => v.email === loginUser.email && v.pass === loginUser.pass);
          const doctor = doctorData.find((v)=>v.email === loginUser.email && v.pass === loginUser.pass)
          const patient = patientUser.find((v) => v.email === loginUser.email && v.pass === loginUser.pass);

          if (user) {
            axios.post("https://l-backend-eg7s.onrender.com/loginUser", loginUser);
            toast.success("Login SuccessFull",{
              position:"top-center",
              autoClose:2500
            })
            setTimeout(()=>{
              navigate("/dashboard", { state: { user } });
            },3000)
            setLoginUer({})
          } 
          else if(doctor){
            toast.success("Login SuccessFull",{
              position:"top-center",
              autoClose:2500
            })
            setTimeout(() => {
              navigate("/doctor",{state:{doctor}})
            }, 3000);
            setLoginUer({})
          }
          else if (patient) {
            toast.success("Login SuccessFull",{
              position:"top-center",
              autoClose:2500
            })
            setTimeout(()=>{
              navigate("/patientDetails")
            },3000)
          }
          else{
              toast.error("Email Or Password In Not Match",{
                position:"top-center"
              })
          } 
        }
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-[600px]">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <form method="post" onSubmit={(e) => submitUser(e)}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email or Phone<span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline ${
                    error.emailError
                        ? "border-red-500"      
                        : loginUser.email
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }`}
                  id="email"
                  type="text"
                  value={loginUser.email?loginUser.email:""}
                  placeholder="Enter Email or Phone Number"
                  onChange={(e) => getValue(e)}
                />
                <span className="text-red-500 font-semibold inline-block">{error.emailError?error.emailError:""}</span>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    name="pass"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline ${
                        error.passError
                        ? "border-red-500"
                        : loginUser.pass
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }`}
                    id="password"
                    value={loginUser.pass?loginUser.pass:""}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    onChange={(e) => getValue(e)}
                  />
                  <i
                  className={`fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  } absolute right-3 top-3 text-gray-500 cursor-pointer`}
                  onClick={() => setShowPassword(!showPassword)}
                />
                  <span className="text-red-500 font-semibold">{error.passError?error.passError:""}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-sm">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <Link
                  to={"/forgetPass"}
                  className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800"
                >
                  Forgot password ?
                </Link>
              </div>
              <div className="mb-4">
                <button
                  className="w-full bg-blue-500 font-semibold text-white py-2 rounded-md hover:bg-blue-600"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="text-center">
                <span className="text-gray-700">Don’t have an account ? </span>
                <Link
                  to={"/"}
                  className="font-semibold text-blue-500 hover:text-blue-800"
                >
                  Registration
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 bg-blue-50 flex items-center justify-center relative">
          <div className="text-center">
            <img
              src={img}
              alt="Illustration of a doctor with medical icons"
              className="mb-6"
            />
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              Hospital
            </h1>
            <p className="text-gray-600 mb-4">
              You Can stay your Hospital and Contact With Your Facility
            </p>
            <div className="flex justify-center">
              <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Login;
