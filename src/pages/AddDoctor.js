import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const AddDoctor = () => {
  const profileFileInputRef = useRef(null);
  const signFileInputRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [signImage, setSignImage] = useState(null);
  const [doctorData, setDoctorData] = useState({});

  const handleChoosePhoto = () => {
    profileFileInputRef.current.click();
  };

  const handleSignPhoto = () => {
    signFileInputRef.current.click();
  };

  const signImageChoose = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSignImage(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const getdocData = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const submitDocData = (e) => {
    e.preventDefault();
    // const formData = new FormData();

    // Object.keys(doctorData).forEach((key) => {
    //   formData.append(key, doctorData[key]);
    // });

    // if (selectedImage) {
    //   formData.append("profileImage", selectedImage);
    // }

    // if (signImage) {
    //   formData.append("signImage", signImage);
    // }

    // axios.post("https://l-backend-eg7s.onrender.com/doctor", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // })
    // .then((response) => {
    //   console.log("Doctor added successfully", response);
    // })
    // .catch((error) => {
    //   console.error("There was an error adding the doctor!", error);
    // });
    axios.post("https://l-backend-eg7s.onrender.com/doctor",doctorData)
  };

  return (
    <div>
      <div className="flex">
        <aside className="w-1/5 bg-white h-screen p-4 shadow-md">
          <div className="flex items-center mb-8">
            <img
              src="https://placehold.co/40x40"
              alt="Hospital Logo"
              className="mr-2"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600">Hospital</h1>
              <p className="text-sm text-gray-500">Tagline here</p>
            </div>
          </div>
          <nav>
            <ul>
              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-blue-600">
                  <i className="fas fa-user-md mr-2"></i> 
                  <Link to={"/doctorMangement"}>Doctor Management</Link>
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <i className="fas fa-procedures mr-2"></i> Patient Management
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <i className="fas fa-file-invoice-dollar mr-2"></i> Billing
                  And Payments
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <i className="fas fa-chart-line mr-2"></i> Reporting And
                  Analytics
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-auto">
            <a href="#" className="flex items-center text-red-600">
              <i className="fas fa-sign-out-alt mr-2"></i> Logout
            </a>
          </div>
        </aside>
        <main className="flex-1 p-8">
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-700">
              Doctor Management
            </h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Quick Search"
                className="border rounded p-2 mr-4"
              />
              <div className="relative">
                <button className="flex items-center text-gray-700">
                  <i className="fas fa-bell mr-2"></i>
                </button>
              </div>
              <div className="flex items-center ml-4">
                <img
                  src="https://placehold.co/40x40"
                  alt="Admin Avatar"
                  className="rounded-full mr-2"
                />
                <div>
                  <p className="text-gray-700">Lincoln Philips</p>
                  <p className="text-sm text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </header>
          <section className="bg-white p-8 rounded shadow-md">
            <h3 className="text-xl font-bold text-gray-700 mb-6">
              Add New Doctor
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
                  {selectedImage && (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                      className="w-32 h-24 rounded-full object-cover"
                    />
                  )}
                </div>
                <button onClick={handleChoosePhoto} className="text-blue-600">
                  Choose Photo
                </button>
                <input
                  type="file"
                  ref={profileFileInputRef}
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <div className="mt-6 w-full">
                  <label className="block text-gray-700 mb-2">
                    Upload Signature
                  </label>
                  <div
                    onClick={handleSignPhoto}
                    className="border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer"
                  >
                    {signImage ? (
                      <img
                        src={URL.createObjectURL(signImage)}
                        alt="Selected"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <i className="fas fa-upload text-gray-400 text-2xl mb-2"></i>
                        <p className="text-blue-600">Upload a file</p>
                        <p className="text-gray-400 text-sm">PNG Up To 5MB</p>
                      </>
                    )}
                  </div>
                </div>
                <input
                  type="file"
                  ref={signFileInputRef}
                  accept="image/*"
                  onChange={signImageChoose}
                  style={{ display: "none" }}
                />
              </div>
              <div className="col-span-2 grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Doctor Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Doctor Name"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Doctor Qualification
                  </label>
                  <input
                    type="text"
                    name="quali"
                    placeholder="Enter Doctor Qualification"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Specialty Type
                  </label>
                  <input
                    type="text"
                    name="Specialty_type"
                    placeholder="Enter Specialty Type"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  >
                    <option>Select Gender</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Other"}>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Check Up Time
                  </label>
                  <input
                    type="text"
                    name="checktime"
                    placeholder="Enter Checkup Time"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Work On</label>
                  <select
                    name="work_on"
                    onChange={(e) => getdocData(e)}
                    className="border rounded w-full p-2"
                  >
                    <option>Select Work On</option>
                    <option value={"Online"}>Online</option>
                    <option value={"Offline"}>Offline</option>
                    <option value={"Both"}>Both</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    placeholder="Enter Phone Number"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Working Time
                  </label>
                  <input
                    type="text"
                    name="working_time"
                    placeholder="Enter Working Time"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Country</label>
                  <select
                    name="country"
                    onChange={(e) => getdocData(e)}
                    className="border rounded w-full p-2"
                  >
                    <option>Select Country</option>
                    <option value={"India"}>India</option>
                    <option value={"America"}>America</option>
                    <option value={"England"}>England</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Break Time</label>
                  <input
                    type="text"
                    name="break_time"
                    placeholder="Enter Break Time"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Zip code</label>
                  <input
                    type="text"
                    name="zipcode"
                    placeholder="Enter Zip Code"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Experience</label>
                  <input
                    type="text"
                    name="experience"
                    placeholder="Enter Experience"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Online Consultation Rate
                  </label>
                  <input
                    type="text"
                    name="rate"
                    placeholder="₹ 00000"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Doctor Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="text"
                    name="pass"
                    placeholder="Enter Password"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Doctor Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Doctor Address"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Age</label>
                  <input
                    type="text"
                    name="age"
                    placeholder="Enter Age"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">State</label>
                  <select
                    name="state"
                    onChange={(e) => getdocData(e)}
                    className="border rounded w-full p-2"
                  >
                    <option>Select State</option>
                    <option value={"Gujarat"}>Gujarat</option>
                    <option value={"Hariyana"}>Hariyana</option>
                    <option value={"Rajasthan"}>Rajasthan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">City</label>
                  <select
                    name="city"
                    onChange={(e) => getdocData(e)}
                    className="border rounded w-full p-2"
                  >
                    <option>Select City</option>
                    <option value={"Surat"}>Surat</option>
                    <option value={"Vadodara"}>Vadodara</option>
                    <option value={"Rajkot"}>Rajkot</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    name="desc"
                    placeholder="Enter Description"
                    className="border rounded w-full p-2"
                    onChange={(e) => getdocData(e)}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Doctor Current Hospital
                </label>
                <input
                  type="text"
                  name="hospitalCurre"
                  placeholder="Enter Current Hospital"
                  className="border rounded w-full p-2"
                  onChange={(e) => getdocData(e)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Hospital Name
                </label>
                <input
                  type="text"
                  name="hospitalname"
                  placeholder="Enter Hospital Name"
                  className="border rounded w-full p-2"
                  onChange={(e) => getdocData(e)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Hospital Address
                </label>
                <input
                  type="text"
                  name="hospitaladdress"
                  placeholder="Enter Hospital Address"
                  className="border rounded w-full p-2"
                  onChange={(e) => getdocData(e)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Hospital Website Link
                </label>
                <input
                  type="text"
                  name="link"
                  placeholder="Enter Hospital Website Link"
                  className="border rounded w-full p-2"
                  onChange={(e) => getdocData(e)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Emergency Contact Number
                </label>
                <input
                  type="text"
                  name="emergencynum"
                  placeholder="Enter Emergency Contact Number"
                  className="border rounded w-full p-2"
                  onChange={(e) => getdocData(e)}
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={(e) => submitDocData(e)}
                className="bg-blue-600 text-white px-6 py-2 rounded"
              >
                Add
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AddDoctor;
