import React from 'react'
import Object from "../images/OBJECTS.png"
import { Link } from 'react-router-dom'

const AppointmentBooking = () => {
  return (
    <div>
      <div className="flex">
                    <aside className="w-1/5 bg-white p-4">
                        <div className="flex items-center mb-8">
                            <img src="https://placehold.co/40x40" alt="Hospital Logo" className="mr-2"/>
                            <div>
                                <h1 className="text-xl font-bold text-blue-500">Hospital</h1>
                                <p className="text-sm text-gray-500">tagline here</p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li className="mb-4">
                                    <Link to={"/patientDetails"} className="flex items-center text-gray-700">
                                        <i className="fas fa-file-medical-alt mr-2"></i>
                                        Personal Health Record
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/appointmentBooking"} className="flex items-center text-blue-500">
                                        <i className="fas fa-calendar-check mr-2"></i>
                                        Appointment Booking
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/prescriptionAccess"} className="flex items-center text-gray-700">
                                        <i className="fas fa-prescription-bottle-alt mr-2"></i>
                                        Prescription Access
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-700">
                                        <i className="fas fa-video mr-2"></i>
                                        Teleconsultation Access
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-700">
                                        <i className="fas fa-comments mr-2"></i>
                                        Chat
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-700">
                                        <i className="fas fa-file-invoice-dollar mr-2"></i>
                                        Bills
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
                            <img src={Object} alt="Appointment Icon" className="mb-4 inline-block   "/>
                            <h2 className="text-lg font-bold">Hospital appointment</h2>
                            <p className="text-sm text-gray-500 mb-4">You have to fill up the form to be admitted to the hospital.</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Appointment</button>
                        </div>
                        <div className="mt-8">
                            <button className="text-red-500 flex items-center">
                                <i className="fas fa-sign-out-alt mr-2"></i>
                                Logout
                            </button>
                        </div>
                    </aside>
                    <main className="w-4/5 p-8">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center text-gray-500">
                                <i className="fas fa-chevron-right mr-2"></i>
                                <span>Appointment Booking</span>
                            </div>
                            <div className="flex items-center">
                                <input type="text" placeholder="Quick Search" className="border border-gray-300 rounded px-4 py-2 mr-4"/>
                                <select className="border border-gray-300 rounded px-4 py-2">
                                    <option>All</option>
                                </select>
                                <div className="flex items-center ml-4">
                                    <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full mr-2"/>
                                    <div>
                                        <p className="text-gray-700">Lincoln Philips</p>
                                        <p className="text-sm text-gray-500">Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul className='flex items-center'>
                                <li>
                                    <Link to={"/appointmentBooking"} className="text-blue-500 border-b-2 border-blue-500 pb-2 mr-8">Scheduled Appointment</Link>
                                </li>
                                <li>
                                    <Link to={"/previousAppointment"} className="text-gray-500 pb-2 mr-8">Previous Appointment</Link>
                                </li>
                                <li>
                                    <Link to={"/cancelAppointment"} className="text-gray-500 pb-2 mr-8">Cancel Appointment</Link>
                                </li>
                                <li>
                                    <Link to={"/pendingAppointment"} className="text-gray-500 pb-2 mr-8">Pending Appointment</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold">My Appointment</h2>
                                <div className="flex items-center">
                                    <input type="date" value="2 Jan, 2022 - 13 Jan, 2022" className="border border-gray-300 rounded px-4 py-2 mr-4"/>
                                    <Link to={"/bookAppointment"} className="bg-blue-500 text-white px-4 py-2 rounded">Book Appointment</Link>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4">
                                {['Dr. Nolan George', 'Dr. Cristofer Stanton', 'Dr. Davis Donin', 'Dr. Terry Calzoni'].map((doctor, index) => (
                                    <div key={index} className="border border-gray-300 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-bold">{doctor}</h3>
                                            <i className="fas fa-eye text-gray-500"></i>
                                        </div>
                                        <p className="text-sm text-[#4F4F4F] mb-2 flex justify-between font-medium"><strong className='text-[#818194]'>Appointment Type:</strong> Online</p>
                                        <p className="text-sm text-[#4F4F4F] mb-2 flex justify-between font-medium"><strong className='text-[#818194]'>Hospital Name:</strong> Shambuba Hospital</p>
                                        <p className="text-sm text-[#4F4F4F] mb-2 flex justify-between font-medium"><strong className='text-[#818194]'>Appointment Date:</strong> 2 Jan, 2022</p>
                                        <p className="text-sm text-[#4F4F4F] mb-2 flex justify-between font-medium"><strong className='text-[#818194]'>Appointment Time:</strong> 10:20 AM</p>
                                        <p className="text-sm text-[#4F4F4F] mb-4 flex justify-between font-medium"><strong className='text-[#818194]'>Patient Issue:</strong> Feeling Tired</p>
                                        <div className="flex justify-between">
                                            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded flex items-center">
                                                <i className="fas fa-times mr-2"></i>
                                                Cancel
                                            </button>
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                                                <i className="fas fa-sync-alt mr-2"></i>
                                                Reschedule
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
    </div>
  )
}

export default AppointmentBooking
