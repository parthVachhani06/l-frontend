import React from "react";
import { Link } from "react-router-dom";

const PatientDetails = () => {
  return (
    <div>
      <div className="flex">
        <aside className="w-1/5 bg-white p-4">
          <div className="flex items-center mb-8">
            <img
              src="https://placehold.co/40x40"
              alt="Hospital Logo"
              className="mr-2"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600">Hospital</h1>
              <p className="text-sm text-gray-500">together here</p>
            </div>
          </div>
          <nav>
            <ul>
              <li className="mb-4">
                <Link to={"/patientDetails"} className="flex items-center text-blue-600">
                  <i className="fas fa-file-medical-alt mr-2"></i>
                  Personal Health Record
                </Link>
              </li>
              <li className="mb-4">
                <Link to={"/appointmentBooking"} className="flex items-center text-gray-600">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Appointment Booking
                </Link>
              </li>
              <li className="mb-4">
                <Link to={"/prescriptionAccess"} className="flex items-center text-gray-600">
                  <i className="fas fa-prescription-bottle-alt mr-2"></i>
                  Prescription Access
                </Link>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600">
                  <i className="fas fa-video mr-2"></i>
                  Teleconsultation Access
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600">
                  <i className="fas fa-comments mr-2"></i>
                  Chat
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600">
                  <i className="fas fa-file-invoice-dollar mr-2"></i>
                  Bills
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-4">
              <i className="fas fa-hospital-alt text-blue-600 text-2xl mr-2"></i>
              <div>
                <p className="text-sm text-gray-600">Hospital appointment</p>
                <p className="text-xs text-gray-500">
                  You have to fill up the form to be admitted to the hospital.
                </p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Appointment
            </button>
          </div>
          <button className="mt-8 w-full bg-red-600 text-white py-2 rounded-lg">
            Logout
          </button>
        </aside>
        <main className="w-4/5 p-8">
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-700">
              Personal Health Record
            </h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Quick Search"
                className="border border-gray-300 rounded-lg px-4 py-2 mr-4"
              />
              <i className="fas fa-bell text-gray-600 text-xl mr-4"></i>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/40x40"
                  alt="User Avatar"
                  className="rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-bold text-gray-700">
                    Lincoln Philips
                  </p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </header>
          <section className="bg-white p-8 rounded-lg shadow mb-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-700">
                Patient Details
              </h3>
              <Link to={"/patientEdit"} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Edit Profile
              </Link>
            </div>
            <div className="flex items-center mb-8">
              <img
                src="https://placehold.co/100x100"
                alt="Patient Photo"
                className="rounded-full mr-8"
              />
              <div className="grid grid-cols-5 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="text-lg font-semibold text-gray-700">
                      Marcus Philips
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Number</p>
                    <p className="text-lg font-semibold text-gray-700">
                      99130 44537
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-semibold text-gray-700">
                      John@gmail.com
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="text-lg font-semibold text-gray-700">Male</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">DOB</p>
                    <p className="text-lg font-semibold text-gray-700">
                      2 Jan, 2022
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Age</p>
                    <p className="text-lg font-semibold text-gray-700">
                      20 Years
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Blood Group</p>
                    <p className="text-lg font-semibold text-gray-700">B+</p>
                  </div>
                
                  <div>
                    <p className="text-sm text-gray-500">Height (cm)</p>
                    <p className="text-lg font-semibold text-gray-700">160</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Weight (Kg)</p>
                    <p className="text-lg font-semibold text-gray-700">50</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Country</p>
                    <p className="text-lg font-semibold text-gray-700">India</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">State</p>
                    <p className="text-lg font-semibold text-gray-700">
                      Gujarat
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">City</p>
                    <p className="text-lg font-semibold text-gray-700">
                      Ahmedabad
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-lg font-semibold text-gray-700">
                      B-408 Swastik society, mota varacha rajkot.
                    </p>
                  </div>
                </div>
                </div>
          </section>
          <section className="bg-white p-8 rounded-lg shadow mb-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-700">
                Medical History
              </h3>
              <a href="#" className="text-blue-600">
                View All History
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold text-gray-700">
                    Dulce Schleifer
                  </h4>
                  <p className="text-sm text-gray-500">2 Jan, 2022</p>
                </div>
                <p className="text-sm text-gray-500">Patient Issue</p>
                <p className="text-sm text-gray-700">
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took. Lorem Ipsum has been the.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold text-gray-700">
                    Dulce Workman
                  </h4>
                  <p className="text-sm text-gray-500">2 Jan, 2022</p>
                </div>
                <p className="text-sm text-gray-500">Patient Issue</p>
                <p className="text-sm text-gray-700">
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took. Lorem Ipsum has been the.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold text-gray-700">
                    Miracle Septimus
                  </h4>
                  <p className="text-sm text-gray-500">2 Jan, 2022</p>
                </div>
                <p className="text-sm text-gray-500">Patient Issue</p>
                <p className="text-sm text-gray-700">
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took. Lorem Ipsum has been the.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white p-8 rounded-lg shadow mb-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-700">Prescriptions</h3>
              <a href="#" className="text-blue-600">
                View All Prescription
              </a>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2">Hospital Name</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Disease Name</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2">Apollo Hospitals</td>
                  <td className="py-2">2 Jan, 2022</td>
                  <td className="py-2">Colds and Flu</td>
                  <td className="py-2">
                    <i className="fas fa-eye text-blue-600"></i>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">Medanta The Medicity</td>
                  <td className="py-2">2 Jan, 2022</td>
                  <td className="py-2">Allergies</td>
                  <td className="py-2">
                    <i className="fas fa-eye text-blue-600"></i>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">Manipal Hospitals</td>
                  <td className="py-2">2 Jan, 2022</td>
                  <td className="py-2">Diarrhea</td>
                  <td className="py-2">
                    <i className="fas fa-eye text-blue-600"></i>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">Naravana Health</td>
                  <td className="py-2">2 Jan, 2022</td>
                  <td className="py-2">Colds and Flu</td>
                  <td className="py-2">
                    <i className="fas fa-eye text-blue-600"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="bg-white p-8 rounded-lg shadow mb-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-700">Test Reports</h3>
              <a href="#" className="text-blue-600">
                View All Reports
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Doctor Photo"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-700">
                      Dr. Marcus Philips
                    </h4>
                    <p className="text-sm text-gray-500">2 Jan, 2022</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Dieses : Viral Infection
                </p>
                <p className="text-sm text-green-600">Pathology Test</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Doctor Photo"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-700">
                      Dr. Zaire Saris
                    </h4>
                    <p className="text-sm text-gray-500">2 Jan, 2022</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Dieses : Viral Infection
                </p>
                <p className="text-sm text-green-600">Pathology Test</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Doctor Photo"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-700">
                      Dr. Ryan Carder
                    </h4>
                    <p className="text-sm text-gray-500">2 Jan, 2022</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Dieses : Allergies</p>
                <p className="text-sm text-green-600">Pathology Test</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Doctor Photo"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-700">
                      Dr. Jaxson Herwitz
                    </h4>
                    <p className="text-sm text-gray-500">2 Jan, 2022</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Dieses : Allergies</p>
                <p className="text-sm text-green-600">Pathology Test</p>
              </div>
            </div>
          </section>
          <section className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-700 mb-8">
              Patient Status
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <i className="fas fa-hospital-alt text-blue-600 text-2xl mr-4"></i>
                <p className="text-sm text-gray-700">Shamuba Hospital</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-user-md text-green-600 text-2xl mr-4"></i>
                <p className="text-sm text-gray-700">Dr. Mathew Best</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-calendar-alt text-purple-600 text-2xl mr-4"></i>
                <p className="text-sm text-gray-700">2 Jan, 2022</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-user text-pink-600 text-2xl mr-4"></i>
                <p className="text-sm text-gray-700">Chance Carder</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PatientDetails;
