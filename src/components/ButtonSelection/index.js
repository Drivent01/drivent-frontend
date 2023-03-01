import React from 'react';

import { ContainerButton } from './styles';

function ButtonSelection({ children, width, height, isSelected }) {
  return (
    <ContainerButton width={width} height={height} isSelected={isSelected}>
      {children}
    </ContainerButton>
  );
}

export default ButtonSelection;
