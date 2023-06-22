import React from 'react';
import rasm from '../img/Hero.png'

function Header() {
    return (
        <div className='bg-[#F3FEFF] w-full'>
            <div className='  max-w-[1137px] m-auto md:flex py-[80px] items-center  md:justify-between'>
                <div>
                    <h1 className='font-bold text-[50px]'>
                        <span className='text-[#32A3B2]'>Make</span> a Creative <br /> solutions for your <br /> Creative <span className='text-[#32A3B2]'>ideas</span>
                    </h1>
                    <p className='my-4 text-xl text-[#707273]'>
                        We are here to give you effective ideas. We help <br /> the brands to become what they want.
                    </p>

                    <button className='bg-[#35AFBF] py-4 px-8 rounded text-white text-xl'>Get Started</button>
                </div>
                <div className='w-[100%] h-auto md:w-[50%] flex justify-end'>
                    <img className='h-auto w-full ' src={rasm} alt="Error" />
                </div>
            </div>
        </div>
    )
}

export default Header