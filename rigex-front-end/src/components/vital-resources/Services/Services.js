import React from 'react'
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import LocalDrinkOutlinedIcon from '@material-ui/icons/LocalDrinkOutlined';

import './servicesStyle.scss'

const iconFunction = (title) => {
    switch (title) {
        case 'Cleaning':
            return <div className="circle-icon red" ><BuildOutlinedIcon fontSize="large"/> </div>
        case 'Testing':
            return <div className="circle-icon orange" ><LocalDrinkOutlinedIcon fontSize="large"/></div>
        case 'Wetstock':
            return <div className="circle-icon blue" ><TrackChangesOutlinedIcon fontSize="large"/></div>
        default:
            return null
    }
}

const Services = ({ content }) => {

    const cardArray = content.map( cardInfo => {
        return (
            <div key={cardInfo.id}>
                {iconFunction(cardInfo.title)}
                <div className="description">
                    <h4>{cardInfo.description}</h4>
                </div>
                <ul className="list-items">
                    {cardInfo.features.map(item => (<li key={item.id} > {item.text} </li>))}
                </ul>
            </div>
        )
    })

  return (
    <div className="services-section">
        <div className="header">
            <h1>Services</h1>
            <p>{`Certifications: Ken Wilcox & Associates & National Work Group of Leak Detection Evaluators`}</p>
        </div>
        <div className="card-container">
            {cardArray}
        </div>
    </div>
  )
}

export default Services
