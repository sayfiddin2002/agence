import React from 'react'

function Footer() {
    return (
        <div className='bg-[#2C353E] text-white'>
            <div className='max-w-[1137px] px-[20px] m-auto'>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                    <div className='my-[100px]'>
                        <p className='font-bold text-[28px] text-white'>Freelancer</p>
                        <div className='flex items-center'>
                            <sup>$</sup>
                            <p className=' text-[35px]'>19</p>
                            <sub className='mt-4 text-[#bebebe]'>/mo</sub>
                        </div>
                        <div className='text-[#bebebe]'>
                            <p className='py-[4px]'>5 Psd fles included</p>
                            <p className='py-[4px]'>24 hours free support</p>
                            <p className='py-[4px]'>Multiple features installed</p>
                            <p className='py-[4px]'>100 Elements PSD + Al</p>
                        </div>
                        <button className='my-[10px] rounded-md border-solid border-[#bebebe] border-[1px] py-[7px] px-5'>Subscribe</button>
                    </div>

                    <div className='my-[100px]'>
                        <p className='font-bold text-[28px]'>Corporate</p>
                        <div className='flex items-center'>
                            <sup>$</sup>
                            <p className=' text-[35px]'>24</p>
                            <sub className='mt-4 text-[#bebebe]'>/mo</sub>
                        </div>
                        <div className='text-[#bebebe]'>
                            <p className='py-[4px]'>5 Psd fles included</p>
                            <p className='py-[4px]'>24 hours free support</p>
                            <p className='py-[4px]'>Multiple features installed</p>
                            <p className='py-[4px]'>100 Elements PSD + Al</p>
                        </div>
                        <button className='my-[10px] rounded-md border-solid border-[#bebebe] border-[1px] py-[7px] px-5'>Subscribe</button>
                    </div>

                    <div className='my-[100px]'>
                        <p className='font-bold text-[28px]'>Agency</p>
                        <div className='flex items-center'>
                            <sup>$</sup>
                            <p className=' text-[35px]'>25</p>
                            <sub className='mt-4 text-[#bebebe]'>/mo</sub>
                        </div>
                        <div className='text-[#bebebe]'>
                            <p className='py-[4px]'>5 Psd fles included</p>
                            <p className='py-[4px]'>24 hours free support</p>
                            <p className='py-[4px]'>Multiple features installed</p>
                            <p className='py-[4px]'>100 Elements PSD + Al</p>
                        </div>
                        <button className='my-[10px] rounded-md border-solid border-[#bebebe] border-[1px] py-[7px] px-5'>Subscribe</button>
                    </div>

                    <div className='my-[100px]'>
                        <p className='font-bold text-[28px]'>Enterprise</p>
                        <div className='flex items-center'>
                            <sup>$</sup>
                            <p className=' text-[35px]'>15</p>
                            <sub className='mt-4 text-[#bebebe]'>/mo</sub>
                        </div>
                        <div className='text-[#bebebe]'>
                            <p className='py-[4px]'>5 Psd fles included</p>
                            <p className='py-[4px]'>24 hours free support</p>
                            <p className='py-[4px]'>Multiple features installed</p>
                            <p className='py-[4px]'>100 Elements PSD + Al</p>
                        </div>
                        <button className='my-[10px] rounded-md border-solid border-[#bebebe] border-[1px] py-[7px] px-5'>Subscribe</button>
                    </div>
                </div>

                <div className='flex justify-between '>
                    <div>
                        <nav>
                            <ul className='flex items-center text-white'>
                                <li className='mr-7'>
                                    <a href="#">Home</a>
                                </li>
                                <li className='mr-7'>
                                    <a href="#">Privacy</a>
                                </li>
                                <li className='mr-7'>
                                    <a href="#">Terms & Conditions</a>
                                </li>
                                <li className='mr-7'>
                                    <a href="#">About us</a>
                                </li>
                                <li className='mr-7'>
                                    <a href="#">Contact us</a>
                                </li>
                            </ul>
                        </nav>
                        <p className='text-[#bebebe] mt-1'>
                            @ A new era 2016. Awesome wireframe by Andrei Dorin
                        </p>
                    </div>

                    <div>
                    😀
                    😀
                    😀
                    😀
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer