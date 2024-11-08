import React, { useEffect, useState } from "react";
import img from "../images/Frame 1116602772.png";
import { Link } from "react-router-dom";
import axios from "axios";

const DoctorManagement = () => {
  const [doctData, setDoctData] = useState([]);

  useEffect(() => {
    const getDocData = async () => {
      const response = await axios.get("https://l-backend-eg7s.onrender.com/doctor");
      setDoctData(response.data);
    };
    getDocData();
  }, []);

  console.log(doctData);

  return (
    <div>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/5 bg-white shadow-md">
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
                className="flex items-center py-2 px-6 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                <i className="fas fa-tachometer-alt mr-3"></i>
                Dashboard
              </Link>
              <Link
                to={"/doctorMangement"}
                className="flex items-center py-2 px-6 bg-blue-50 text-blue-600"
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
        </div>
        {/* Main Content */}
        <div className="w-4/5 p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-500">
              <i className="fas fa-home mr-2"></i>
              <span>Doctor Management</span>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Quick Search"
                className="border rounded-lg px-4 py-2 mr-4"
              />

              <div className="ml-4 flex items-center">
                <img
                  src="https://placehold.co/40x40"
                  alt="Admin Avatar"
                  className="rounded-full mr-2"
                />
                <div>
                  <p className="text-gray-700">Lincoln Philips</p>
                  <p className="text-gray-500 text-sm">Admin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Doctor Management</h2>
              <div className="flex">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Patient"
                    className="border rounded-lg px-4 py-2"
                  />
                  <button className="absolute right-2 top-2 text-gray-500">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg inline-block">
                  <i className="fas fa-plus mr-2"></i>
                  <Link to={"/addDoc"}>Add New Doctor</Link>
                </button>
              </div>
            </div>
            <table className="w-full text-center">
              <thead>
                <tr className="bg-[#F6F8FB]">
                  <th className="pb-4">Doctor Name</th>
                  <th className="pb-4">Gender</th>
                  <th className="pb-4">Qualification</th>
                  <th className="pb-4">Specialty</th>
                  <th className="pb-4">Working Time</th>
                  <th className="pb-4">Patient Check Up Time</th>
                  <th className="pb-4">Break Time</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {doctData.map((v, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2 flex items-center">
                      <img
                        src="https://placehold.co/40x40"
                        alt="Doctor profile picture"
                        className="rounded-full mr-2"
                      />
                      {v.name}
                    </td>
                    <td className="py-2">
                      <i
                        className={`fas fa-${
                          v.gender === "Male" ? "mars" : "venus"
                        } text-blue-500`}
                      ></i>
                    </td>
                    <td className="py-2">{v.quali}</td>
                    <td className="py-2">{v.Specialty_type}</td>
                    <td className="py-2  text-[#718EBF]">
                      <span className="bg-[#F6F8FB] py-2 px-5  inline-block">
                        {v.working_time}
                      </span>
                    </td>
                    <td className="py-2 text-[#718EBF]">
                      <span className="bg-[#F6F8FB] py-2 px-5 ">
                        {v.checktime}
                      </span>
                    </td>
                    <td className="py-2 text-[#718EBF]">
                      <span className="bg-[#F6F8FB] py-2 px-5">
                        {v.break_time}
                      </span>
                    </td>
                    <td className="py-2 flex items-center">
                      <button className="text-green-500 mr-2">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="text-red-500">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorManagement;
