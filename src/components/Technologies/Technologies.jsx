import React from 'react'
import { DiReact } from 'react-icons/di'
import { DiPython } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { AiFillHtml5 } from 'react-icons/ai'
const Technologies = () => {
    return (
        <section id='technologies' data-aos='fade-left'>
            <h2 className='text-primary'>Technologies</h2>
            <p>"At FaceSketch, we are constantly exploring and implementing the latest technologies to ensure that our sketches are of the highest quality and accuracy."</p>
            <div className='flex flex-wrap text-[6rem] justify-center gap-6 mt-4'>
                <DiReact />
                <DiPython />
                <IoLogoJavascript />
                <GiArtificialIntelligence />
                <AiFillHtml5 />
            </div>
        </section>
    )
}

export default Technologies