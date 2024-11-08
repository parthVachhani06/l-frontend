import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditProfile = () => {
  const location = useLocation();
  const loggedInUser = location.state?.user;
  const [userData, setUserData] = useState({
    FirstName: loggedInUser?.FirstName || "",
    LastName: loggedInUser?.LastName || "",
    email: loggedInUser?.email || "",
    number: loggedInUser?.number || "",
    Hospital: loggedInUser?.Hospital || "",
    Gender: loggedInUser?.Gender || "",
    City: loggedInUser?.City || "",
    State: loggedInUser?.State || "",
    Country: loggedInUser?.Country || "",
    pass : loggedInUser?.pass,
    ConfirmPass : loggedInUser?.ConfirmPass
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const id = loggedInUser.id; 
      const response = await axios.put(`https://l-backend-eg7s.onrender.com/data/${id}`, userData);
      console.log("Updated User Data:", response.data);
     alert("Profile updated successfully!");
  };

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
        <a
          href="#"
          className="flex items-center py-2 px-6 bg-blue-50 text-blue-600"
        >
          <i className="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-6 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
        >
          <i className="fas fa-user-md mr-3"></i>
          Doctor Management
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-6 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
        >
          <i className="fas fa-users mr-3"></i>
          Patient Management
        </a>
        <div className="py-2 px-6 text-gray-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <i className="fas fa-file-invoice-dollar mr-3"></i>
              Billing And Payments
            </div>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="ml-6 mt-2">
            <a
              href="#"
              className="block py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            >
              Submenu 1
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            >
              Submenu 2
            </a>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center py-2 px-6 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
        >
          <i className="fas fa-chart-line mr-3"></i>
          Reporting And Analytics
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
                  {loggedInUser?.FirstName} {loggedInUser?.LastName}
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
                  {loggedInUser?.FirstName} {loggedInUser?.LastName}
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
                      name="FirstName"
                      value={userData.FirstName}
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
                      value={userData.LastName}
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
                      value={userData.email}
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
                      value={userData.number}
                      onChange={(e) => handleChange(e)}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600">
                      Hospital Name<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="Hospital"
                      value={userData.Hospital}
                      onChange={(e) => handleChange(e)}
                      className="w-full px-4 py-2 border rounded-md">
                      <option value="">Select Hospital</option>
                      <option value="Kiraan Hospitaal">Kiraan Hospital</option>
                      <option value="Apolo Hospital">Apolo Hospital</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600">
                      Gender<span className="text-red-500">*</span>
                    </label>
                    <select
                     name="Gender"
                     value={userData.Gender}
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
                     name="City"
                     value={userData.City}
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
                     name="State"
                     value={userData.State}
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
                     name="Country"
                     value={userData.Country}
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
  );
};

export default EditProfile;
