import React, {Component} from 'react'


class AboutMe extends Component{
    render(){
        return(
            <div className="about-me">
                <div className=" container container-about-me">
                    <div className="image-profile"></div>
                    <div className="image-profile-desc">
                        <h2>About me</h2>
                        <button className="button-about-me">View more</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe