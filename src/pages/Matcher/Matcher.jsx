import React from 'react'
import Upload from '../../components/Matcher/Upload/Upload'

const Matcher = () => {
  return (
    <section className='min-h-[calc(100vh-88px)] flex items-center pt-[90px] justify-center flex-col w-full' id='sketcher' data-aos="fade-right">
        <h2 className='text-primary select-none'>Matcher</h2>
        <p className='select-none'>Match the faces of the criminals in the database</p>
        <div className='w-full flex items-center justify-center rounded mt-4 bg-background custom-shadow px-5 py-5 min-h-[20rem] overflow-hidden'>
            <Upload />
        </div>
    </section>
  )
}

export default Matcher