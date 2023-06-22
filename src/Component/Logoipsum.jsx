import React from 'react';
import rasm from '../img/Logo(6).png';
import son from '../img/Image(1).png';

function Logoipsum() {
    return (
        <div>
            <div className='bg-[#D1F4F9]  h-[400px] flex items-center justify-center'>
                <div>
                    <img src={rasm} alt="Error" className='mx-auto mb-[30px]' />
                    <p className=' text-2xl text-center'>
                        “Always a pleasure to work with The Agency Creative. Such <br /> professional
                        and happy people and you know you’ll receive a quick <br /> innovative and
                        no fuss service.”
                    </p>
                    <div className='flex items-center justify-center mt-4'>
                        <img src={son} alt="Error" />
                        <div className='ml-3'>
                            <p className=' font-bold text-[20px] '>Johnatan Doe</p>
                            <p>Web Designer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center h-[500px] flex items-center justify-center'>
                <div>
                    <p className=' text-3xl font-bold'>
                        People have tried to predict the future since <br /> the dawn of time.
                    </p>
                    <button className=' bg-[#35AFBF] py-1 px-4 mt-3 rounded-md'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Logoipsum