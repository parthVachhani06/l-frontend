import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header>
        <div>
            <nav>
                <a></a>
                <ul className='flex justify-between'>
                    <li>
                        <Link to={"/"}>Register</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                      <Link to={"/forgetPass"}>forgetPass</Link>
                    </li>
                    <li>
                      <Link to={"/otp"}>otp</Link>
                    </li>
                    <li>
                      <Link to={"/reset"}>reset</Link>
                    </li>
                    <li>
                      <Link to={"/dashboard"}>dashboard</Link>
                    </li>
                    <li>
                      <Link to={"/edit"}>edit</Link>
                    </li>
                    <li>
                      <Link to={"/changePass"}>changePass</Link>
                    </li>
                    <li>
                      <Link to={"/terms"}>terms</Link>
                    </li>
                    <li>
                      <Link to={"/privacy"}>privacy</Link>
                    </li>
                    <li>
                      <Link to={"/doctorMangement"}>doctorMangement</Link>
                    </li>
                    <li>
                      <Link to={"/addDoc"}>addDoc</Link>
                    </li>
                    <li>
                      <Link to={"/patient"}>patient</Link>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
