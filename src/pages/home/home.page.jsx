
import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub'
import AttachEmailIcon from '@mui/icons-material/AttachEmail'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'



// components
import SkillCardComponent from '../../components/skill_card/skill_card.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'



import './home.page.scss'


import backend_img from '../../assets/be.jpg'
import frontend_img from '../../assets/fr3.png'
import ai_img from '../../assets/ai.jpg'
import { Phone } from '@mui/icons-material'



const HomePage = () => {
    const skills = [
        {
            title: "Backend",
            image: backend_img,
            tools: [
                "Python", "NodeJs", "PhP",
            ]
        },
        {
            title: "Frontend",
            image: frontend_img,
            tools: [
                "TypeScript", "Javascript", "React", "HTML5", "Css3"
            ]
        },
        {
            title: "AI & Machine Learning",
            image: ai_img,
            tools: [
                "Python", "R",
            ]
        }
    ]


  return (
    <div className="page">

        <div className="page__section intro">

            <div className='intro__text__container'>

                <h2 className='su_2'> I'm a FullStack Developer </h2>
                <h2> Consulant & </h2>
                <h2> Researcher </h2> 
                <VSpacerComponent space={2} />

                <p className='intro__text__container__text'>
                    I help companies build better experiences for their customers.
                </p>

            </div>

            <div className='intro__avatar_container' />

        </div>
        
        <div className="page__section skills">
            <h2 style={{ textAlign: 'center' }}> SKILLS </h2> 
            <VSpacerComponent space={8} />

            {
                skills.map((skill, index)=> {

                    return (
                        <SkillCardComponent key={index} skill={skill} />
                    )
                })
            }
        </div>
        
        
        <div className="page__section contact">
            <h2 style={{ textAlign: 'center' }}> CONTACT ME </h2> 
            <VSpacerComponent space={8} />


            <div className="contact_card">
                <AttachEmailIcon />
                <p> kj@mail.com </p>
            </div>
            
            <a href='https://www.linkedin.com/in/kipchumba-jepkoech-47b7b015a/' className="contact_card" target='_blank'>
                <GitHubIcon />
                <p> Kipchumba Jepkoech </p>
            </a>

            <a href='tel:+254714335322' className="contact_card">    
                <LocalPhoneIcon />
                <p> +254-714-33-522 </p>
            </a>
            
        </div>

    </div>
  )
}

export default HomePage
