import { useNavigate } from "react-router-dom"
import Navigation from '../../../components/Navigation'
import { useMainContext } from '../../../contexts/MainContext'

import "./Post.css"

const Post = () => {
    const { values } = useMainContext()

    const navigate = useNavigate()

    const handlePost = () => {
        navigate('/me')
    }

    const redirectBack = () => {
        navigate(-1)
    }

    return (
        <div className="post-page">
            <img src={values.photoData} alt="" height="150" />
            <textarea className="post-textarea" placeholder="write caption"></textarea>
            <Navigation>
                <button className="navigation-item" onClick={redirectBack}>⬅️</button>
                <button className="navigation-item" onClick={handlePost}>
                    <span className="navigation-add-button">➡️</span>
                </button>
                <button className="navigation-item" onClick={redirectBack}>❌</button>
            </Navigation>
        </div>
    )
}

export default Post
