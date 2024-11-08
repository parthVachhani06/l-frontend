import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
                <i className="fas fa-tachometer-alt w-5"></i>
                <span className="ml-3">Dashboard</span>
              </li>
              <li className="flex items-center p-3 text-gray-700 hover:bg-gray-200">
                <i className="fas fa-user-md w-5"></i>
                <span className="ml-3">Doctor Management</span>
              </li>
              <li className="flex items-center p-3 text-gray-700 hover:bg-gray-200">
                <i className="fas fa-users w-5"></i>
                <span className="ml-3">Patient Management</span>
              </li>
              <li className="flex items-center p-3 text-gray-700 hover:bg-gray-200">
                <i className="fas fa-file-invoice-dollar w-5"></i>
                <span className="ml-3">Billing And Payments</span>
              </li>
              <li className="flex items-center p-3 text-gray-700 hover:bg-gray-200">
                <i className="fas fa-chart-line w-5"></i>
                <span className="ml-3">Reporting And Analytics</span>
              </li>
            </ul>
          </nav>
          <div className="mt-auto p-6">
            <button className="flex items-center p-3 text-red-600 hover:bg-red-100 w-full">
              <i className="fas fa-sign-out-alt w-5"></i>
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </aside>
        <main className="flex-1 bg-gray-50">
          <header className="flex items-center justify-between p-6 bg-white shadow">
            <div className="flex items-center">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-home"></i>
              </a>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700">Profile Setting</span>
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
                <span className="ml-2 text-gray-700">Lincoln Philips</span>
                <span className="ml-1 text-gray-500">Admin</span>
              </div>
            </div>
          </header>
          <div className="p-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl text-white font-semibold">
                Profile Setting
              </h2>
            </div>
            <div className="mt-6 flex">
                <div className="w-1/4 bg">
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
                    <h4 className="text-lg font-semibold">Menu</h4>
                    <ul className="mt-4">
                      <li className="flex items-center px-4 py-2 bg-blue-100  text-blue-600 rounded-md">
                        <i className="fas fa-user"></i>
                        <Link to={"/dashboard"} className="ml-3">
                          Profile
                        </Link>
                      </li>
                      <li className="flex items-center px-4 py-2 hover:bg-blue-100 hover:text-blue-600 text-gray-700  rounded-md">
                        <i className="fas fa-lock"></i>
                        <Link to={"/changePass"} className="ml-3">
                          Change Password
                        </Link>
                      </li>
                      <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
                        <i className="fas fa-file-alt"></i>
                        <Link to={"/terms"} className="ml-3">
                          Terms & Condition
                        </Link>
                      </li>
                      <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
                        <i className="fas fa-shield-alt"></i>
                        <Link to={"/privacy"} className="ml-3">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
              </div>
              <div className="w-3/4 bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700">
                  Privacy Policy
                </h3>
                <div className="mt-4 h-96 overflow-y-auto">
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis ante ornare, venenatis tortor sed, fringilla
                    ante. Morbi nec semper justo. Cras eget rhoncus urna, eu
                    fringilla nibh. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Nam
                    pretium eleifend neque, vel blandit erat iaculis id. Etiam
                    ut lectus vitae metus convallis condimentum quis cursus mi.
                    Aenean non varius enim. Pellentesque sit amet interdum
                    sapien. Fusce ac augue erat. Suspendisse sodales est et
                    laoreet fringilla. Duis justo mauris, semper et justo eu,
                    mollis porttitor eros.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Dolor sit amet, consectetur adipiscing elit. Fusce quis ante
                    ornare, venenatis tortor sed, fringilla ante. Morbi nec
                    semper justo. Cras eget rhoncus urna, eu fringilla nibh.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nam pretium eleifend neque,
                    vel blandit erat iaculis id. Etiam ut lectus vitae metus
                    convallis condimentum quis cursus mi. Aenean non varius
                    enim. Pellentesque sit amet interdum sapien. Fusce ac augue
                    erat. Suspendisse sodales est et laoreet fringilla. Duis
                    justo mauris, semper et justo eu, mollis porttitor eros.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Consectetur adipiscing elit. Fusce quis ante ornare,
                    venenatis tortor sed, fringilla ante. Morbi nec semper
                    justo. Cras eget rhoncus urna, eu fringilla nibh. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nam pretium eleifend neque,
                    vel blandit erat iaculis id. Etiam ut lectus vitae metus
                    convallis condimentum quis cursus mi. Aenean non varius
                    enim. Pellentesque sit amet interdum sapien. Fusce ac augue
                    erat. Suspendisse sodales est et laoreet fringilla. Duis
                    justo mauris, semper et justo eu, mollis porttitor eros.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Consectetur adipiscing elit. Fusce quis ante ornare,
                    venenatis tortor sed, fringilla ante. Morbi nec semper
                    justo. Cras eget rhoncus urna, eu fringilla nibh. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nam pretium eleifend neque,
                    vel blandit erat iaculis id. Etiam ut lectus vitae metus
                    convallis condimentum quis cursus mi. Aenean non varius
                    enim. Pellentesque sit amet interdum sapien. Fusce ac augue
                    erat. Suspendisse sodales est et laoreet fringilla. Duis
                    justo mauris, semper et justo eu, mollis porttitor eros.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Consectetur adipiscing elit. Fusce quis ante ornare,
                    venenatis tortor sed, fringilla ante. Morbi nec semper
                    justo. Cras eget rhoncus urna, eu fringilla nibh. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nam pretium eleifend neque,
                    vel blandit erat iaculis id. Etiam ut lectus vitae metus
                    convallis condimentum quis cursus mi. Aenean non varius
                    enim. Pellentesque sit amet interdum sapien. Fusce ac augue
                    erat. Suspendisse sodales est et laoreet fringilla. Duis
                    justo mauris, semper et justo eu, mollis porttitor eros.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Consectetur adipiscing elit. Fusce quis ante ornare,
                    venenatis tortor sed, fringilla ante. Morbi nec semper
                    justo. Cras eget rhoncus urna, eu fringilla nibh. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nam pretium eleifend neque,
                    vel blandit erat iaculis id. Etiam ut lectus vitae metus
                    convallis condimentum quis cursus mi. Aenean non varius
                    enim. Pellentesque sit amet interdum sapien. Fusce ac augue
                    erat. Suspendisse sodales est et laoreet fringilla. Duis
                    justo mauris, semper et justo eu, mollis porttitor eros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Privacy;
