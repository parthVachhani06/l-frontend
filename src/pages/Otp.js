import React, { useEffect, useState } from "react";
import img from "../images/Group 1116602997.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Otp = () => {
  const [otpInput, setOtpInput] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const [isOtpValid, setIsOtpValid] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const { otp, email } = location.state;

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtpInput = [...otpInput];
    newOtpInput[index] = element.value;
    setOtpInput(newOtpInput);
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown); 
    } else {
      setIsOtpValid(false); 
    }
  }, [timer]);

  const verifyOTP = (e) => {
    e.preventDefault();
    const enteredOtp = otpInput.join("");
    if (enteredOtp === otp && isOtpValid) {
      alert("OTP verified successfully!");
      navigate("/reset", { state: { email } });
    } else {
      alert(isOtpValid ? "Invalid OTP, please try again." : "OTP has expired.");
      console.log(otp);
    }
  };

  

  return (
    <div>
      <div>
        <div className="w-full mx-auto bg-white rounded-lg shadow-lg flex items-center">
          <div className="w-1/2 p-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-[500px] mx-9">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Enter OTP
              </h2>
              <p className="text-gray-600 mb-6">
                Please enter the 6-digit code sent to your phone number.
              </p>
              <form onSubmit={verifyOTP}>
                <div className="flex space-x-2 mb-6">
                  {otpInput.map((data, index) => {
                    return (
                      <input
                        key={index}
                        type="text"
                        className="w-12 h-12 border rounded-lg text-center text-xl"
                        maxLength="1"
                        value={data}
                        onChange={(e) => handleOtpChange(e.target, index)}
                      />
                    );
                  })}
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-600">
                    <i className="far fa-clock mr-2"></i>
                    <span>{`00:${timer.toString().padStart(2, "0")} sec`}</span>
                  </div>
                  <Link to={"/forgetPass"}
                  type="button"
                  className="text-blue-600"
                >
                  Resend OTP
                </Link>
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 ${
                    isOtpValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400"
                  } text-white font-semibold rounded-lg`}  disabled={!isOtpValid}
                >
                  Verify
                </button>
              </form>
            </div>
          </div>
          <div className="w-1/2 bg-blue-50 p-10 relative">
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-2xl font-bold text-blue-600 mb-2">
                Hospital
              </h1>
              <img
                src={img}
                alt="Illustration of a person using medical technology"
              />
              <p className="text-gray-600 mb-6">
                You can stay in touch with your hospital and facility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
