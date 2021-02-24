import React from 'react'
import faker from 'faker'

import './headerStyle.scss'

const VitalHeader = () => {

  const backgroundImg = faker.image.city()

  return (
    <div className="vital-header">
        <img src={backgroundImg} alt="faker"/>
        <div className="header-text">
            <span>The Canadian Expert Company in</span>
            <p>Fuel Tank & Line Integrity Testing</p>
            <span>and Zero Man Zero Risk Tank Cleaning</span>
            <button>BRINGING THE BEST TECHNOLOGY TO MONTREAL ON 2021</button>
        </div>
    </div>
  )
}

export default VitalHeader
