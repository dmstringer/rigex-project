import React from 'react'
import faker from 'faker'

import './teamStyles.scss'

const Team = ({ content }) => {

    const randomImage = faker.image.image()

    const teamContent = content.map(item => {
        return (
            <div className="card-container" >
                <img src={randomImage} />
                <div className="overlay">
                    <span>{item.firstName} {item.lastName}</span>
                    <span>{item.position}</span>
                </div>
            </div>
        )
    })

    return (
        <div className="team-section" >
            <div className="title" >Team</div>
            <div className="card-area" >{teamContent}</div>
        </div>
    )
}

export default Team
