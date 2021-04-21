import React, { Component } from 'react'

class Contact_info extends Component {
    render() {
        return (
            <div className="contact-bar">
                <div className="contact-info-1">

                    <div className="contact-image"></div>
                    <div className="contact-name">
                        <p className="no-margin f-700">Software Engineer</p>
                        <p className="no-margin f-400">Iñiguez Ruiz Isaac</p>
                    </div>
                    <div className="location">
                        <i className="fas fa-map-marker-alt"></i>
                        <p className="no-margin">Hermosillo, Sonora</p>
                    </div>
                </div>

                <div className="contact-info-2">
                    <p className="no-margin f-700">Contacto</p>

                    <div className="info-div">
                        <i className="fas fa-envelope"></i>
                        <p className="no-margin">ir.isaac1000@gmail.com</p>
                    </div>
                    <div className="info-div">
                        <i className="fas fa-mobile-alt"></i>
                        <p className="no-margin">+52 6621194655</p>
                    </div>
                    <div className="info-div">
                        <a href="https://github.com/Texmo100">
                            <i className="fab fa-github"></i>
                            <p className="no-margin">Texmo100</p>
                        </a>
                    </div>
                </div>

                <div className="theme-changer">
                    <p className="no-margin">Tema</p>
                    <button className="btn">
                        <i className="icon-change fas fa-moon"></i>
                    </button>
                </div>

            </div>
        )
    }
}

export default Contact_info