import React, {Component} from 'react'
import { MdMail } from 'react-icons/md';
import { BsPhone } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FaGitlab } from 'react-icons/fa';

class ContactMe extends Component{
    render(){
        return(
            <section className="contact-me">
                <div className=" container container-contact-me">
                    <div className="contact-me-desc">
                        <h4>Get in Touch</h4>
                        <ul className="contact-me-items">
                            <li> 
                                <MdMail style={{fontSize: "3rem", color: "#7E2C7E"}}/> 
                                <p>ir.isaac1000@gmail.com</p>
                            </li>
                            <li> 
                                <BsPhone style={{fontSize: "3rem", color: "#4097CC"}}/>
                                <p>+52 6621194655</p>
                            </li>
                            <li> 
                                <FaLinkedin style={{fontSize: "3rem", color: "#00FA9A"}}/>
                                <p>Isaac Iñiguez Ruiz</p>
                            </li>
                            <li> 
                                <AiFillGithub style={{fontSize: "3rem", color: "aqua"}}/>
                                <p>Texmo100</p>
                            </li>
                            <li> 
                                <FaGitlab style={{fontSize: "3rem", color: "#A0522D"}}/>
                                <p>Texmo100</p>
                            </li>
                        </ul>
                    </div>
                    <div className="image-contact-me"></div>
                </div>
            </section>
        )
    }
}

export default ContactMe