import React, { useEffect, useState } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import VitalHeader from '../../components/vital-resources/Header/Header'
import { GET_ALL_ABOUT_TEXT, GET_ALL_SERVICES } from '../../constants/serviceAPI';
import { aboutTextActions } from '../../store/aboutText/action'
import { servicesActions } from '../../store/services/action'
import { UPSERT_SERVICES } from '../../constants/serviceAPI'
import AboutUs from '../../components/vital-resources/AboutUs/AboutUs'
import Services from '../../components/vital-resources/Services/Services';

const sortServicesCards = (services) => {
  const sortedCards = []
  let previousCard = null
  for (let i = 0; i < services.length; i++){
    for (let j = 0; j < services.length; j++) {
      if (services[j].itemInFront === previousCard){
        sortedCards.push(services[j])
        previousCard = services[j].id
      }
    }
  }
  return sortedCards
}

const VitalResources = () => {
  const dispatch = useDispatch();

  const [dropReset, setDropReset] = useState(false)
  const [sortedServiceCards, setSortedServiceCards] = useState([])

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

  const [upsertServices] = useMutation(UPSERT_SERVICES)

  const aboutUsContent = useSelector( state => state.aboutText)
  const servicesContent = useSelector( state => state.services)

  useEffect(() => {
    getAllAboutText()
    getAllServices()
  }, [getAllAboutText, getAllServices])

  useEffect(() => {
    getAllServices()
  }, [getAllServices, dropReset])

  useEffect(() => {
    setSortedServiceCards(sortServicesCards(servicesContent))
  }, [setSortedServiceCards, servicesContent])

  return (
    <>
      <VitalHeader />
      <AboutUs content={aboutUsContent} />
      <Services content={sortedServiceCards} upsertServices={upsertServices} setDropReset={setDropReset} dropReset={dropReset} />
    </>
  )
}

export default VitalResources
