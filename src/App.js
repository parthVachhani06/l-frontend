import Navbar from "./componets/Navbar";
import Forget from "./pages/Forget";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ResetPassword from "./pages/ResetPassword";
import DashBoard from "./pages/DashBoard";
import EditProfile from "./pages/EditProfile";
import ChangePass from "./pages/ChangePass";
import TermCondition from "./pages/TermCondition";
import Privacy from "./pages/Privacy";
import DoctorManagement from "./pages/DoctorManagement";
import AddDoctor from "./pages/AddDoctor";
import Patient from "./pages/Patient";
import PatientDetails from "./pages/PatientDetails";
import PrescriptionAccess from "./pages/PrescriptionAccess";
import AppointmentBooking from "./pages/AppointmentBooking";
import BookAppointment from "./pages/BookAppointment";
import PreviousAppointment from "./pages/PreviousAppointment";
import CancelAppointment from "./pages/CancelAppointment";
import PendingAppointment from "./pages/PendingAppointment";
import PatientEdit from "./pages/PatientEdit";
import PatientManagement from "./pages/PatientManagement";
import Doctor from "./pages/Doctor";
import DoctorEdit from "./pages/DoctorEdit";
import DocChangePass from "./pages/DocChangePass";
import DocPrivacy from "./pages/DocPrivacy";
import DocTerms from "./pages/DocTerms";
import Calender from "./componets/Calender";
import AppointmentsPage from "./pages/AppointmentsPage";
import CreateAppointmentPage from "./pages/CreateAppointmentPage";
import AppointmentSlot from "./pages/AppointmentSlot";
import TodayAppointment from "./pages/TodayAppointment";
import CreateBill from "./pages/CreateBill";

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetPass" element={<Forget/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/reset" element={<ResetPassword/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/edit" element={<EditProfile/>}/>
        <Route path="/changePass" element={<ChangePass/>}/>
        <Route path="/terms" element={<TermCondition/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/doctorMangement" element={<DoctorManagement/>}/>
        <Route path="/patientManagement" element={<PatientManagement/>}/>
        <Route path="/addDoc" element={<AddDoctor/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/docChangePass" element={<DocChangePass/>}/>
        <Route path="/docPrivacy" element={<DocPrivacy/>}/>
        <Route path="/docTerms" element={<DocTerms/>}/>
        <Route path="/doctorEdit" element={<DoctorEdit/>}/>
        <Route path="/patient" element={<Patient/>}/>
        <Route path="/patientDetails" element={<PatientDetails/>}/>
        <Route path="/patientEdit" element={<PatientEdit/>}/>
        <Route path="/prescriptionAccess" element={<PrescriptionAccess/>}/>
-        <Route path="/appointmentBooking" element={<AppointmentBooking/>}/>
        <Route path="/bookAppointment" element={<BookAppointment/>}/>
        <Route path="/previousAppointment" element={<PreviousAppointment/>}/>
        <Route path="/cancelAppointment" element={<CancelAppointment/>}/>
        <Route path="/pendingAppointment" element={<PendingAppointment/>}/>
        <Route path="/appointments" element={<AppointmentsPage/>}/>
        <Route path="/create-appointment" element={<CreateAppointmentPage/>}/>
        <Route path="/appoinment-timeslot" element={<AppointmentSlot/>}/>
        <Route path="/today-appoinment" element={<TodayAppointment/>}/>
        <Route path="/create-bill" element={<CreateBill/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}
const validate = () => {
  let tempErrors = {};

  // if (!registerData.FirstName) tempErrors.FirstName = "First Name is required";
  // if (!registerData.LastName) tempErrors.LastName = "Last Name is required";
  // if (!registerData.email) tempErrors.email = "Email is required";
  // else if (!/\S+@\S+\.\S+/.test(registerData.email)) tempErrors.email = "Email is invalid";

  // if (!registerData.number) tempErrors.number = "Phone Number is required";
  // else if (!/^\d{10}$/.test(registerData.number)) tempErrors.number = "Phone Number must be 10 digits";

  // if (!registerData.pass) tempErrors.pass = "Password is required";
  // else if (registerData.pass.length < 6) tempErrors.pass = "Password must be at least 6 characters";

  // if (!registerData.ConfirmPass) tempErrors.ConfirmPass = "Confirm Password is required";
  // else if (registerData.pass !== registerData.ConfirmPass) tempErrors.ConfirmPass = "Passwords do not match";

  // if (!registerData.Country) tempErrors.Country = "Country is required";
  // if (!registerData.State) tempErrors.State = "State is required";
  // if (!registerData.City) tempErrors.City = "City is required";
  // if (!registerData.Gender) tempErrors.Gender = "Gender is required";
  // if (!registerData.Hospital) tempErrors.Hospital = "Hospital is required";

  // setErrors(tempErrors);

  // return Object.keys(tempErrors).length === 0;
};


export default App;
