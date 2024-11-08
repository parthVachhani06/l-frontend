import React, { useEffect, useState } from "react";
import Frame from "../images/Frame 1116602772.png";
import axios from "axios";
import ObjectImg from "../images/OBJECTS.png";
import moment from "moment";

const BookAppointment = () => {
  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
  ];

  const [doctorData, setDoctorData] = useState([]);
  const [hospitalData, setHospitalData] = useState([]);
  const [modalData, setModalData] = useState({ time: "", day: "", note: "" });
  const [showModal, setShowModal] = useState(false);
  const [blockedSlots, setBlockedSlots] = useState({});
  const [startOfWeek, setStartOfWeek] = useState(moment().startOf("week"));

  useEffect(() => {
    getDoctors();
    getHospital();
  }, []);

  const getDoctors = async () => {
    const res = await axios.get("https://l-backend-eg7s.onrender.com/doctor");
    setDoctorData(res.data);
  };

  const getHospital = async () => {
    const res = await axios.get("https://l-backend-eg7s.onrender.com/hopital");
    setHospitalData(res.data);
  };

  const openModal = (time, day) => {
    setModalData({ time, day, note: "" });
    setShowModal(true);
  };

  const handleDisable = () => {
    const { time, day } = modalData;
    const dayKey = day.format("YYYY-MM-DD");

    setBlockedSlots((prev) => ({
      ...prev,
      [dayKey]: { ...prev[dayKey], [time]: true },
    }));
    setShowModal(false);
  };

  const changeWeek = (direction) => {
    if (direction === "prev") {
      setStartOfWeek(startOfWeek.clone().subtract(1, "week"));
    } else if (direction === "next") {
      setStartOfWeek(startOfWeek.clone().add(1, "week"));
    }
  };

  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.clone().add(i, "days")
  );

  const endOfWeek = startOfWeek.clone().endOf("week");

  console.log(doctorData, hospitalData);

  return (
    <div>
      <div className="flex h-screen">
        <div className="w-64 h-screen">
          <aside className="w-64 bg-white shadow-md h-screen fixed top-0 bottom-0">
            <div className="p-6">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/40x40"
                  alt="Hospital Logo"
                  className="mr-2"
                />
                <div>
                  <h1 className="text-xl font-bold text-blue-500">Hospital</h1>
                  <p className="text-sm text-gray-500">tagline here</p>
                </div>
              </div>
            </div>
            <nav className="mt-2">
              <ul>
                <li className="flex items-center p-2 text-gray-700 hover:bg-blue-100">
                  <i className="fas fa-file-medical-alt mr-3"></i>
                  <span>Personal Health Record</span>
                </li>
                <li className="flex items-center p-2 text-gray-700 bg-blue-100">
                  <i className="fas fa-calendar-alt mr-3"></i>
                  <span>Appointment Booking</span>
                </li>
                <li className="flex items-center p-2 text-gray-700 hover:bg-blue-100">
                  <i className="fas fa-prescription-bottle-alt mr-3"></i>
                  <span>Prescription Access</span>
                </li>
                <li className="flex items-center p-2 text-gray-700 hover:bg-blue-100">
                  <i className="fas fa-video mr-3"></i>
                  <span>Teleconsultation Access</span>
                </li>
                <li className="flex items-center p-2 text-gray-700 hover:bg-blue-100">
                  <i className="fas fa-comments mr-3"></i>
                  <span>Chat</span>
                </li>
                <li className="flex items-center p-2 text-gray-700 hover:bg-blue-100">
                  <i className="fas fa-file-invoice-dollar mr-3"></i>
                  <span>Bills</span>
                </li>
              </ul>
            </nav>
            <div className=" bg-gray-50 rounded-lg text-center">
              <img
                src={ObjectImg}
                alt="Appointment Icon"
                className="mb-1 inline-block w-24 h-24"
              />
              <h2 className="text-md font-bold">Hospital appointment</h2>
              <p className="text-sm text-gray-500 mb-3">
                You have to fill up the form to be admitted to the hospital.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Appointment
              </button>
            </div>
            <div className="p-6">
              <button className="w-full bg-red-500 text-white py-2 rounded-lg">
                Logout
              </button>
            </div>
          </aside>
        </div>
        <main className="flex-1  w-[1080px] ml-auto">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center text-gray-500">
              <i className="fas fa-home mr-2"></i>
              <span>Appointment Booking</span>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Quick Search"
                className="border border-gray-300 rounded-lg py-2 px-4 mr-4"
              />
              <div className="relative">
                <i className="fas fa-bell text-gray-500"></i>
                <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="flex items-center ml-4">
                <img
                  src="https://placehold.co/40x40"
                  alt="User Avatar"
                  className="rounded-full mr-2"
                />
                <div>
                  <h2 className="text-sm font-semibold">Lincoln Philips</h2>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </header>
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Appointment Booking</h2>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-gray-700">Specialty</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select Specialty</option>
                  {doctorData.map((v, i) => {
                    return (
                      <>
                        <option value={v.Specialty_type}>
                          {v.Specialty_type}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Country</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select Country</option>
                  <option value={"India"}>India</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">State</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select State</option>
                  <option className="Gujarat">Gujarat</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select City</option>
                  <option value={"Surat"}>Surat</option>
                  <option value={"Ahemadabad"}>Ahemadabad</option>
                  <option value={"Rajkot"}>Rajkot</option>
                  <option value={"Vadodara"}>Vadodara</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Hospital</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select Hospital</option>
                  {hospitalData.map((v, i) => {
                    return (
                      <>
                        <option value={v.hospitalName}>{v.hospitalName}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Doctor</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select Doctor</option>
                  {doctorData.map((v, i) => {
                    return (
                      <>
                        <option value={v.name}>{v.name}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Appointment Type</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select Appointment Type</option>
                  <option value={"Online"}>Online</option>
                  <option value={"Offline"}>Online</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <img
                src={Frame}
                alt="No Appointment Illustration"
                className="mb-4 w-72 h-auto object-cover"
              />
              <p className="text-gray-500">No Appointment Found Yet</p>
            </div>
          </section>
          <section className="flex items-center justify-between w-[1080px]">
            <div className="w-4/5">
              <div className="appointment-calendar w-[1080px] ml-auto mt-2">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                  Appointment Time-Slot
                </h2>
                <div className="flex justify-center items-center text-center mb-2">
                  <button onClick={() => changeWeek("prev")}>&#x25C4;</button>
                  <div className="mx-4">
                    {startOfWeek.format("DD MMM, YYYY")} -{" "}
                    {endOfWeek.format("DD MMM, YYYY")}
                  </div>
                  <button onClick={() => changeWeek("next")}>&#x25BA;</button>
                </div>

                <table className="table-bordered w-[820px] border-collapse">
                  <thead>
                    <tr>
                      <th>Time</th>
                      {daysOfWeek.map((day, index) => (
                        <th key={index}>{day.format("ddd, DD MMM")}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody id="time-slots">
                    {timeSlots.map((time, index) => (
                      <tr key={index}>
                        <td>{time}</td>
                        {time === "01:00 PM" ? (
                          <td colSpan={7} rowSpan={2} key={`lunch-${index}`}>
                            <button
                              className="w-full bg-[#c6c7c7] py-4"
                              disabled
                            >
                              Lunch Time
                            </button>
                          </td>
                        ) : time === "02:00 PM" ? null : (
                          <>
                            {daysOfWeek.map((day, dayIndex) => {
                              const dayKey = day.format("YYYY-MM-DD");
                              const isDisabled = blockedSlots[dayKey]?.[time];
                              return (
                                <td key={dayIndex}>
                                  <button
                                    className={`w-full py-2 ${
                                      isDisabled ? "bg-red-300" : "bg-[#c6c7c7]"
                                    }`}
                                    disabled={isDisabled}
                                    onClick={() => openModal(time, day)}
                                  >
                                    {isDisabled ? "Unavailable" : "No Schedule"}
                                  </button>
                                </td>
                              );
                            })}
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Modal for Blocking Time Slot */}
                {showModal && (
                  <div
                    className="modal show d-block"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header bg-[#f1f1f1]">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Block Time Slot
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={() => setShowModal(false)}
                          />
                        </div>
                        <div className="modal-body">
                          <form id="blockSlotForm">
                            <div className="mb-3">
                              <label htmlFor="startTime" className="form-label">
                                Time Slot
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="startTime"
                                value={modalData.time}
                                readOnly
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="day" className="form-label">
                                Day
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="day"
                                value={modalData.day.format("ddd, DD MMM")}
                                readOnly
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="note" className="form-label">
                                Add Note
                              </label>
                              <textarea
                                className="form-control"
                                id="note"
                                rows="3"
                                value={modalData.note}
                                onChange={(e) =>
                                  setModalData({
                                    ...modalData,
                                    note: e.target.value,
                                  })
                                }
                              ></textarea>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer bg-[#f1f1f1]">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setShowModal(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleDisable}
                          >
                            Block Slot
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/5">
              <h1>doctor data</h1>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BookAppointment;
