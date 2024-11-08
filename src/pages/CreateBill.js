import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

const CreateBill = () => {


  const [billValue,setBillValue] =  useState({});

  const getBillValue = (e)=>{
    let name = e.target.name;
    let value =e.target.value;
    setBillValue({...billValue,[name]:value})
  }

  const submitValue = (e)=>{
    e.preventDefault();
    console.log(billValue)
  }

  return (
    <div>
      <div className="flex">
                    <aside className="w-64 bg-white h-full shadow-md fixed top-0 bottom-0">
                        <div className="p-6">
                            <div className="flex items-center">
                                <img src="https://placehold.co/40x40" alt="Hospital Logo" className="mr-2"/>
                                <div>
                                    <h1 className="text-xl font-bold text-blue-500">Hospital</h1>
                                    <p className="text-sm text-gray-500">tagline here</p>
                                </div>
                            </div>
                        </div>
                        <nav className="mt-6">
                            <ul>
                                <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100">
                                    <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
                                </li>
                                <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100">
                                    <i className="fas fa-user-md mr-3"></i> Doctor Management
                                </li>
                                <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100">
                                    <i className="fas fa-users mr-3"></i> Patient Management
                                </li>
                                <li className="p-2 text-gray-600 hover:bg-gray-100">
                                    <i className="fas fa-file-invoice-dollar mr-3"></i> Billing And Payments
                                    <ul className="ml-6 mt-2 ">
                                        <li className="flex items-center p-2 text-blue-500 bg-gray-100 rounded">
                                        <i className="fas fa-eye mr-2"></i> Monitor Billing
                                        </li>
                                        <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100">
                                        <i className="fas fa-file-alt mr-2"></i> Insurance Claims
                                        </li>
                                        <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100">
                                            <i className="fas fa-credit-card mr-2"></i> Payment Process
                                        </li>
                                    </ul>
                                </li>
                                <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100">
                                    <i className="fas fa-chart-bar mr-3"></i> Reporting And Analytics
                                </li>
                            </ul>
                        </nav>
                        <div className=" w-full p-3 bg-red-100 text-red-500 flex items-center mt-24">
                            <i className="fas fa-sign-out-alt mr-3"></i> Logout
                        </div>
                    </aside>
                    <main className="p-6 w-[1080px] ml-auto">
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-gray-500">
                                <span>Billing And Payments</span> &gt; <span>Monitor Billing</span>
                            </div>
                            <div className="flex items-center">
                                <input type="text" placeholder="Quick Search" className="border rounded p-2 mr-4"/>
                                <i className="fas fa-bell text-gray-500 mr-4"></i>
                                <div className="flex items-center">
                                    <img src="https://placehold.co/40x40" alt="Admin" className="rounded-full mr-2"/>
                                    <div>
                                        <p className="text-gray-700">Lincoln Philips</p>
                                        <p className="text-gray-500 text-sm">Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded shadow-md">
                            <h2 className="text-xl font-bold mb-4">Create Bill</h2>
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Hospital Details</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="col-span-1 border-dashed border-2 border-gray-300 p-4 text-center">
                                        <p className="text-blue-500">Upload a file or drag and drop</p>
                                        <p className="text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                    <div className="col-span-2 grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Enter Name" className="border rounded p-2" name='name' value={billValue.name?billValue.name:""} onChange={(e)=>getBillValue(e)} />
                                        <input type="text" name='other' value={billValue.other?billValue.other:""} placeholder="Enter Other Text" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                        <input type="text" name='email' value={billValue.email?billValue.email:""} placeholder="Enter Email" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                        <input type="date" name='date' value={billValue.date?billValue.date:""} placeholder="Select Bill Date" className="border rounded p-2" onChange={(e)=>getBillValue(e)} />
                                        <input type="time" name='time' value={billValue.time?billValue.time:""} placeholder="Enter Bill Time" className="border rounded p-2" onChange={(e)=>getBillValue(e)} />
                                        <input type="text" name='billnumber' value={billValue.billnumber?billValue.billnumber:""} placeholder="Enter Bill Number" className="border rounded p-2" onChange={(e)=>getBillValue(e)} />
                                        <input type="text" name='number' value={billValue.number?billValue.number:""} placeholder="Enter Phone Number" className="border rounded p-2" onChange={(e)=>getBillValue(e)} />
                                        <input type="text" name='address' value={billValue.address?billValue.address:""} placeholder="Enter Address" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                    </div>
                                    <button className="col-span-3 bg-blue-500 text-white p-2 rounded">Add New Field</button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Patient Details</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <input type="text" name='patient_name' value={billValue.patient_name?billValue.patient_name:""} placeholder="Enter Name" className="border rounded p-2" onChange={(e)=>getBillValue(e)} />
                                    <input type="text" name='disease_name' value={billValue.disease_name?billValue.disease_name:""} placeholder="Enter Disease Name" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                    <input type="text" name='docname' value={billValue.docname?billValue.docname:""} placeholder="Enter Doctor Name" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                    <input type="text" name='desc' value={billValue.desc?billValue.desc:""} placeholder="Enter Description" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                    <input type="text" name='discount' value={billValue.discount?billValue.discount:""} placeholder="₹ 0000" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                    <input type="text" name='tax' value={billValue.tax?billValue.tax:""} placeholder="₹ 0000" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                    <input type="text" name='amount' value={billValue.amount?billValue.amount:""} placeholder="₹ 0000" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                    <input type="text" name='total_amount' value={billValue.total_amount?billValue.total_amount:""} placeholder="₹ 0000" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                    <select name='payment' value={billValue.payment?billValue.payment:""} className="border rounded p-2" onChange={(e)=>getBillValue(e)}>
                                        <option>Select Payment Type</option>
                                        <option value={"online"}>Online</option>
                                        <option value={"offline"}>Offline</option>
                                    </select>
                                    <input type="text" name='age' value={billValue.age?billValue.age:""} placeholder="Enter Age" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                    <select name='gender' value={billValue.gender?billValue.gender:""} className="border rounded p-2" onChange={(e)=>getBillValue(e)}>
                                        <option>Select Gender</option>
                                        <option value={"male"}>Male</option>
                                        <option value={"female"}>Female</option>
                                        <option value={"other"}>Other</option>
                                    </select>
                                    <input type="text" name='patient_add' value={billValue.patient_add?billValue.patient_add:""} placeholder="Enter Address" className="border rounded p-2" onChange={(e)=>getBillValue(e)}/>
                                    <button className="col-span-3 bg-blue-500 text-white p-2 rounded">Add New Field</button>
                                </div>
                            </div>
                            <button className="mt-6 bg-blue-500 text-white p-2 rounded" onClick={(e)=>submitValue(e)}>Save</button>
                        </div>
                    </main>
                </div>
    </div>
  )
}

export default CreateBill;
