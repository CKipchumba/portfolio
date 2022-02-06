import clsx from 'clsx'
import React, { useState } from 'react'
import VSpacerComponent from '../v_spacer/v_spacer.component'


import './skill_card.component.scss'



const SkillCardComponent = ({ skill }) => {

    const { title, tools, image, index } = skill

    return (
        <div className={clsx({ "card": true, [`fd_${index}`]: true, })}>

            <div className="card__contents">

                <h3 className='su_8'> {title } </h3>
                <VSpacerComponent space={3} />

                <div className='card__contents__tools'>
                    {
                        tools.map((s, index)=> {

                            return (
                                <div 
                                    key={index} 
                                    className={
                                        clsx([
                                            "card__contents__tools__chip",
                                            `su_${index+10}`
                                        ])
                                    }
                                >
                                    { s }
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <img src={image}  className="card__image fd_16"/>

        </div>
    )
}

export default SkillCardComponent
