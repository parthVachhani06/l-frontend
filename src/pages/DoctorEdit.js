import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

const DoctorEdit = () => {

    const [hospitalData,setHospitalData] = useState([])

    const location = useLocation();
    const loggedInDoctor = location.state?.user;
    const [doctorData,setDoctorData]= useState({...loggedInDoctor,
        name : loggedInDoctor?.name||"",
        email : loggedInDoctor?.email||"",
        number : loggedInDoctor?.number||"",
        hospitalname : loggedInDoctor?.hospitalname||"",
        gender : loggedInDoctor?.gender||"",
        city : loggedInDoctor?.city||"",
        state : loggedInDoctor?.state||"",
        country : loggedInDoctor?.country||"",
    })

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setDoctorData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const id = loggedInDoctor.id; 
      const response = await axios.put(`https://l-backend-eg7s.onrender.com/doctor/${id}`, doctorData);
      toast.success("Profile Update Successfull",{
        position:"top-center",
        autoClose:1000
      })
    }

    useEffect(()=>{
       const getHospital = async ()=>{
            const res = await axios.get("https://l-backend-eg7s.onrender.com/hopital")
            setHospitalData(res.data)
        }
        getHospital()
    })

  return (
    <div className="min-h-screen bg-gray-100 flex">
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
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <div className="text-gray-600">
            <a href="#" className="text-gray-600">
              Profile Setting
            </a>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Quick Search"
              className="px-4 py-2 border rounded-md"
            />
            <i className="fas fa-search ml-2 text-gray-600"></i>
            <i className="fas fa-bell ml-6 text-gray-600"></i>
            <div className="ml-6 flex items-center">
              <img
                src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <p className="text-gray-600">
                  
                </p>
                <p className="text-sm text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-600">Profile Setting</h2>
          <div className="flex mt-6 items-center">
            <div className="w-1/3">
              <div className="flex flex-col items-center">
                <img
                  src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                  alt="Profile Picture"
                  className="w-48 h-48 rounded-full object-cover"
                />
                <h3 className="mt-4 text-xl font-bold">
                  
                </h3>
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-lg font-bold">Change Profile</h4>
                
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="text-lg font-bold">Profile</h3>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-600">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={doctorData.name}
                      onChange={(e) => handleChange(e)}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="LastName"
                      
                      onChange={(e) => handleChange(e)}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600">
                      Email Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={doctorData.email}
                      onChange={(e) => handleChange(e)}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600">
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={doctorData.number}
                      onChange={(e) => handleChange(e)}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600">
                      Hospital Name<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="hospitalname"
                      value={doctorData.hospitalname}
                      onChange={(e) => handleChange(e)}
                      className="w-full px-4 py-2 border rounded-md">
                      <option value="">Select Hospital</option>
                      {hospitalData.map((v,i)=>{
                        return(
                            <>
                                <option value={v.hospitalName}>{v.hospitalName}</option>
                            </>
                        )
                      })}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600">
                      Gender<span className="text-red-500">*</span>
                    </label>
                    <select
                     name="gender"
                     value={doctorData.gender}
                     onChange={(e) => handleChange(e)}
                     className="w-full px-4 py-2 border rounded-md">
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600">
                      City<span className="text-red-500">*</span>
                    </label>
                    <select
                     name="city"
                     value={doctorData.city}
                     onChange={(e) => handleChange(e)}
                     className="w-full px-4 py-2 border rounded-md">
                      <option value="">Select City</option>
                      <option value="Surat">Surat</option>
                      <option value="Vadodara">Vadodara</option>
                      <option value="Rajkot">Rajkot</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600">
                      State<span className="text-red-500">*</span>
                    </label>
                    <select
                     name="state"
                     value={doctorData.state}
                     onChange={(e) => handleChange(e)}
                     className="w-full px-4 py-2 border rounded-md">
                      <option value="">Select State</option>
                      <option value="GUJARAT">Gujarat</option>
                      <option value="Rajsthan">Rajsthan</option>
                      <option value="Hariyana">Hariyana</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600">
                      Country<span className="text-red-500">*</span>
                    </label>
                    <select
                     name="country"
                     value={doctorData.country}
                     onChange={(e) => handleChange(e)}
                     className="w-full px-4 py-2 border rounded-md">
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="America">America</option>
                      <option value="England">England</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DoctorEdit
