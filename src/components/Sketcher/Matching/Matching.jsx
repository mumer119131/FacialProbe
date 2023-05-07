import React from 'react'

const Matching = ({matchingImage, image}) => {
  return (
    <div className='flex gap-4 flex-wrap items-center justify-center'>
      <div className='relative rounded-lg overflow-hidden'>
        <p className='absolute left-2 top-2 bg-darkGray text-white px-4 rounded-full text-sm py-1 hover:shadow-lg shadow-primary'>Sketch</p>
        <img src={image} alt='matching image' className='object-cover w-[30rem] h-[30rem]'/>
      </div>
      <div className='relative rounded-lg overflow-hidden'>
        <p className='absolute left-2 top-2 bg-darkGray text-white px-4 rounded-full text-sm py-1 hover:shadow-lg shadow-primary'>Match</p>
        <img src={matchingImage} alt='matching image' className='object-cover w-[30rem] h-[30rem]'/>
      </div>
    </div>
  )
}

export default Matching