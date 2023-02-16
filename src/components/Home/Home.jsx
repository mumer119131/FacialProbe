import React from 'react'
import PERSON from '../../assets/person1.png'
import LOGO from '../../assets/fb_logo.png'
import { MdArrowForwardIos } from 'react-icons/md'
const Home = () => {
    return (
        <section data-aos="fade-right">
            <div className='flex items-center flex-wrap'>
                <div className='basis-auto lg:basis-[50%]'>
                    <div className='flex items-center gap-1 mb-2'>
                        <img src={LOGO} alt='logo' width='35' />
                        <h1 className='text-5xl font-bold text-primary'>Facial <span className='text-lightPrimary'>Probe</span></h1>
                    </div>
                    <p>FaceSketch AI is a cutting-edge website that uses advanced machine learning algorithms to generate sketches of suspected individuals based on inputted facial characteristics. The website is designed to assist police and law enforcement agencies in their investigations by providing them with a quick and easy way to create accurate sketches of suspects. With its user-friendly interface and powerful algorithms, FaceSketch AI is an essential tool for solving crimes and bringing perpetrators to justice.</p>
                    <div className='mt-4 flex flex-wrap gap-2'>
                        <a href="#sketcher"><button className='flex items-center gap-1 bg-primary px-4 py-2 uppercase h-full rounded text-white hover:tracking-wider hover:bg-lightPrimary transition-all'>Get Started  &gt;</button></a>
                        <a href="#about"><button className='border-primary border-2 px-4 py-2 rounded hover:border-lightPrimary hover:bg-lightPrimary hover:tracking-wider transition-all'>Learn more</button></a>
                    </div>
                </div>
                <div>
                    <img className='basis-[50%] object-cover h-[40rem]' src={PERSON} alt="PERSON IMAGE" />
                </div>
            </div>

        </section>
    )
}

export default Home