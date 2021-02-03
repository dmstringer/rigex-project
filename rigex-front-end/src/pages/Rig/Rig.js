import React from 'react';
import { useParams } from 'react-router-dom';

const Rig = () => {
  const { id } = useParams();

  return <h1>Rig Works!</h1>;
};

export default Rig;
