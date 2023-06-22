import React from 'react';
import rasm from '../img/Image.png';

function Johnatan() {
    return (
        <div className='max-w-[1137px] px-[20px] m-auto w-full  xl:px-0  my-8 py-12 sm:flex items-center'>
            <div className=' sm:w-[50%]'>
                <p className=' text-[40px] font-bold'>
                    Johnatan Doe
                </p>
                <div className='flex items-end'>
                    <p className='font-bold text-base text-[#707273]'>Marketing Specialist</p>
                    <div className='w-[55px] h-[1px] bg-[#707273] ml-3 mb-[4px]'></div>
                </div>
                <p className='text-[#707273] py-6'>
                    To make your web design company famous in the little we are here
                    to provide you as many as catchy and useful web design company
                    will surely help your company.
                </p>
                <button className=' w-[120px] text-[16px]  py-[7px]  text-[#35AFBF] border-solid border-[#35AFBF] border-[1px]'>Learn More</button>
            </div>

            <div className=' sm:w-[50%] flex justify-end mt-8'>
                <img className='w-full sm:w-[80%]' src={rasm} alt="" />
            </div>
        </div>
    )
}

export default Johnatan