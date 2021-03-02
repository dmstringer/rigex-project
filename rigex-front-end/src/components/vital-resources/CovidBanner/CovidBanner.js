import React from 'react'

import './covidBannerStyle.scss'

const CovidBanner = () => {
  return (
    <div className="covid-banner">
        <div>
            <span>COVID19 ACTION</span>
        </div>
        <div>
            <button disabled={true} >
               Call to Action 
            </button>
        </div>
    </div>
  )
}

export default CovidBanner
