import { useRef, useCallback, useState } from 'react'

import Webcam from 'react-webcam'

// TODO: Set width and height correctly
const WIDTH = "375"
const HEIGHT = "400"

const Add = () => {
    const webcamRef = useRef(null)
    const [ camPos, setCamPos ] = useState("back")
    const [ photo, setPhoto ] = useState(null)

    const videoConstraints = {
        width: WIDTH,
        height: HEIGHT,
        // TODO: when mobile device start from back
        facingMode: camPos === "back" ? { exact: "environment" } : "user" 
    }

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
        setPhoto(imageSrc)
    }, [webcamRef])

    const switchCam = () => {
        setCamPos(camPos === "back" ? "user" : "back")
    }

    const retake = () => {
        setPhoto(null)
    }

    const upload = () => {
        console.log('uploaded')
    }

    return (
        <div>
            { photo ? (
                <div>
                    <img src={photo} />
                    <div>
                        <button onClick={upload}>⬆️</button>
                        <button onClick={retake}>↩️</button>
                    </div>
                </div>
            ) : (
                <div>
                    <Webcam
                        ref={webcamRef}
                        width={WIDTH}
                        height={HEIGHT}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                    <div>
                        <button onClick={capture}>📷</button>
                        <button onClick={switchCam}>🔄</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Add
