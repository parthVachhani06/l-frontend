import React from 'react'
import { Link } from 'react-router-dom'

const PatientManagement = () => {
  return (
    <div>
      <div className="flex">
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
            className="flex items-center py-2 px-6 "
          >
            <i className="fas fa-tachometer-alt mr-3 text-gray-600  hover:bg-blue-50 hover:text-blue-600"></i>
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
            className="flex items-center py-2 px-6 bg-blue-50 text-blue-600"
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
                    <main className="flex-1 p-6 max-w-[1100px] ml-auto">
                        <header className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Patient Management</h2>
                            <div className="flex items-center">
                                <input type="text" placeholder="Quick Search" className="p-2 border rounded mr-4"/>
                                <select className="p-2 border rounded mr-4">
                                    <option>All</option>
                                </select>
                                <div className="flex items-center">
                                    <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full mr-2"/>
                                    <div>
                                        <p className="font-bold">Lincoln Philips</p>
                                        <p className="text-sm text-gray-500">Admin</p>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="bg-white p-6 rounded shadow-md">
                            <div className="flex justify-between items-center border-b pb-4 mb-4">
                                <h3 className="text-xl font-bold">Today Appointment</h3>
                                <input type="text" placeholder="Search Patient" className="p-2 border rounded"/>
                            </div>
                            <table className="w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="pb-4">Patient Name</th>
                                        <th className="pb-4">Patient Issue</th>
                                        <th className="pb-4">Doctor Name</th>
                                        <th className="pb-4">Dieses Name</th>
                                        <th className="pb-4">Appointment Time</th>
                                        <th className="pb-4">Appointment Type</th>
                                        <th className="pb-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: "Marcus Philips", issue: "Stomach Ache", doctor: "Dr. Mathew Best", disease: "Viral Infection", time: "4:30 PM", type: "Online" },
                                        { name: "London Shaffer", issue: "Feeling Tired", doctor: "Dr. Annabella Porter", disease: "Blood Pressure", time: "5:00 AM", type: "Onsite" },
                                        { name: "Leslie Mccray", issue: "Dizziness", doctor: "Dr. Yaretzi Bright", disease: "Diabetes", time: "7:30 PM", type: "Online" },
                                        { name: "Daniela Cash", issue: "Neck Pain", doctor: "Dr. Layla Pollard", disease: "Neck Pain", time: "6:00 AM", type: "Onsite" },
                                        { name: "Olive Valencia", issue: "Headache", doctor: "Dr. Tessa Lee", disease: "Headache", time: "3:30 PM", type: "Online" },
                                        { name: "Rowen Floyd", issue: "Fever", doctor: "Dr. Winter Strong", disease: "Fever", time: "2:00 AM", type: "Onsite" },
                                        { name: "Gaige Castillo", issue: "Fever", doctor: "Dr. Yusuf Mercado", disease: "Viral Infection", time: "1:30 PM", type: "Onsite" },
                                        { name: "Kayla Maddox", issue: "Feeling Tired", doctor: "Dr. Titan Grant", disease: "Blood Pressure", time: "5:00 AM", type: "Online" },
                                        { name: "Trenton Mejia", issue: "Fever", doctor: "Dr. Keenan Tucker", disease: "Viral Infection", time: "4:30 PM", type: "Online" },
                                        { name: "Julianna Warren", issue: "Headache", doctor: "Dr. Ari Bullock", disease: "Headache", time: "6:00 AM", type: "Onsite" },
                                        { name: "Giuliana Estes", issue: "Fever", doctor: "Dr. Bryleigh Terrell", disease: "Viral Infection", time: "7:30 PM", type: "Online" }
                                    ].map((appointment, index) => (
                                        <tr key={index} className="border-t">
                                            <td className="py-4 flex items-center">
                                                <img src="https://placehold.co/40x40" alt="Patient Avatar" className="rounded-full mr-2"/>
                                                {appointment.name}
                                            </td>
                                            <td className="py-4">{appointment.issue}</td>
                                            <td className="py-4">{appointment.doctor}</td>
                                            <td className="py-4">{appointment.disease}</td>
                                            <td className="py-4">{appointment.time}</td>
                                            <td className="py-4">
                                                <span className={`px-2 py-1 rounded ${appointment.type === "Online" ? "bg-yellow-100 text-yellow-600" : "bg-purple-100 text-purple-600"}`}>
                                                    {appointment.type}
                                                </span>
                                            </td>
                                            <td className="py-4">
                                                <button className="text-blue-500">
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
    </div>
  )
}

export default PatientManagement
