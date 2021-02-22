import React from 'react'
import faker from 'faker'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import './aboutUsStyle.scss'

const AboutUs = ({ content }) => {

  const randomImage = faker.image.image()

  const aboutUsContent = {
    listItems: []
  }

  content.forEach( contentObject => {
    switch (contentObject.type) {
      case 'list item':
        aboutUsContent.listItems.push( <li> <div><CheckCircleOutlineIcon fontSize="small" /></div> {contentObject.text} </li> )
        break;
      default:
        aboutUsContent[contentObject.type] = contentObject.text
        return;
    }
  })

  return (
    <div className="about-section">
      <div className="image-container">
        <img src={randomImage} alt="fake image"/>
      </div>
      <div className="text-container">
        <span className="title">{aboutUsContent.title}</span>
        <span className="subtitle">{aboutUsContent.subtitle}</span>
        <span className="description">{aboutUsContent.description}</span>
        <ul className="bulletpoints" > {aboutUsContent.listItems} </ul>
      </div>
    </div>
  )
}

export default AboutUs
