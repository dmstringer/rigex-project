import React from 'react';

import emptyRigs from '../../assets/Tower@1.5x.svg';
import './sideBar.scss';

const EmptyCard = () => {
  return (
    <div className='sidebarBox'>
      <img className='boxImage' alt='Oil Rig' src={emptyRigs} title='Oil Rig' />
      <p className='sidebarText'>Your rigs will be organized here. Start creating!</p>
    </div>
  );
};

export default EmptyCard;
