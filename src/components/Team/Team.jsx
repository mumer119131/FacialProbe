import React from 'react'
import BG from '../../assets/bg.jpg'
import UMER from '../../assets/umer.jpg'
import USAMA from '../../assets/usama.jpg'
const Team = () => {
    return (
        <section id='team'>
            <h2 className='text-primary'>Team</h2>
            <p>"Uniting cutting-edge AI and a passion for justice, our team is solving crimes one sketch at a time."</p>
            <div className='flex flex-wrap gap-4 mt-4 justify-center'>
                <div className='rounded-lg bg-white custom-shadow'>
                    <img src={BG} width="400" alt="background image" className='rounded-lg' />
                    <div className='py-2 px-4 relative'>
                        <img className='circle border-4 border-lightGray h-[8rem] w-[8rem] top-[-4rem] left-[50%] translate-x-[-50%] absolute object-cover' src={UMER} alt="IMG" />
                        <h2 className='uppercase mt-20 font-light text-primary'>Web x Python Developer</h2>
                        <h2 className='font-bold  text-3xl tracking-wide text-primary'>Muhammad Umer</h2>
                        <h3 className='text-primary mb-4'>BSCS 8th <span className='text-sm font-light'>( 2019-ag-6081 )</span></h3>
                    </div>
                </div>
                <div className='rounded-lg bg-white custom-shadow'>
                    <img src={BG} width="400" alt="background image" className='rounded-lg' />
                    <div className='py-2 px-4 relative'>
                        <img className='circle border-4 border-lightGray h-[8rem] w-[8rem] top-[-4rem] left-[50%] translate-x-[-50%] absolute object-cover' src={USAMA} alt="IMG" />
                        <h2 className='uppercase mt-20 font-light text-primary'>Researcher</h2>
                        <h2 className='font-bold  text-3xl tracking-wide text-primary'>Usama Shabbir</h2>
                        <h3 className='text-primary mb-4'>BSCS 8th <span className='text-sm font-light'>( 2019-ag-6081 )</span></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team