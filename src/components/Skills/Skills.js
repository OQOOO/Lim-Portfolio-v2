import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div id ="skills"className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
            <div style={{color: theme.tertiary80, fontSize: "0.9rem", marginTop: "1rem"}}>
                <p style={{color: theme.primary, fontWeight: "bold"}}>언어</p>
                <p>- Java, C#, Python, SQL, JavaScript, CSS, HTML5</p>
                <br/>
                <p style={{color: theme.primary, fontWeight: "bold"}}>프레임워크</p>
                <p>- Spring, ASP.NET, PyTorch, React</p>
                <br/>
                <p style={{color: theme.primary, fontWeight: "bold"}}>도구</p>
                <p>- Docker, Git</p>
            </div>
        </div>
    )
}

export default Skills
