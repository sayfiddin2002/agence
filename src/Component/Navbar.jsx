import React from 'react'
import logo from '../img/Logo(5).png';

function Navbar() {
  return (
    <div className='w-full bg-[#F3FEFF] px-5'>
      <div className='max-w-[1137px] m-auto flex items-center justify-between py-4'>

        <div>
          <img src={logo} alt="Error" />
        </div>

        <i className="bi bi-list text-4xl"></i>

        <div >
          <nav>
            <ul className=' flex items-center'>
              <li className=' mx-3'>
                <a href="#">Home</a>
              </li>
              <li className=' mx-3'>
                <a href="#">Services</a>
              </li>
              <li className=' mx-3'>
                <a href="#">About</a>
              </li>
              <li className=' mx-3'>
                <a href="#">The Team</a>
              </li>
              <li className=' mx-3'>
                <a href="#">Pricing</a>
              </li>
              <li className=' mx-3'>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <button className=' bg-[#35AFBF] py-3 px-6 rounded'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar