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
        aboutUsContent.listItems.push(<div key={contentObject.id} > <div><CheckCircleOutlineIcon fontSize="small" /></div> {contentObject.text} </div>)
        break;
      default:
        aboutUsContent[contentObject.type] = contentObject.text
        return;
    }
  })

  return (
    <div className="about-section">
      <div className="image-container">
        <img src={randomImage} alt="faker"/>
      </div>
      <div className="text-container">
        <span className="title">{aboutUsContent.title}</span>
        <span className="subtitle">{aboutUsContent.subtitle}</span>
        <span className="description">{aboutUsContent.description}</span>
        <div className="bullet-points" > {aboutUsContent.listItems} </div>
      </div>
    </div>
  )
}

export default AboutUs
