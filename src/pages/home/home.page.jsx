
import React from 'react'
import SkillCardComponent from '../../components/skill_card/skill_card.component'




import './home.page.scss'


import backend_img from '../../assets/be.jpg'
import frontend_img from '../../assets/fr3.png'
import ai_img from '../../assets/ai.jpg'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


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

            <div className='intro__text'>

                <h2> I'm a FullStack Developer </h2>
                <h2> Consulant & </h2>
                <h2> Researcher </h2> 
                <VSpacerComponent space={2} />

                <p>
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
        
        <div className="page__section more_skills">
            
        </div>
        
        <div className="page__section contact">
            
        </div>

    </div>
  )
}

export default HomePage
