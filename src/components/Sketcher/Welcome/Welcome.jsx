import React from 'react'
import AGENT from '../../../assets/agent.png'
const Welcome = (props) => {
    const { screens, selectedScreen, setSelectedScreen } = props
    const handleNext = () => {
        const currentIndex = screens.indexOf(selectedScreen)
        const nextScreen = screens[currentIndex + 1]
        setSelectedScreen(nextScreen)
    }
    return (
        <div className='flex items-center flex-col'>
            <h2 className='text-center text-3xl font-bold text-primary'>Generate the Sketches</h2>
            <p className='text-sm font-light'>(Enter the required fields to generate the sketch)</p>
            {/* <img src={AGENT} alt='agent' className='drop-shadow-lg' /> */}
            <button className='text-center bg-primary w-max text-white px-6 py-2 rounded mt-4' onClick={handleNext}>LET'S START</button>
        </div>
    )
}

export default Welcome