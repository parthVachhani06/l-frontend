import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import moment from "moment";

const AppointmentSlot = () => {
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

  const [modalData, setModalData] = useState({ time: "", day: "", note: "" });
  const [showModal, setShowModal] = useState(false);
  const [blockedSlots, setBlockedSlots] = useState({});
  const [startOfWeek, setStartOfWeek] = useState(moment().startOf("week"));

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

  return (
    <div>
      {/* Sidebar and Top Bar */}
      <aside className="w-64 bg-white shadow-md fixed top-0 bottom-0">
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
                //             href="#"
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
            <i className="fas fa-sign-out-alt mr-3"></i> Logout
          </a>
        </div>
      </aside>

      <header className="flex items-center justify-between w-[1080px] ml-auto">
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

        <table className="table-bordered w-full border-collapse">
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
                    <button className="w-full bg-[#c6c7c7] py-4" disabled>
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
                          setModalData({ ...modalData, note: e.target.value })
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
  );
};

export default AppointmentSlot;

