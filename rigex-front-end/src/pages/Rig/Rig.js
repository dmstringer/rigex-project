import React from 'react';
import { useParams } from 'react-router-dom';

const Rig = () => {
  const { rig } = useParams();

  return <h1>Rig Works!</h1>;
};

export default Rig;
