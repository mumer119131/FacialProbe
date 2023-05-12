import React, { useEffect } from 'react'
import PrimaryButton from '../Common/PrimaryButton/PrimaryButton'
import SecondaryButton from '../Common/SecondaryButton/SecondaryButton'
import { animate } from 'framer-motion'

const Home = () => {
    const textItems = [{name : 'sketch', color_one : '#4ba39f', color_two : '#01d17b'},
                        {name : 'justice', color_one : '#da6206', color_two : '#d1cb01'},
                        {name : 'with', color_one : '#1488CC', color_two : '#2B32B2'},
                        {name : 'AI', color_one : '#cc2b5e', color_two : '#753a88'}
                ]
    const [activeText, setActiveText] = React.useState(textItems[0])
    const [isButtonHovered, setIsButtonHovered] = React.useState(false)
    const TextGradientGenerator = () => {
        return {
            background: `linear-gradient(90deg, ${activeText.color_one} 0%, ${activeText.color_two} 100%) 0 0 / 400% 100%`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation : 'moving-gradient 8s linear infinite' 
        }
    }

    const ButtonGradient = () => {
        return {
            background: `linear-gradient(90deg, ${activeText.color_one} 0%, ${activeText.color_two} 100%)`,
        }
    }
    const defaultGradient = {
        background: `transparent`,
        // WebkitBackgroundClip: 'text',
        // WebkitTextFillColor: 'transparent',
        // animation : 'moving-gradient 8s linear infinite' 
    }
    useEffect(()=>{
        let i = 0
        const interval = setInterval(() => {
            if(i == textItems.length-1){
                i = 0
            }
            else{
                i++
            }
            console.log(textItems)
            setActiveText(textItems[i])
        }, 1500);
        return () => clearInterval(interval);
    }, [])
    return (
        <section className='min-h-screen flex items-center pt-[90px] justify-center flex-col w-full' data-aos="fade-right">
            <div className='flex items-center flex-wrap mt-12'>
                <div className='flex items-center flex-col'>
                    <h1 className='text-[5rem] font-bold text-center'>
                        <span className='custom__transition' style={activeText.name == 'sketch' ? TextGradientGenerator() : defaultGradient}>Sketch</span> 
                        <span className='custom__transition' style={activeText.name == 'justice' ? TextGradientGenerator() : defaultGradient}> Justice</span> 
                        <span className='custom__transition' style={activeText.name == 'with' ? TextGradientGenerator() : defaultGradient}> with</span> 
                        <span className='custom__transition' style={activeText.name == 'AI' ? TextGradientGenerator() : defaultGradient}> AI.</span></h1>
                    <p className='text-center'>FaceSketch AI is a cutting-edge website that uses advanced machine learning algorithms to generate sketches of suspected individuals based on inputted facial characteristics.</p>
                    <div className='mt-10 flex flex-wrap gap-4'>
                        <a href="#sketcher"><PrimaryButton className='flex items-center gap-1'>Start Sketch</PrimaryButton></a>
                        <a href="#about"><SecondaryButton onMouseEnter={()=> setIsButtonHovered(true)} onMouseLeave={()=> setIsButtonHovered(false)} className={`custom__transition border-[${activeText.color_one}]`} style={{
                                                                                boxShadow: ` 5px -2px 73px 5px ${activeText.color_one}}`,
                                                                                WebkitBoxShadow: ` 5px -2px 73px 5px ${activeText.color_one}`,
                                                                                MozBoxShadow: ` 5px -2px 73px 5px ${activeText.color_one}`,
                                                                                background: isButtonHovered && `linear-gradient(90deg, ${activeText.color_one} 0%, ${activeText.color_two} 100%)`,
                                                                                color : isButtonHovered && 'black',
                                                                                border : isButtonHovered ? 'none' : `2px solid ${activeText.color_one}`,
                                                                            }}>Learn more</SecondaryButton></a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home