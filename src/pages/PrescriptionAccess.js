import React from 'react'
import { Link } from 'react-router-dom'
import ObjectImg from "../images/OBJECTS.png"

const PrescriptionAccess = () => {
  return (
    <div>
      <div class="flex h-screen">
                    <aside class="w-64 bg-white p-4">
                        <div class="flex items-center mb-8">
                            <img src="https://placehold.co/40x40" alt="Hospital Logo" class="w-10 h-10 mr-2"/>
                            <div>
                                <h1 class="text-xl font-bold text-blue-600">Hospital</h1>
                                <p class="text-sm text-gray-500">Tagline here</p>
                            </div>
                        </div>
                        <nav class="space-y-4">
                            <Link to={"/patientDetails"} class="flex items-center text-blue-600">
                                <i class="fas fa-user-md mr-2"></i>
                                <span>Personal Health Record</span>
                            </Link>
                            <Link to={"/AppointmentBooking"} class="flex items-center text-blue-600">
                                <i class="fas fa-calendar-alt mr-2"></i>
                                <span>Appointment Booking</span>
                            </Link>
                            <Link to={"/prescriptionAccess"} class="flex items-center text-blue-600 bg-blue-100 p-2 rounded">
                                <i class="fas fa-file-prescription mr-2"></i>
                                <span>Prescription Access</span>
                            </Link>
                            <a href="#" class="flex items-center text-blue-600">
                                <i class="fas fa-video mr-2"></i>
                                <span>Teleconsultation Access</span>
                            </a>
                            <a href="#" class="flex items-center text-blue-600">
                                <i class="fas fa-comments mr-2"></i>
                                <span>Chat</span>
                            </a>
                            <a href="#" class="flex items-center text-blue-600">
                                <i class="fas fa-file-invoice-dollar mr-2"></i>
                                <span>Bills</span>
                            </a>
                        </nav>
                        <div class="mt-auto">
                            <div class="bg-blue-100 p-4 rounded-lg mb-4">
                                <img src={ObjectImg} alt="Appointment Illustration" class="w-16 h-16 mx-auto mb-2"/>
                                <h2 class="text-center text-blue-600 font-semibold">Hospital appointment</h2>
                                <p class="text-center text-gray-500 text-sm">You have to fill up the form to be admitted to the hospital.</p>
                                <button class="bg-blue-600 text-white w-full py-2 mt-2 rounded">Appointment</button>
                            </div>
                            <button class="bg-red-100 text-red-600 w-full py-2 rounded">Logout</button>
                        </div>
                    </aside>
                    <main class="flex-1 p-6">
                        <header class="flex justify-between items-center mb-6">
                            <h2 class="text-2xl font-semibold">Prescription Access</h2>
                            <div class="flex items-center space-x-4">
                                <div class="relative">
                                    <input type="text" placeholder="Quick Search" class="bg-gray-200 rounded-full py-2 px-4 pl-10"/>
                                    <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <img src="https://placehold.co/40x40" alt="User Avatar" class="w-10 h-10 rounded-full"/>
                                    <div>
                                        <p class="text-gray-700 font-semibold">Lincoln Philips</p>
                                        <p class="text-gray-500 text-sm">Admin</p>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="flex justify-between items-center mb-6">
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-calendar-alt text-gray-500"></i>
                                <span class="text-gray-700">2 Jan, 2022 - 13 Jan, 2022</span>
                                <i class="fas fa-times text-red-500 cursor-pointer"></i>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {Array(4).fill().map((_, index) => (
                                <div key={index} class="bg-white p-4 rounded-lg shadow">
                                    <div class="flex justify-between items-center mb-4">
                                        <h3 class="text-lg font-semibold">Dr. Ryan Vetrovs</h3>
                                        <div class="flex space-x-2">
                                            <i class="fas fa-print text-gray-500 cursor-pointer"></i>
                                            <i class="fas fa-download text-gray-500 cursor-pointer"></i>
                                        </div>
                                    </div>
                                    <div class="text-gray-500 text-sm mb-4">
                                        <p>Hospital Name: <span class="text-gray-700">Artemis Hospital</span></p>
                                        <p>Disease Name: <span class="text-gray-700">Viral Infection</span></p>
                                        <p>Date: <span class="text-gray-700">2 Jan, 2022</span></p>
                                        <p>Time: <span class="text-gray-700">10:10 AM</span></p>
                                    </div>
                                    <div class="bg-gray-100 p-4 rounded-lg flex items-center space-x-2">
                                        <i class="fas fa-file-alt text-blue-600"></i>
                                        <div>
                                            <p class="text-blue-600">Prescription.JPG</p>
                                            <p class="text-gray-500 text-sm">5.09 MB</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
    </div>
  )
}

export default PrescriptionAccess
