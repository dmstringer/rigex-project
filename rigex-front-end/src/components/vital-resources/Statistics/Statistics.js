import React from 'react'

import './statisticsStyle.scss'

const Statistics = ({ content }) => {

    const statisticsArray =  content.map( item => {
        return (
            <div>
                <h1>{item.mainText}</h1>
                <span>{item.subText}</span>
            </div>
        )
    })

    return (
        <div className="statistics-section" >
            {statisticsArray}
        </div >
    )
}

export default Statistics
