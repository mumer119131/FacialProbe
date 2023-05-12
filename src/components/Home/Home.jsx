import React from 'react'
import PERSON from '../../assets/person1.png'
import LOGO from '../../assets/fb_logo.png'
import { MdArrowForwardIos } from 'react-icons/md'
import PrimaryButton from '../Common/PrimaryButton/PrimaryButton'
import SecondaryButton from '../Common/SecondaryButton/SecondaryButton'

const Home = () => {
    return (
        <section className='min-h-screen flex items-center pt-[90px] justify-center flex-col w-full' data-aos="fade-right">
            <div className='flex items-center flex-wrap mt-12'>
                <div className='flex items-center flex-col'>
                    <h1 className='text-[5rem] font-bold text-center'><span className='green__gradient__text'>Sketch</span> Justice with <span className='orange__gradient__text'>AI.</span></h1>
                    <p className='text-center'>FaceSketch AI is a cutting-edge website that uses advanced machine learning algorithms to generate sketches of suspected individuals based on inputted facial characteristics.</p>
                    <div className='mt-10 flex flex-wrap gap-4'>
                        <a href="#sketcher"><PrimaryButton className='flex items-center gap-1'>Start Sketch</PrimaryButton></a>
                        <a href="#about"><SecondaryButton className='border-primary border-2 px-4 py-2 rounded-full hover:border-lightPrimary hover:bg-lightPrimary hover:tracking-wider transition-all'>Learn more</SecondaryButton></a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home