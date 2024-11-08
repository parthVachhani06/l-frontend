import React from "react";
import img from "../images/Frame 1116602772.png"
import { Link } from "react-router-dom";

const TodayAppointment = () => {

    

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
        <main className="flex-1 p-6 bg-gray-50">
          <header className="flex items-center justify-between">
            <div className="flex items-center">
              <i className="fas fa-home text-gray-400"></i>
              <span className="mx-2 text-gray-400">/</span>
              <h2 className="text-lg font-medium text-gray-600">
                Appointment Management
              </h2>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Quick Search"
                className="px-4 py-2 border rounded-md"
              />
              <div className="ml-4 flex items-center">
                <img
                  src="https://placehold.co/40x40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-2">
                  <p className="text-sm font-medium text-gray-700">
                    Lincoln Philips
                  </p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </header>
          
          <div className="mt-6">
            <div className="flex items-center border-b">
              <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">
                Today Appointment
              </button>
              <button className="px-4 py-2 text-gray-600">
                Upcoming Appointment
              </button>
              <button className="px-4 py-2 text-gray-600">
                Previous Appointment
              </button>
              <button className="px-4 py-2 text-gray-600">
                Cancel Appointment
              </button>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <input
                type="text"
                placeholder="Search Patient"
                className="px-4 py-2 border rounded-md"
              />
              <div className="flex items-center">
                <button className="px-4 py-2 border rounded-md flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Any Date
                </button>
                <Link to={"/appoinment-timeslot"} className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md flex items-center">
                  <i className="fas fa-clock mr-2"></i>
                  Appointment Time Slot
                </Link>
              </div>
            </div>
            <div className="mt-6 bg-white shadow-md rounded-md">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="px-6 py-4">Patient Name</th>
                    <th className="px-6 py-4">Dieses Name</th>
                    <th className="px-6 py-4">Patient Issue</th>
                    <th className="px-6 py-4">Appointment Date</th>
                    <th className="px-6 py-4">Appointment Time</th>
                    <th className="px-6 py-4">Appointment Type</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={img}
                          alt="No Appointments Illustration"
                          className="w-48 h-48"
                        />
                        <p className="mt-4 text-gray-600">
                          No Today Appointment Found Yet
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TodayAppointment;
