import React, { useState } from "react";
import img from "../images/Group 1116603021.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Patient = () => {
    
    const [patientData,setPatientData]= useState({})
    const [showPassword, setShowPassword] = useState(false);
    const [error,setError] = useState({})
    const [isChecked,setIsChecked] = useState()
    const navigate = useNavigate()

    const emailFormula = /\S+@\S+\.\S+/;
    const numberFormula = /^\d{10}$/;
    const passFormula =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const getPatientValue = (e)=>{
    const  name = e.target.name;
    const value = e.target.value;
    const isChecked = e.target.checked

    setIsChecked(isChecked)

    setPatientData({...patientData,[name]:value});

    if(name === "firstName"){
      if (value === "") {
        setError({...error,firstNameError : "Enter Your Fisrt Name"})
      } else {
        setError({...error,firstNameError : ""})
      }
    }
    else if(name === "lastName"){
      if (value === "") {
        setError({...error,lastNameError : "Enter Your Last Name"})
      } else {
        setError({...error,lastNameError : ""})
      }
    }
    else if(name === "email"){
      if (value === "") {
        setError({...error,emailError : "Enter Your Email"})
      }else if(!emailFormula.test(value)){
        setError({...error,emailError : "Email Is Invalid"})
      } else {
        setError({...error,emailError: ""})
      }
    }
    else if(name === "number"){
      if (value === "") {
        setError({...error,numberError : "Enter Your Phone Number"})
      } else if(!numberFormula.test(value)){
        setError({...error,numberError : "Phone Number Digit Must be Only 10"})
      } else {
        setError({...error,numberError : ""})
      }
    }
    else if(name === "age"){
      if (value === "") {
        setError({...error,ageError : "Enter Your Age"})
      } else {
        setError({...error,ageError : ""})
      }
    }
    else if(name === "height"){
      if (value === "") {
        setError({...error,heightError : "Enter Your Height"})
      } else {
        setError({...error,heightError : ""})
      }
    }
    else if(name === "weight"){
      if (value === "") {
        setError({...error,weightError : "Enter Your Weight"})
      } else {
        setError({...error,weightError : ""})
      }
    }
    else if(name === "gender"){
      if (value === "") {
        setError({...error,genderError : "Select Your Gender"})
      } else {
        setError({...error,genderError : ""})
      }
    }
    else if(name === "bloodgroup"){
      if (value === "") {
        setError({...error,bloodgroupError : "Select Your Bloodgroup"})
      } else {
        setError({...error,bloodgroupError : ""})
      }
    }
    else if(name === "dob"){
      if (value === "") {
        setError({...error,dobError : "Enter Your Date Of Birth"})
      } else {
        setError({...error,dobError : ""})
      }
    }
    else if(name === "country"){
      if (value === "") {
        setError({...error,countryError : "Select Your Country"})
      } else {
        setError({...error,countryError : ""})
      }
    }
    else if(name === "state"){
      if (value === "") {
        setError({...error,stateError : "Select Your State"})
      } else {
        setError({...error,stateError : ""})
      }
    }
    else if(name === "city"){
      if (value === "") {
        setError({...error,cityError : "Select Your City"})
      } else {
        setError({...error,cityError : ""})
      }
    }
    else if(name === "add"){
      if (value === "") {
        setError({...error,addError : "Enter Your Address"})
      } else {
        setError({...error,addError : ""})
      }
    }
    else if(name === "pass"){
      if (value === "") {
        setError({...error,passError : "Enter Your Address"})
      } else if(!passFormula.test(value)){
        setError({...error,passError:"Password must be at least 8 characters, contain one uppercase letter, one lowercase letter, one number, and one special character"})
      } else {
        setError({...error,passError : ""})
        setPatientData({...patientData,pass:value})
      }
    }
    else if(name === "confirmPass"){
      if (value === "") {
        setError({...error,confirmPassError : "Enter Your Confirm Password"})
      } 
      else if(value !== patientData.pass){
        setError({...error,confirmPassError : "Confirm Password Does Not Match" })
      }
      else {
        setError({...error,confirmPassError : ""})
      }
    }
    else if(name === "terms"){
      if(!isChecked){
        setError({...error, checkedError:"Please Agree Terms And Conditions"})
      }
      else{
        setError({...error,checkedError:""})
      }
    }
  }

  const submitData = (e)=>{
    e.preventDefault()
    if (patientData.firstName === undefined) {
        setError({...error,firstNameError : "Enter Your Fisrt Name"})
    } 
    else if(patientData.lastName === undefined){
      setError({...error,lastNameError : "Enter Your Last Name"})
    } 
    else if(patientData.email === undefined){
      setError({...error,emailError : "Enter Your Email"})
    }
    else if(!emailFormula.test(patientData.email)){
      setError({...error,emailError : "Email Is Invalid"})
    }
    else if(patientData.number === undefined){
      setError({...error,numberError : "Enter Your Phone Number"})
    }
    else if(!numberFormula.test(patientData.number)){
      setError({...error,numberError : "Phone Number Digit Must be Only 10"})
    }
    else if(patientData.age === undefined){
      setError({...error,ageError : "Enter Your Age"})
    }
    else if(patientData.height === undefined){
      setError({...error,heightError : "Enter Your Height"})
    }
    else if(patientData.weight === undefined){
      setError({...error,weightError : "Enter Your Weight" })
    }
    else if(patientData.gender === undefined){
      setError({...error,genderError : "Select Your Gender" })
    }
    else if(patientData.bloodgroup===undefined){
      setError({...error,bloodgroupError : "Select Your Blood Group" })
    }
    else if(patientData.dob === undefined){
      setError({...error,dobError : "Enter Your Date Of Birth" })
    }
    else if(patientData.country === undefined){
      setError({...error,countryError : "Select Your Country" })
    }
    else if(patientData.state === undefined){
      setError({...error,stateError : "Select Your State" })
    }
    else if(patientData.city === undefined){
      setError({...error,cityError : "Select Your City" })
    }
    else if(patientData.add === undefined){
      setError({...error,addError : "Enter Your Address" })
    }
    else if(patientData.pass === undefined){
      setError({...error,passError : "Enter Your Password" })
    }
    else if(!passFormula.test(patientData.pass)){
      setError({...error,passError:"Password must be at least 8 characters, contain one uppercase letter, one lowercase letter, one number, and one special character"})
    }
    else if(patientData.confirmPass === undefined){
      setError({...error,confirmPassError : "Enter Your Confirm Password" })
    }
    else if(patientData.pass !== patientData.confirmPass){
      setError({...error,confirmPassError : "Confirm Password Does Not Match" })
    }
    else if(!isChecked){
      setError({...error, checkedError:"Please Agree Terms And Conditions"})
    }
    else {
      try{
        axios.post("https://l-backend-eg7s.onrender.com/patientData",patientData )
        toast.success("Patient Registration Successfull", {
          position: "top-center",
          autoClose: 3500
        });
        setTimeout(() => {
          navigate("/login")
        }, 3000);
        
        setPatientData({})
        setError({})
      }
      catch(err){
        console.log(err)
      }
    }
    
  }

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-8 w-full flex">
          <div className="w-1/2 pr-8">
            <h2 className="text-2xl font-semibold mb-6">Registration</h2>
            <form className="space-y-4" onSubmit={(e)=>submitData(e)}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={patientData.firstName?patientData.firstName:""}
                    placeholder="Enter First Name"
                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                      ${error.firstNameError ? "border-red-500":patientData.firstName?"border-green-500":"focus:outline-none"}`}
                    onChange={(e)=>getPatientValue(e)}
                  />
                  <span className="text-red-500 font-semibold">{error.firstNameError?error.firstNameError:""}</span>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Last Name<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={patientData.lastName?patientData.lastName:""}
                    placeholder="Enter Last Name"
                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 
                      ${error.lastNameError ? "border-red-500":patientData.lastName?"border-green-500":"focus:outline-none"}`}
                    onChange={(e)=>getPatientValue(e)}
                  />
                  <span className="text-red-500 font-semibold">{error.lastNameError?error.lastNameError:""}</span>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Email Address<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={patientData.email?patientData.email:""}
                    placeholder="Enter Email Address"
                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 
                      ${error.emailError ? "border-red-500":patientData.email?"border-green-500":"focus:outline-none"}`}
                    onChange={(e)=>getPatientValue(e)}
                  />
                  <span className="text-red-500 font-semibold">{error.emailError?error.emailError:""}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="number"
                    value={patientData.number?patientData.number:""}
                    placeholder="Enter Phone Number"
                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                      ${error.numberError ? "border-red-500":patientData.number?"border-green-500":"focus:outline-none"}`}
                    onChange={(e)=>getPatientValue(e)}
                  />
                  <span className="text-red-500 font-semibold">{error.numberError?error.numberError:""}</span>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Age<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={patientData.age?patientData.age:""}
                    placeholder="Enter Age"
                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                      ${error.ageError ? "border-red-500":patientData.age?"border-green-500":"focus:outline-none"}`}
                    onChange={(e)=>getPatientValue(e)}
                  />
                  <span className="text-red-500 font-semibold">{error.ageError?error.ageError:""}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Height (cm)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={patientData.height?patientData.height:""}
                    placeholder="Enter Height"
                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                      ${error.heightError ? "border-red-500":patientData.height?"border-green-500":"focus:outline-none"}`}
                    onChange={(e)=>getPatientValue(e)}
                  />
                  <span className="text-red-500 font-semibold">{error.heightError?error.heightError:""}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Weight (Kg)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={patientData.weight?patientData.weight:""}
                    placeholder="Enter Weight"
                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                      ${error.weightError ? "border-red-500":patientData.weight?"border-green-500":"focus:outline-none"}`}
                    onChange={(e)=>getPatientValue(e)}
                  />
                  <span className="text-red-500 font-semibold">{error.weightError?error.weightError:""}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <select name="gender" value={patientData.gender?patientData.gender:""} onChange={(e)=>getPatientValue(e)} className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                    ${error.genderError ? "border-red-500":patientData.gender?"border-green-500":"focus:outline-none"}`}>
                    <option>Select Gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"other"}>Other</option>
                  </select>
                  <span className="text-red-500 font-semibold">{error.genderError?error.genderError:""}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Blood Group<span className="text-red-500">*</span>
                  </label>
                  <select name="bloodgroup" value={patientData.bloodgroup?patientData.bloodgroup:""} onChange={(e)=>getPatientValue(e)} className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                    ${error.bloodgroupError ? "border-red-500":patientData.bloodgroup?"border-green-500":"focus:outline-none"}`}>
                    <option>Select Group</option>
                    <option value={"A+"}>A+</option>
                    <option value={"A-"}>A</option>
                    <option value={"B+"}>B+</option>
                    <option value={"B-"}>B-</option>
                    <option value={"AB+"}>AB+</option>
                    <option value={"AB-"}>AB-</option>
                    <option value={"O+"}>O+</option>
                    <option value={"O-"}>O-</option>
                  </select>
                  <span className="text-red-500 font-semibold" >{error.bloodgroupError?error.bloodgroupError:""}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={patientData.dob?patientData.dob:""}
                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                      ${error.dobError ? "border-red-500":patientData.dob?"border-green-500":"focus:outline-none"}`}
                    onChange={(e)=>getPatientValue(e)}
                  />
                  <span className="text-red-500 font-semibold">{error.dobError?error.dobError:""}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <select name="country" value={patientData.country?patientData.country:""} onChange={(e)=>getPatientValue(e)} className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                    ${error.countryError ? "border-red-500":patientData.country?"border-green-500":"focus:outline-none"}`}>
                    <option>Select Country</option>
                    <option value={"India"}>India</option>
                  </select>
                  <span className="text-red-500 font-semibold">{error.countryError?error.countryError:""}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    State<span className="text-red-500">*</span>
                  </label>
                  <select name="state" value={patientData.state?patientData.state:""} onChange={(e)=>getPatientValue(e)} className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                    ${error.stateError ? "border-red-500":patientData.state?"border-green-500":"focus:outline-none"}`}>
                    <option>Select State</option>
                    <option value={"gujarat"}>Gujarat</option>
                  </select>
                  <span className="text-red-500 font-semibold">{error.stateError?error.stateError:""}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City<span className="text-red-500">*</span>
                  </label>
                  <select name="city" value={patientData.city?patientData.city:""} onChange={(e)=>getPatientValue(e)} className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                    ${error.cityError ? "border-red-500":patientData.city?"border-green-500":"focus:outline-none"}`}>
                    <option>Select City</option>
                    <option value={"Surat"}>Surat</option>
                  </select>
                  <span className="text-red-500 font-semibold">{error.cityError?error.cityError:""}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="add"
                  value={patientData.add?patientData.add:""}
                  placeholder="Enter Address"
                  className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
                    ${error.addError ? "border-red-500":patientData.add?"border-green-500":"focus:outline-none"}`}
                  onChange={(e)=>getPatientValue(e)}
                />
                <span className="text-red-500 font-semibold">{error.addError?error.addError:""}</span>
              </div>
              <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  name="pass"
                  value={patientData.pass?patientData.pass:""}
                  className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${error.passError ? "border-red-500":patientData.pass?"border-green-500":"focus:outline-none"}`}
                  onChange={(e)=>getPatientValue(e)}
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
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                 type={showPassword ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  name="confirmPass"
                  value={patientData.confirmPass?patientData.confirmPass:""}
                  className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${error.confirmPassError ? "border-red-500":patientData.confirmPass?"border-green-500":"focus:outline-none"}`}
                  onChange={(e)=>getPatientValue(e)}
                />
                <i              
                  className={`fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  } absolute right-3 top-3 text-gray-500 cursor-pointer`}
                  onClick={() => setShowPassword(!showPassword)}
                />
                <span className="text-red-500 font-semibold">{error.confirmPassError?error.confirmPassError:""}</span>
              </div>
              
            </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  onChange={(e)=>getPatientValue(e)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label class="ml-2 block text-sm text-gray-900">
                  I agree to all the{" "}
                  <a href="#" className="text-blue-600">
                    T&C
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600">
                    Privacy Policies
                  </a>
                  .
                </label><br/>
                <span className="text-red-500 font-semibold">{error.checkedError?error.checkedError:""}</span>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Register
              </button>
              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <Link to={"/login"} className="text-blue-600">
                  Login
                </Link>
              </p>
            </form>
            <Link 
              to={"/"}
              className="w-full bg-blue-500 text-white py-4 px-3 rounded-md hover:bg-blue-600"
            >
              Admin Register  
            </Link>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="text-center">
              <img
                src={img}
                alt="Illustration of a doctor with medical icons"
                className="mb-4"
              />
              <h2 className="text-2xl font-semibold">Hospital</h2>
              <p className="text-gray-600">
                You Can stay your Hospital and Contact With Your Facility
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Patient;
