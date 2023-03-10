import React from 'react';

import { ContainerButton } from './styles';

function ButtonFinalization(props) {
  return (
    <ContainerButton {...props} >
      {props.children}
    </ContainerButton>
  );
}

export default ButtonFinalization;
