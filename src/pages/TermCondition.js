import React from "react";
import { Link } from "react-router-dom";

const TermCondition = () => {
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
          <nav className="mt-6">
            <ul>
              <li className="flex items-center p-3 text-gray-700 hover:bg-gray-200">
                <i className="fas fa-tachometer-alt"></i>
                <span className="ml-3">Dashboard</span>
              </li>
              <li className="flex items-center p-3 text-gray-700 hover:bg-gray-200">
                <i className="fas fa-user-md"></i>
                <span className="ml-3">Doctor Management</span>
              </li>
              <li className="flex items-center p-3 text-gray-700 hover:bg-gray-200">
                <i className="fas fa-users"></i>
                <span className="ml-3">Patient Management</span>
              </li>
              <li className="flex items-center p-3 text-gray-700 hover:bg-gray-200">
                <i className="fas fa-file-invoice-dollar"></i>
                <span className="ml-3">Billing And Payments</span>
              </li>
              <li className="flex items-center p-3 text-gray-700 hover:bg-gray-200">
                <i className="fas fa-chart-line"></i>
                <span className="ml-3">Reporting And Analytics</span>
              </li>
            </ul>
          </nav>
          <div className="mt-auto p-6">
            <button className="flex items-center p-3 text-red-600 hover:bg-red-100 w-full">
              <i className="fas fa-sign-out-alt"></i>
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </aside>
        <main className="flex-1 bg-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div className="text-gray-600">
              <a href="#" className="text-gray-500">
                Profile Setting
              </a>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Quick Search"
                className="p-2 border rounded-md"
              />
              <div className="ml-4">
                <img
                  src="https://placehold.co/40x40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-2">
                  <p className="text-gray-700">Lincoln Philips</p>
                  <p className="text-gray-500 text-sm">Admin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">
              Profile Setting
            </h2>
            <div className="flex mt-6">
              <div className="w-1/3">
                <div className="flex flex-col items-center">
                  <img
                    src="https://placehold.co/100x100"
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full"
                  />
                  <h3 className="mt-4 text-xl font-semibold">
                    Lincoln Philips
                  </h3>
                </div>
                <div className="mt-6">
                <h4 className="text-lg font-bold">Menu</h4>
                <ul className="mt-4">
                  <li className="py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                    <Link to={"/doctor"}>Profile</Link>
                  </li>
                  <li className="py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                    <Link to={"/docChangePass"}>Change Password</Link>
                  </li>
                  <li className="py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                    <Link to={"/docTerms"} >Terms & Condition</Link>
                  </li>
                  <li className="py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                    <Link to={"/docPrivacy"}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              </div>
              <div className="w-2/3">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-700">
                    Terms & Condition
                  </h3>
                  <div className="mt-4 h-96 overflow-y-auto">
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce quis ante ornare, venenatis tortor sed, fringilla
                      ante. Morbi nec semper justo. Cras eget rhoncus urna, eu
                      fringilla nibh. Class aptent taciti sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos. Nam
                      pretium eleifend neque, vel blandit erat iaculis id. Etiam
                      ut lectus vitae metus convallis condimentum quis cursus
                      mi. Aenean non varius enim. Pellentesque sit amet interdum
                      sapien. Fusce ac augue erat. Suspendisse sodales est et
                      laoreet fringilla. Duis justo mauris, semper et justo eu,
                      mollis porttitor eros.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Dolor sit amet, consectetur adipiscing elit. Fusce quis
                      ante ornare, venenatis tortor sed, fringilla ante. Morbi
                      nec semper justo. Cras eget rhoncus urna, eu fringilla
                      nibh. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Nam pretium
                      eleifend neque, vel blandit erat iaculis id. Etiam ut
                      lectus vitae metus convallis condimentum quis cursus mi.
                      Aenean non varius enim. Pellentesque sit amet interdum
                      sapien. Fusce ac augue erat. Suspendisse sodales est et
                      laoreet fringilla. Duis justo mauris, semper et justo eu,
                      mollis porttitor eros.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Consectetur adipiscing elit. Fusce quis ante ornare,
                      venenatis tortor sed, fringilla ante. Morbi nec semper
                      justo. Cras eget rhoncus urna, eu fringilla nibh. Class
                      aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos himenaeos. Nam pretium eleifend
                      neque, vel blandit erat iaculis id. Etiam ut lectus vitae
                      metus convallis condimentum quis cursus mi. Aenean non
                      varius enim. Pellentesque sit amet interdum sapien. Fusce
                      ac augue erat. Suspendisse sodales est et laoreet
                      fringilla. Duis justo mauris, semper et justo eu, mollis
                      porttitor eros.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Consectetur adipiscing elit. Fusce quis ante ornare,
                      venenatis tortor sed, fringilla ante. Morbi nec semper
                      justo. Cras eget rhoncus urna, eu fringilla nibh. Class
                      aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos himenaeos. Nam pretium eleifend
                      neque, vel blandit erat iaculis id. Etiam ut lectus vitae
                      metus convallis condimentum quis cursus mi. Aenean non
                      varius enim. Pellentesque sit amet interdum sapien. Fusce
                      ac augue erat. Suspendisse sodales est et laoreet
                      fringilla. Duis justo mauris, semper et justo eu, mollis
                      porttitor eros.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Consectetur adipiscing elit. Fusce quis ante ornare,
                      venenatis tortor sed, fringilla ante. Morbi nec semper
                      justo. Cras eget rhoncus urna, eu fringilla nibh. Class
                      aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos himenaeos. Nam pretium eleifend
                      neque, vel blandit erat iaculis id. Etiam ut lectus vitae
                      metus convallis condimentum quis cursus mi. Aenean non
                      varius enim. Pellentesque sit amet interdum sapien. Fusce
                      ac augue erat. Suspendisse sodales est et laoreet
                      fringilla. Duis justo mauris, semper et justo eu, mollis
                      porttitor eros.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Consectetur adipiscing elit. Fusce quis ante ornare,
                      venenatis tortor sed, fringilla ante. Morbi nec semper
                      justo. Cras eget rhoncus urna, eu fringilla nibh. Class
                      aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos himenaeos. Nam pretium eleifend
                      neque, vel blandit erat iaculis id. Etiam ut lectus vitae
                      metus convallis condimentum quis cursus mi. Aenean non
                      varius enim. Pellentesque sit amet interdum sapien. Fusce
                      ac augue erat. Suspendisse sodales est et laoreet
                      fringilla. Duis justo mauris, semper et justo eu, mollis
                      porttitor eros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TermCondition;
