import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import VitalHeader from '../../components/vital-resources/Header/Header'
import { GET_ALL_ABOUT_TEXT, GET_ALL_SERVICES } from '../../constants/serviceAPI';
import { aboutTextActions } from '../../store/aboutText/action'
import { servicesActions } from '../../store/services/action'
import AboutUs from '../../components/vital-resources/AboutUs/AboutUs'
import Services from '../../components/vital-resources/Services/Services';

const VitalResources = () => {
  const dispatch = useDispatch();
  const [getAllAboutText] = useLazyQuery(GET_ALL_ABOUT_TEXT, {
    errorPolicy: 'all',
    onCompleted: (aboutData) => {
      dispatch(aboutTextActions.getAllAboutText(aboutData));
    },
  });
  const [getAllServices] = useLazyQuery(GET_ALL_SERVICES, {
    errorPolicy: 'all',
    onCompleted: (servicesData) => {
      dispatch(servicesActions.getAllServices(servicesData));
    },
  });

  const aboutUsContent = useSelector( state => state.aboutText)
  const servicesContent = useSelector( state => state.services)

  useEffect(() => {
    getAllAboutText()
    getAllServices()
  }, [getAllAboutText, getAllServices])

  return (
    <>
      <VitalHeader />
      <AboutUs content={aboutUsContent}/>
      <Services content={servicesContent} />
    </>
  )
}

export default VitalResources
