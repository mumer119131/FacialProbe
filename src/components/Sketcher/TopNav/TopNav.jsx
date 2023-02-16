import React from 'react'

const TopNav = (props) => {
    const { screens, selectedScreen, setSelectedScreen } = props

    return (
        <ul className='flex justify-center gap-2 capitalize tracking-wider mb-4'>
            {screens.slice(1, screens.length).map((screen, index) => {
                return (
                    <li key={index} className={`cursor-pointer hover:tracking-widest transition-all ${selectedScreen === screen ? 'text-primary font-bold' : 'font-light'}`} onClick={() => setSelectedScreen(screen)}>
                        {screen} <span className='font-bold'>&gt;</span>
                    </li>
                )
            }
            )}
        </ul>
    )
}

export default TopNav