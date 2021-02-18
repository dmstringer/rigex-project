import React from 'react'
import faker from 'faker'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import './aboutUsStyle.scss'

const AboutUs = ({ content }) => {

  const randomImage = faker.image.image()

  return (
    <div className="about-section">
      <div className="image-container">
        <img src={randomImage} />
      </div>
      <div className="text-container">
        <span className="title">About Us</span>
        <span className="name">OILDROP GLOBAL Technology Suite</span>
        <span className="paragraph">
          Using a latest technology leader in a gloabl market in a prescion testing, wetsock managment and fuel restoration technologies. Our expertise enables customers to achieve the tighest storage systems, lowest fuel losses and most accurate wetstock management. Customers also beenfit from optimal pump speed, more precise re-strapping of guages, the highest compliance and cleanest fuel.
        </span>
        <span className="bulletpoint" >
          <div><CheckCircleOutlineIcon fontSize="small" /></div>
          Tank cleaning & fuel restoration
        </span>
        <span className="bulletpoint" >
          <div><CheckCircleOutlineIcon fontSize="small" /></div>
          Tank & line testing
        </span>
        <span className="bulletpoint" >
          <div><CheckCircleOutlineIcon fontSize="small" /></div>
          Wetstock management
        </span>
      </div>
    </div>
  )
}

export default AboutUs
