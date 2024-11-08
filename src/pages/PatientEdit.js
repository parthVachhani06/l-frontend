import React from 'react'

const PatientEdit = () => {
  return (
    <div>
       <div className="flex">
                    <aside className="w-1/4 bg-white p-6">
                        <div className="flex items-center mb-8">
                            <img src="https://placehold.co/50x50" alt="Hospital Logo" className="mr-3"/>
                            <div>
                                <h1 className="text-2xl font-bold text-blue-600">Hospital</h1>
                                <p className="text-sm text-gray-500">tagline here</p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-blue-600">
                                        <i className="fas fa-user mr-3"></i> Personal Health Record
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-600">
                                        <i className="fas fa-calendar-check mr-3"></i> Appointment Booking
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-600">
                                        <i className="fas fa-prescription-bottle-alt mr-3"></i> Prescription Access
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-600">
                                        <i className="fas fa-video mr-3"></i> Teleconsultation Access
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-600">
                                        <i className="fas fa-comments mr-3"></i> Chat
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-600">
                                        <i className="fas fa-file-invoice-dollar mr-3"></i> Bills
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                            <h2 className="text-lg font-bold text-blue-600">Hospital appointment</h2>
                            <p className="text-sm text-gray-600 mb-4">You have to fill up the form to be admitted to the hospital.</p>
                            <button className="bg-blue-600 text-white py-2 px-4 rounded">Appointment</button>
                        </div>
                        <div className="mt-8">
                            <button className="flex items-center text-red-600">
                                <i className="fas fa-sign-out-alt mr-3"></i> Logout
                            </button>
                        </div>
                    </aside>
                    <main className="w-3/4 p-8">
                        <div className="flex items-center mb-8">
                            <a href="#" className="text-gray-600 mr-2"><i className="fas fa-chevron-left"></i></a>
                            <span className="text-gray-600">Profile Setting</span>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg text-white mb-8">
                            <h1 className="text-2xl font-bold">Profile Setting</h1>
                        </div>
                        <div className="flex bg-white p-8 rounded-lg shadow-lg">
                            <div className='w-1/5'>
                            <div className="text-center mr-5">
                                <img src="https://placehold.co/100x100" alt="Profile Picture" className="rounded-full mb-4 inline-block"/>
                                <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded"><i className="fas fa-camera"></i> Change Profile</button>
                            </div>
                            </div>
                            <div className='w-4/5'>
                            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                            <form>
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block text-gray-600 mb-2">Name</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" value="Marcus Philips"/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">Email</label>
                                        <input type="email" className="w-full p-2 border border-gray-300 rounded" value="John@gmail.com"/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">Number</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" value="99130 44537"/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">DOB</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" value="2 Jan, 2022"/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">Gender</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" value="Male"/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">Age</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" value="20 Years"/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">Blood Group</label>
                                        <select className="w-full p-2 border border-gray-300 rounded">
                                            <option>B+</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">Hight (Cm)</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" value="160"/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">Weight (Kg)</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" value="50"/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">Country</label>
                                        <select className="w-full p-2 border border-gray-300 rounded">
                                            <option>India</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">State</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" value="Gujrat"/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">City</label>
                                        <select className="w-full p-2 border border-gray-300 rounded">
                                            <option>Ahmedabad</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-600 mb-2">Address</label>
                                    <textarea className="w-full p-2 border border-gray-300 rounded">B-408 Swastik society, mota varacha rajkot.</textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button type="button" className="bg-gray-200 text-gray-600 py-2 px-4 rounded mr-2">Cancel</button>
                                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Save</button>
                                </div>
                            </form>
                            </div>
                           
                        </div>
                    </main>
                </div>
    </div>
  )
}

export default PatientEdit
