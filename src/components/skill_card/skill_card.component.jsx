import React, { useState } from 'react'
import VSpacerComponent from '../v_spacer/v_spacer.component'


import './skill_card.component.scss'



const SkillCardComponent = ({ skill }) => {

    const { title, tools, image } = skill


    return (
        <div className="card">

            <div className="card__contents">

                <h3> {title } </h3>
                <VSpacerComponent space={3} />

                <div className='card__contents__tools'>
                    {
                        tools.map((s, index)=> {

                            return (
                                <div key={index} className="card__contents__tools__chip">
                                    { s }
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <img src={image}  className="card__image"/>

        </div>
    )
}

export default SkillCardComponent
