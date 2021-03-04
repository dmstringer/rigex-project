import React, { useEffect, useState } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import VitalHeader from '../../components/vital-resources/Header/Header'
import {
  GET_ALL_ABOUT_TEXT,
  GET_ALL_SERVICES,
  GET_ALL_TEST_CONTENT,
  GET_ALL_TEAM_MEMBERS,
  GET_ALL_STATISTICS,
  GET_ALL_CHOOSE_US,
} from '../../constants/serviceAPI';
import { aboutTextActions } from '../../store/aboutText/action'
import { testActions } from '../../store/test/actions'
import { teamActions } from '../../store/team/actions'
import { chooseUsActions } from '../../store/chooseUs/actions'
import { servicesActions } from '../../store/services/action'
import { statisticsActions } from '../../store/statistics/action'
import { UPSERT_SERVICES } from '../../constants/serviceAPI'
import AboutUs from '../../components/vital-resources/AboutUs/AboutUs';
import ChooseUs from '../../components/vital-resources/ChooseUs/ChooseUs';
import Services from '../../components/vital-resources/Services/Services';
import Statistics from '../../components/vital-resources/Statistics/Statistics';
import CovidBanner from '../../components/vital-resources/CovidBanner/CovidBanner';
import Team from '../../components/vital-resources/Team/Team';
import Tests from '../../components/vital-resources/Tests/Tests';

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
  const [getAllTeamMembers] = useLazyQuery(GET_ALL_TEAM_MEMBERS, {
    errorPolicy: 'all',
    onCompleted: (teamData) => {
      dispatch(teamActions.getAllTeamMembers(teamData));
    },
  });
  const [getAllChooseUs] = useLazyQuery(GET_ALL_CHOOSE_US, {
    errorPolicy: 'all',
    onCompleted: (teamData) => {
      dispatch(chooseUsActions.getAllChooseUs(teamData));
    },
  });
  const [getAllServices] = useLazyQuery(GET_ALL_SERVICES, {
    errorPolicy: 'all',
    onCompleted: (servicesData) => {
      dispatch(servicesActions.getAllServices(servicesData));
    },
  });
  const [getAllStatistics] = useLazyQuery(GET_ALL_STATISTICS, {
    errorPolicy: 'all',
    onCompleted: (statisticsData) => {
      dispatch(statisticsActions.getAllStatistics(statisticsData));
    },
  });
  const [getAllTests] = useLazyQuery(GET_ALL_TEST_CONTENT, {
    errorPolicy: 'all',
    onCompleted: (testsData) => {
      dispatch(testActions.getAllTestContent(testsData));
    },
  });

  const [upsertServices] = useMutation(UPSERT_SERVICES)

  const aboutUsContent = useSelector( state => state.aboutText)
  const teamContent = useSelector(state => state.team)
  const chooseUsContent = useSelector(state => state.chooseUs)
  const servicesContent = useSelector( state => state.services)
  const statisticsContent = useSelector(state => state.statistics)
  const testContent = useSelector(state => state.test)

  useEffect(() => {
    getAllAboutText()
    getAllTeamMembers()
    getAllChooseUs()
    getAllServices()
    getAllStatistics()
    getAllTests()
  }, [getAllAboutText, getAllTeamMembers, getAllChooseUs, getAllServices, getAllStatistics, getAllTests])

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
      <ChooseUs content={chooseUsContent} />
      <Statistics content={statisticsContent} />
      <CovidBanner />
      <Tests content={testContent} />
      <Team content={teamContent} />
    </>
  )
}

export default VitalResources
