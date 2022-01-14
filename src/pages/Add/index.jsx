import { useRef, useCallback, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Webcam from 'react-webcam'
import { useMainContext } from '../../contexts/MainContext'

import Navigation from '../../components/Navigation'

import "./Add.css"

// TODO: Set width and height correctly
const WIDTH = "375"
const HEIGHT = "500"

const Add = () => {
    const webcamRef = useRef(null)
    const [ camPos, setCamPos ] = useState("back")
    const [ photo, setPhoto ] = useState(null)
    
    const { updateContextValues } = useMainContext()

    const navigate = useNavigate()

    const videoConstraints = {
        width: WIDTH,
        height: HEIGHT,
        // TODO: when mobile device start from back
        facingMode: camPos === "back" ? { exact: "environment" } : "user" 
    }

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
        setPhoto(imageSrc)
        updateContextValues({ photoData: imageSrc })
    }, [webcamRef])

    const switchCam = () => {
        setCamPos(camPos === "back" ? "user" : "back")
    }

    const onCancel = () => {
        setPhoto(null)
    }

    const handleNext = () => {
        navigate('/add/post')
    }

    const redirectBack = () => {
        navigate(-1)
    }

    return (
        <div>
            { photo ? (
                <>
                    <img src={photo} alt="" />
                    <Navigation>
                        <button className="navigation-item" onClick={redirectBack}>⬅️</button>
                        <button className="navigation-item" onClick={handleNext}>
                            <span className="navigation-add-button">➡️</span>
                        </button>
                        <button className="navigation-item" onClick={onCancel}>❌</button>
                    </Navigation>
                </>
            ) : (
                <>
                    <Webcam
                        ref={webcamRef}
                        width={WIDTH}
                        height={HEIGHT}
                        screenshotFormat="image/jpeg"
                        mirrored={true}
                        videoConstraints={videoConstraints}
                    />
                    <Navigation>
                        <button className="navigation-item" onClick={redirectBack}>⬅️</button>
                        <button className="navigation-item" onClick={capture}>
                            <span className="navigation-add-button">📷</span>
                        </button>
                        <button className="navigation-item" onClick={switchCam}>🔄</button>
                    </Navigation>
                </>
            )}
            
        </div>
    )
}

export default Add
