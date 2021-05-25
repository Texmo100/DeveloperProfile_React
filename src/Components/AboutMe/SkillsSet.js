import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { MdPhonelink } from 'react-icons/md';
import { SiDotNet } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiJava } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SiMicrosoftsqlserver } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { FaTrello } from 'react-icons/fa';
import { SiAdobexd } from 'react-icons/si';

const SkillsSet = () => {
    return (
        <div className="content-item">
            <p className="content-item-title">Skills Set</p>
            <div className="content-item-box-wrapper">

                <div className="box-style left-box">
                    <p className="box-title-skills-set">Web Fundamentals</p>
                    <div className="icon-container">
                        <div className="icon">
                            <AiFillHtml5 style={{ fontSize: "4rem", color: "#E67E22" }} />
                            <p className="icon-name">HMTL5</p>
                        </div>

                        <div className="icon">
                            <DiCss3 style={{ fontSize: "4rem", color: "#2980B9" }} />
                            <p className="icon-name">CSS3</p>
                        </div>

                        <div className="icon">
                            <SiJavascript style={{ fontSize: "4rem", color: "#F1C40F" }} />
                            <p className="icon-name">JavaScript ES6+</p>
                        </div>

                        <div className="icon">
                            <MdPhonelink style={{ fontSize: "4rem", color: "#8E44AD" }} />
                            <p className="icon-name">Responsive Design</p>
                        </div>
                    </div>
                </div>

                <div className="box-style right-box">
                    <p className="box-title-skills-set">Frameworks</p>
                    <div className="icon-container">
                        <div className="icon">
                            <SiDotNet style={{ fontSize: "4rem", color: "#2980B9" }} />
                            <p className="icon-name">.Net Core</p>
                        </div>

                        <div className="icon">
                            <FaReact style={{ fontSize: "4rem", color: "#29B5B9" }} />
                            <p className="icon-name">React.js</p>
                        </div>

                        <div className="icon">
                            <FaReact style={{ fontSize: "4rem", color: "#7D3C98" }} />
                            <p className="icon-name">React Native</p>
                        </div>
                    </div>
                </div>

                <div className="box-style left-box">
                    <p className="box-title-skills-set">Version Control</p>
                    <div className="icon-container">
                        <div className="icon">
                            <FaGitAlt style={{ fontSize: "4rem", color: "#E67E22" }} />
                            <p className="icon-name">Git</p>
                        </div>
                    </div>
                </div>

                <div className="box-style right-box">
                    <p className="box-title-skills-set">Database</p>
                    <div className="icon-container">
                        <div className="icon">
                            <SiMicrosoftsqlserver style={{ fontSize: "4rem", color: "#2980B9" }} />
                            <p className="icon-name">Microsoft SQL Server</p>
                        </div>
                        <div className="icon">
                            <SiFirebase style={{ fontSize: "4rem", color: "#A04000" }} />
                            <p className="icon-name">Firebase</p>
                        </div>
                    </div>
                </div>

                <div className="box-style full-box">
                    <p className="box-title-skills-set">Programming Languages</p>
                    <div className="icon-container">
                        <div className="icon">
                            <SiJava style={{ fontSize: "4rem", color: "#7B241C" }} />
                            <p className="icon-name">Java</p>
                        </div>

                        <div className="icon">
                            <SiCsharp style={{ fontSize: "4rem", color: "#8E44AD" }} />
                            <p className="icon-name">C#</p>
                        </div>

                        <div className="icon">
                            <SiPython style={{ fontSize: "4rem", color: "#F1C40F" }} />
                            <p className="icon-name">Python</p>
                        </div>

                        <div className="icon">
                            <SiJavascript style={{ fontSize: "4rem", color: "#F1C40F" }} />
                            <p className="icon-name">JavaScript ES6+</p>
                        </div>
                    </div>
                </div>

                <div className="box-style left-box">
                    <p className="box-title-skills-set">Agile Methodologies</p>
                    <div className="icon-container">
                        <div className="icon">
                            <DiScrum style={{ fontSize: "4rem", color: "#2980B9" }} />
                            <p className="icon-name">SCRUM</p>
                        </div>
                        <p style={{ fontSize: "2rem" }}>+</p>
                        <div className="icon">
                            <FaTrello style={{ fontSize: "4rem", color: "#2980B9" }} />
                            <p className="icon-name">Trello</p>
                        </div>
                    </div>
                </div>

                <div className="box-style right-box">
                    <p className="box-title-skills-set">UI Design</p>
                    <div className="icon-container">
                        <div className="icon">
                            <SiAdobexd style={{ fontSize: "4rem", color: "#C71585" }} />
                            <p className="icon-name">Adobe XD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSet