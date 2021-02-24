import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import VitalHeader from '../../components/vital-resources/Header/Header'
import { GET_ALL_ABOUT_TEXT } from '../../constants/serviceAPI';
import { aboutTextActions } from '../../store/aboutText/action'
import AboutUs from '../../components/vital-resources/AboutUs/AboutUs'

const VitalResources = () => {
  const dispatch = useDispatch();
  const [getAllAboutText, { getLoading, getError }] = useLazyQuery(GET_ALL_ABOUT_TEXT, {
    errorPolicy: 'all',
    onCompleted: (data) => {
      dispatch(aboutTextActions.getAllAboutText(data));
    },
  });
  const aboutUsContent = useSelector( state => state.aboutText)

  useEffect(() => {
    getAllAboutText()
  }, [getAllAboutText])

  return (
    <>
      <VitalHeader />
      <AboutUs content={aboutUsContent}/>
    </>
  )
}

export default VitalResources
