import React from 'react'
import faker from 'faker'
import AllOutIcon from '@material-ui/icons/AllOut';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import DashboardIcon from '@material-ui/icons/Dashboard';

import './chooseUsStyles.scss'


const iconFunction = (title) => {
    switch (title) {
        case 'Tank Test':
            return <div className="icon red" ><AllOutIcon fontSize="large"/></div>
        case 'Line Test':
            return <div className="icon orange" ><AvTimerIcon fontSize="large"/></div>
        case 'Tank & Fuel Cleaning':
            return <div className="icon blue" ><DashboardIcon fontSize="large"/></div>
        default:
            return null
    }
}

const ChooseUs = ({ content }) => {

  const randomImage = faker.image.image()
  
  let title, description, cardArray;
  try {
      title = content.heading.title
      description = content.heading.description
      cardArray = content.content.map( item => {
          return (
              <div className="feature" key={item.id}>
                  <div>{iconFunction(item.title)} {item.title}</div>
                  <ul>
                    {item.items.map( listItem => <li key={listItem.id}>{listItem.text}</li> )}
                  </ul>
              </div>
          )
      })
      
  } catch (error) {}

  return (
    <div className="choose-us-section">
        <div className="header"> {title} </div>
        <div className="content-block">
            <div className="picture-card">
                <img src={randomImage} />
            </div>
            <div className="content-card">
                {description}
                {cardArray}
            </div>
        </div>    
    </div>
  )
}

export default ChooseUs
