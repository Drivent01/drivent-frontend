import React from 'react';

import { ContainerButton } from './styles';

function ButtonSelection({ title, price, width, height, isSelected }) {
  return (
    <ContainerButton width={width} height={height} isSelected={isSelected}>
      <p className='title'>{title}</p>
      <p className='subtitle'>R${price}</p>
    </ContainerButton>
  );
}

export default ButtonSelection;
