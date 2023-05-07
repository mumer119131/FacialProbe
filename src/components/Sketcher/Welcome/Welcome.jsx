import React from 'react'
import AGENT from '../../../assets/agent.png'
import PrimaryButton from '../../Common/PrimaryButton/PrimaryButton'
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
            <PrimaryButton className='mt-4' onClick={handleNext}>LET'S START</PrimaryButton>
        </div>
    )
}

export default Welcome