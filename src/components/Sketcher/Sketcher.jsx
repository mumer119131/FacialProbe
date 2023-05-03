import React, { useEffect, useState } from 'react'
import Eyes from './Eyes/Eyes'
import Welcome from './Welcome/Welcome'
import Nose from './Nose/Nose'
import Lips from './Lips/Lips'
import Cheeks from './Cheeks/Cheeks'
import Chin from './Chin/Chin'
import Forehead from './Forehead/Forehead'
import Hair from './Hair/Hair'
import General from './General/General'
import TopNav from './TopNav/TopNav'
import Detective from '../../assets/detective.png'

const Sketcher = () => {
    const screens = ['welcome', 'general', 'eyes', 'nose', 'lips', 'cheeks', 'chin', 'forehead', 'hair']

    const [selectedScreen, setSelectedScreen] = useState('welcome')

    // General Properties

    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [skinColor, setSkinColor] = useState('')
    const [skinTexture, setSkinTexture] = useState('')


    // Eye Properties
    const [eyeShape, setEyeShape] = useState('')
    const [eyeBrowShape, setEyeBrowShape] = useState('')
    const [eyeColor, setEyeColor] = useState('')
    const [pupilShape, setPupilShape] = useState('')
    const [irisPattern, setIrisPattern] = useState('')
    const [eyeSize, setEyeSize] = useState('')
    const [eyelashes, setEyelashes] = useState('')
    const [eyeSocketShape, setEyeSocketShape] = useState('')
    const [eyeLidWrinkles, setEyeLidWrinkles] = useState('')
    const [distanceBetweenEyes, setDistanceBetweenEyes] = useState('')

    // Nose Properties

    const [noseShape, setNoseShape] = useState('')
    const [noseBridge, setNoseBridge] = useState('')
    const [noseTip, setNoseTip] = useState('')
    const [noseNostrilFlare, setNoseNostrilFlare] = useState('')
    const [noseNostrilShape, setNoseNostrilShape] = useState('')
    const [noseNostrilSize, setNoseNostrilSize] = useState('')
    const [noseNostrilPlacement, setNoseNostrilPlacement] = useState('')
    const [noseRidge, setNoseRidge] = useState('')
    const [noseNasalSeptumDeviation, setNoseNasalSeptumDeviation] = useState('')

    // Lips Properties
    const [lipShape, setLipShape] = useState('')
    const [lipColor, setLipColor] = useState('')
    const [cupidBow, setCupidBow] = useState('')
    const [lipThickness, setLipThickness] = useState('')
    const [lipTexture, setLipTexture] = useState('')
    const [lipWrinkles, setLipWrinkles] = useState('')
    const [lipVolume, setLipVolume] = useState('')
    const [lipPosition, setLipPosition] = useState('')
    const [lipScarring, setLipScarring] = useState('')
    const [lipSize, setLipSize] = useState('')
    const [lipPucker, setLipPucker] = useState('')
    const [lipSmile, setLipSmile] = useState('')


    // Cheeks Properties
    const [cheekShape, setCheekShape] = useState('')
    const [cheekFullness, setCheekFullness] = useState('')
    const [cheekboneShape, setCheekboneShape] = useState('')
    const [smileLines, setSmileLines] = useState('')
    const [cheekBlush, setCheekBlush] = useState('')
    const [sunkenCheeks, setSunkenCheeks] = useState('')
    const [dimples, setDimples] = useState('')
    const [facialHair, setFacialHair] = useState('')
    const [cheekMoles, setCheekMoles] = useState('')
    const [cheekScarring, setCheekScarring] = useState('')

    // Chin Properties
    const [chinShape, setChinShape] = useState('')
    const [chinPointiness, setChinPointiness] = useState('')
    const [chinSize, setChinSize] = useState('')
    const [chinDimples, setChinDimples] = useState('')
    const [chinCleft, setChinCleft] = useState('')
    const [chinBoneProminence, setChinBoneProminence] = useState('')
    const [chinFacialHair, setChinFacialHair] = useState('')
    const [chinMoles, setChinMoles] = useState('')
    const [chinScarring, setChinScarring] = useState('')
    const [chinSkinTexture, setChinSkinTexture] = useState('')

    // Forehead Properties
    const [foreheadShape, setForeheadShape] = useState('')
    const [foreheadHeight, setForeheadHeight] = useState('')
    const [foreheadSlope, setForeheadSlope] = useState('')
    const [browRidgeProminence, setBrowRidgeProminence] = useState('')
    const [foreheadWrinkles, setForeheadWrinkles] = useState('')
    const [foreheadHairline, setForeheadHairline] = useState('')
    const [foreheadSweatGlands, setForeheadSweatGlands] = useState('')
    const [foreheadVeins, setForeheadVeins] = useState('')
    const [foreheadMoles, setForeheadMoles] = useState('')
    const [foreheadScarring, setForeheadScarring] = useState('')

    // Hair Properties
    const [hairColor, setHairColor] = useState('')
    const [hairTexture, setHairTexture] = useState('')
    const [hairLength, setHairLength] = useState('')
    const [hairThickness, setHairThickness] = useState('')
    const [hairDensity, setHairDensity] = useState('')
    const [hairPart, setHairPart] = useState('')
    const [hairStyle, setHairStyle] = useState('')
    const [hairHighlights, setHairHighlights] = useState('')
    const [baldness, setBaldness] = useState('')
    const [scalpMarkings, setScalpMarkings] = useState('')



    const handleBack = () => {
        const currentIndex = screens.indexOf(selectedScreen)
        const previousScreen = screens[currentIndex - 1]
        setSelectedScreen(previousScreen)
    }
    const handleNext = () => {

        const currentIndex = screens.indexOf(selectedScreen)

        if (currentIndex === screens.length - 1) {
            return generateImage()
        }
        const nextScreen = screens[currentIndex + 1]
        setSelectedScreen(nextScreen)
    }
    const generateImage = () => {
        const prompt = `A ${gender.label} person of ${age.label} age with ${skinColor.label} skin color and ${skinTexture.label} skin texture , ${eyeShape.label} eye shape, ${eyeBrowShape.label} eye brow shape, ${eyeColor.label} eye color, ${pupilShape.label} pupil color, ${irisPattern.label} iris pattern, ${eyeSize.label} eye size, ${eyelashes.label} eye lashes, ${eyeSocketShape.label} eye socket shape, ${eyeLidWrinkles.label} eye lid rinkles, ${distanceBetweenEyes.label} distance between eyes, with ${noseShape.label} nose shape , ${noseBridge.label} nose bridge, ${noseTip.label} nose tip, ${noseNostrilFlare.label} nose nostril flare, ${noseNostrilSize.label} nose nostril size, ${noseNostrilShape.label} nose nostril shape, ${noseNostrilPlacement.label} nose nostril placement, ${noseRidge.label} nose ridge, ${noseNasalSeptumDeviation.label} nose nasal septum devitaion, and with lips as ${lipShape.label} lips shape, ${lipColor.label} lip color, ${cupidBow.label} lips cupid bow, ${lipThickness.label} lip thickness, ${lipTexture.label} lip texture, ${lipWrinkles.label} lip wrinkles, ${lipVolume.label} lip volume, ${lipPosition.label} lip Position, ${lipScarring.label} lip scarring, ${lipSize.label} lip size, ${lipPucker.label} lip pucker, ${lipSmile.label} lip smile and with cheeks as ${cheekShape.label} cheek shape, ${cheekFullness.label} cheeck fullness, ${cheekboneShape.label} cheek bone shape, ${smileLines.label} cheeks smile line, ${cheekBlush.label} cheek blush, ${sunkenCheeks.label} sunken cheeks, ${dimples.label} cheek dimples, ${facialHair.label} facial hair, ${cheekMoles.label} cheek moles, ${cheekScarring.label} cheek scarring, with chin as ${chinShape.label} chin shape, ${chinPointiness.label} chin pointiness, ${chinSize.label} chin size, ${chinDimples.label} chin dimples, ${chinCleft.label} chin cleft, ${chinBoneProminence.label} chin bone prominence, ${chinFacialHair.label} chin facial hair, ${chinMoles.label} chin moles, ${chinScarring.label} chin scarring, ${chinSkinTexture.label} chin skin texture, with forehead as ${foreheadShape.label} forehead shape, ${foreheadHeight.label} forehead height, ${foreheadSlope.label} forehead slope, ${browRidgeProminence.label} brow ridge prominence, ${foreheadWrinkles.label} forehead wrinkles, ${foreheadHairline.label} forehead hairline, ${foreheadSweatGlands.label} forehead sweat glands, ${foreheadVeins.label} forehead veins, ${foreheadMoles.label} forehead moles, ${foreheadScarring.label} forehead scarring, with hair as ${hairColor.label} hair color, ${hairTexture.label} hair texture, ${hairLength.label} hair length, ${hairThickness.label} hair thickness, ${hairDensity.label} hair density, ${hairPart.label} hair part, ${hairStyle.label} hair style, ${hairHighlights.label} hair highlights, ${baldness.label} baldness, ${scalpMarkings.label} scalp markings`

        console.log(prompt)
    }
    return (
        <section className='h-screen flex items-center justify-center flex-col w-full' id='sketcher' data-aos="fade-right">
            <h2 className='text-primary'>Sketcher</h2>
            <p>"Create Accurate Suspect Sketches with FaceSketch: The AI-driven Tool for Law Enforcement"</p>
            <div className='w-full flex items-center justify-center rounded mt-4 bg-white glassmorphism custom-shadow px-5 py-20 overflow-hidden'>

                <div className='w-full '>

                    {
                        screens.indexOf(selectedScreen) !== 0 && <TopNav screens={screens} selectedScreen={selectedScreen} setSelectedScreen={setSelectedScreen} />
                    }
                    {
                        selectedScreen === 'welcome' && <Welcome screens={screens} selectedScreen={selectedScreen} setSelectedScreen={setSelectedScreen} />
                    }
                    {
                        selectedScreen === 'general' && <General gender={gender} setGender={setGender} age={age} setAge={setAge} skinColor={skinColor} setSkinColor={setSkinColor} skinTexture={skinTexture} setSkinTexture={setSkinTexture} />
                    }
                    {
                        selectedScreen === 'eyes' && <Eyes
                        eyeShape={eyeShape}
                        setEyeShape={setEyeShape}
                        eyeBrowShape={eyeBrowShape}
                        setEyeBrowShape={setEyeBrowShape}
                        eyeColor={eyeColor}
                        setEyeColor={setEyeColor}
                        pupilShape={pupilShape}
                        setPupilShape={setPupilShape}
                        irisPattern={irisPattern}
                        setIrisPattern={setIrisPattern}
                        eyeSize={eyeSize}
                            setEyeSize={setEyeSize}
                            eyelashes={eyelashes}
                            setEyelashes={setEyelashes}
                            eyeSocketShape={eyeSocketShape}
                            setEyeSocketShape={setEyeSocketShape}
                            eyeLidWrinkles={eyeLidWrinkles}
                            setEyeLidWrinkles={setEyeLidWrinkles}
                            distanceBetweenEyes={distanceBetweenEyes}
                            setDistanceBetweenEyes={setDistanceBetweenEyes}
                            />
                        }
                    {
                        selectedScreen === 'nose' && <Nose
                        noseShape={noseShape}
                        setNoseShape={setNoseShape}
                        noseBridge={noseBridge}
                        setNoseBridge={setNoseBridge}
                        noseTip={noseTip}
                        setNoseTip={setNoseTip}
                        noseNostrilFlare={noseNostrilFlare}
                        setNoseNostrilFlare={setNoseNostrilFlare}
                        noseNostrilShape={noseNostrilShape}
                        setNoseNostrilShape={setNoseNostrilShape}
                        noseNostrilSize={noseNostrilSize}
                        setNoseNostrilSize={setNoseNostrilSize}
                        noseNostrilPlacement={noseNostrilPlacement}
                        setNoseNostrilPlacement={setNoseNostrilPlacement}
                        noseRidge={noseRidge}
                        setNoseRidge={setNoseRidge}
                        noseNasalSeptumDeviation={noseNasalSeptumDeviation}
                        setNoseNasalSeptumDeviation={setNoseNasalSeptumDeviation}
                        />
                    }
                    {
                        selectedScreen === 'lips' && <Lips lipShape={lipShape} setLipShape={setLipShape} lipColor={lipColor} setLipColor={setLipColor} cupidBow={cupidBow} setCupidBow={setCupidBow} lipThickness={lipThickness} setLipThickness={setLipThickness} lipTexture={lipTexture} setLipTexture={setLipTexture} lipWrinkles={lipWrinkles} setLipWrinkles={setLipWrinkles} lipVolume={lipVolume} setLipVolume={setLipVolume} lipPosition={lipPosition} setLipPosition={setLipPosition} lipScarring={lipScarring} setLipScarring={setLipScarring} lipSize={lipSize} setLipSize={setLipSize} lipPucker={lipPucker} setLipPucker={setLipPucker} lipSmile={lipSmile} setLipSmile={setLipSmile} />
                    }
                    {
                        selectedScreen === 'cheeks' && <Cheeks cheekShape={cheekShape} setCheekShape={setCheekShape} cheekFullness={cheekFullness} setCheekFullness={setCheekFullness} cheekboneShape={cheekboneShape} setCheekboneShape={setCheekboneShape} smileLines={smileLines} setSmileLines={setSmileLines} cheekBlush={cheekBlush} setCheekBlush={setCheekBlush} sunkenCheeks={sunkenCheeks} setSunkenCheeks={setSunkenCheeks} dimples={dimples} setDimples={setDimples} facialHair={facialHair} setFacialHair={setFacialHair} cheekMoles={cheekMoles} setCheekMoles={setCheekMoles} cheekScarring={cheekScarring} setCheekScarring={setCheekScarring} />
                        
                    }
                    {
                        selectedScreen === 'chin' && <Chin chinShape={chinShape} setChinShape={setChinShape} chinPointiness={chinPointiness} setChinPointiness={setChinPointiness} chinSize={chinSize} setChinSize={setChinSize} chinDimples={chinDimples} setChinDimples={setChinDimples} chinCleft={chinCleft} setChinCleft={setChinCleft} chinBoneProminence={chinBoneProminence} setChinBoneProminence={setChinBoneProminence} chinFacialHair={chinFacialHair} setChinFacialHair={setChinFacialHair} chinMoles={chinMoles} setChinMoles={setChinMoles} chinScarring={chinScarring} setChinScarring={setChinScarring} chinSkinTexture={chinSkinTexture} setChinSkinTexture={setChinSkinTexture} />
                        
                    }
                    {
                        selectedScreen === 'forehead' && <Forehead
                        foreheadShape={foreheadShape}
                        setForeheadShape={setForeheadShape}
                        foreheadHeight={foreheadHeight}
                        setForeheadHeight={setForeheadHeight}
                        foreheadSlope={foreheadSlope}
                        setForeheadSlope={setForeheadSlope}
                        browRidgeProminence={browRidgeProminence}
                        setBrowRidgeProminence={setBrowRidgeProminence}
                        foreheadWrinkles={foreheadWrinkles}
                        setForeheadWrinkles={setForeheadWrinkles}
                        foreheadHairline={foreheadHairline}
                        setForeheadHairline={setForeheadHairline}
                        foreheadSweatGlands={foreheadSweatGlands}
                        setForeheadSweatGlands={setForeheadSweatGlands}
                        foreheadVeins={foreheadVeins}
                        setForeheadVeins={setForeheadVeins}
                        foreheadMoles={foreheadMoles}
                        setForeheadMoles={setForeheadMoles}
                        foreheadScarring={foreheadScarring}
                        setForeheadScarring={setForeheadScarring}
                        />
                    }

                    {
                        selectedScreen === 'hair' && <Hair hairColor={hairColor} setHairColor={setHairColor} hairTexture={hairTexture} setHairTexture={setHairTexture} hairLength={hairLength} setHairLength={setHairLength} hairThickness={hairThickness} setHairThickness={setHairThickness} hairDensity={hairDensity} setHairDensity={setHairDensity} hairPart={hairPart} setHairPart={setHairPart} hairStyle={hairStyle} setHairStyle={setHairStyle} hairHighlights={hairHighlights} setHairHighlights={setHairHighlights} baldness={baldness} setBaldness={setBaldness} scalpMarkings={scalpMarkings} setScalpMarkings={setScalpMarkings} />
                    }
                    {
                        screens.indexOf(selectedScreen) !== 0 && <div className='mt-4 flex justify-between p-8'>
                            <button className='bg-darkGray text-white px-8 py-2 rounded' onClick={handleBack} disabled={screens.indexOf(selectedScreen) === 1 ? true : false}>&lt; BACK</button>
                            <button className='bg-primary text-white px-8 py-2 rounded' onClick={handleNext}>{screens.indexOf(selectedScreen) === screens.length - 1 ? "START" : "NEXT "} &gt;</button>
                        </div>
                    }
                </div>
                {
                    selectedScreen == 'welcome' && <div>
                        <img src={Detective} alt='detective' className='img__shadow' />
                    </div>
                }
            </div>


        </section>
    )
}

export default Sketcher