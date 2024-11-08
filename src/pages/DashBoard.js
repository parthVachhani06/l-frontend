import React, { useEffect, useState } from "react";
import "../style/dashboard.css";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const location = useLocation();
  const loggedInUser = location.state?.user;
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/edit", { state: { user: loggedInUser } });
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
          <Link
            to={"/dashboard"}
            className="flex items-center py-2 px-6 bg-blue-50 text-blue-600"
          >
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </Link>
          <Link
            to={"/doctorMangement"}
            className="flex items-center py-2 px-6 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          >
            <i className="fas fa-user-md mr-3"></i>
            Doctor Management
          </Link>
          <Link
            to={"/patientManagement"}
            className="flex items-center py-2 px-6 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          >
            <i className="fas fa-users mr-3"></i>
            Patient Management
          </Link>
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
          <div className="flex mt-6">
            <div className="w-1/3">
              <div className="flex flex-col items-center">
                <img
                  src="https://placehold.co/100x100"
                  alt="Profile Picture"
                  className="w-24 h-24 rounded-full"
                />
                <h3 className="mt-4 text-xl font-semibold">Lincoln Philips</h3>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold">Menu</h4>
                <ul className="mt-4">
                  <li className="flex items-center px-4 py-2 bg-blue-100  text-blue-600 rounded-md">
                    <i className="fas fa-user"></i>
                    <Link to={"/dashboard"} className="ml-3">
                      Profile
                    </Link>
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-blue-100 hover:text-blue-600 text-gray-700  rounded-md">
                    <i className="fas fa-lock"></i>
                    <Link to={"/changePass"} className="ml-3">
                      Change Password
                    </Link>
                  </li>
                  <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
                    <i className="fas fa-file-alt"></i>
                    <Link to={"/terms"} className="ml-3">
                      Terms & Condition
                    </Link>
                  </li>
                  <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
                    <i className="fas fa-shield-alt"></i>
                    <Link to={"/privacy"} className="ml-3">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-2/3 ">
              <h3 className="text-lg font-bold">Profile</h3>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div>
                  <label className="block text-gray-600">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={loggedInUser?.FirstName}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={loggedInUser?.LastName}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={loggedInUser?.email}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={loggedInUser?.number}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    Hospital Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={loggedInUser?.Hospital}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={loggedInUser?.Gender}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    City<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={loggedInUser?.City}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    State<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={loggedInUser?.State}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={loggedInUser?.Country}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleEditProfile}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
