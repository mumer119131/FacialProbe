import React from 'react'
import PrimaryButton from '../../Common/PrimaryButton/PrimaryButton'
import {BsCardImage} from 'react-icons/bs'
const Upload = () => {
    const inputRef = React.useRef(null)
    const handleClick = () => {
        inputRef.current.click()
    }
  return (
    <div className='flex flex-col items-center gap-4'>
        <div>
            <h2 className='text-center text-[3rem] font-bold select-none'><span className=''>Generate</span><span className=''> Sketches</span></h2>
            <p className='text-sm font-light text-center select-none'>Enter the required fields to generate the sketch</p>
        </div>
        <PrimaryButton onClick={handleClick} className='flex items-center justify-center gap-2'><BsCardImage /> Select A Image</PrimaryButton>
        <input ref={inputRef} className='hidden' type="file" name="" id="" placeholder='Select A Image' accept="image/*" />
    </div>
  )
}

export default Upload