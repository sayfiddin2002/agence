import React from 'react'

function Services() {
    return (
        <div className='max-w-[1137px] m-auto xl:px-0 px-[20px]'>
            <div className='text-center'>
                <p className='text-[38px] font-bold'>
                    We provide great services
                </p>
                <p className='text-[16px] pt-5 text-[#707273]'>
                    We help people to think independent. Be the boss of your brand and be the <br /> storyteller. An appropriate approach.
                </p>
            </div>

            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14'>
                <div className=' hover:bg-[#A3E0E8] text-center bg-amber-300 py-5 rounded-md'>
                    <div className='w-[83px] h-[83px] rounded-full bg-[#35AFBF] flex items-center justify-center mx-auto text-[35px]'>😀</div>
                    <p className=' text-[24px] font-bold py-2'>Web Design</p>
                    <p className='text-[#707273] leading-6 text-base'>Powerful creations for the <br /> practice safe design.</p>
                </div>
                <div className=' hover:bg-[#A3E0E8] text-center bg-amber-300 py-5 rounded-md'>
                    <div className='w-[83px] h-[83px] rounded-full bg-[#35AFBF] flex items-center justify-center mx-auto text-[35px]'>😀</div>
                    <p className=' text-[24px] font-bold py-2'>Identity & Branding</p>
                    <p className='text-[#707273] leading-6 text-base'>Powerful creations for the <br /> practice safe design.</p>
                </div>
                <div className=' hover:bg-[#A3E0E8] text-center bg-amber-300 py-5 rounded-md'>
                    <div className='w-[83px] h-[83px] rounded-full bg-[#35AFBF] flex items-center justify-center mx-auto text-[35px]'>😀</div>
                    <p className=' text-[24px] font-bold py-2'>Print and Packaging</p>
                    <p className='text-[#707273] leading-6 text-base'>Powerful creations for the <br /> practice safe design.</p>
                </div>
                <div className=' hover:bg-[#A3E0E8] text-center bg-amber-300 py-5 rounded-md'>
                    <div className='w-[83px] h-[83px] rounded-full bg-blue flex items-center justify-center mx-auto text-[35px]'>😀</div>
                    <p className=' text-[24px] font-bold py-2'>Content Writing</p>
                    <p className='text-[#707273] leading-6 text-base'>Powerful creations for the <br /> practice safe design.</p>
                </div>
            </div>
        </div>
    )
}

export default Services