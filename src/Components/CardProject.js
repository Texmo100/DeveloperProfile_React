import React from 'react'
import { FaCode } from 'react-icons/fa';

const CardProject = () => {
    return(
        <div className="card-project">
            <div className="image-project">
                <FaCode style={{fontSize: "10rem", color: "#aeaeae"}}/>
            </div>
            <div className="project-info">
                <p className="project-title">Project title</p>
                <p className="project-desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className="button-project-card">View Project</button>
            </div>
        </div>
    )
}

export default CardProject