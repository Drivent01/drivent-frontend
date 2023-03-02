import React from 'react';

import { ContainerButton } from './styles';

function ButtonFinalization({ children }) {
  return (
    <ContainerButton>
      {children}
    </ContainerButton>
  );
}

export default ButtonFinalization;
