import React from 'react';

import { ContainerButton } from './styles';

function ButtonSelection(props) {
  const { title, price } = props;

  return (
    <ContainerButton {...props}>
      <p className='title'>{title}</p>
      <p className='subtitle'>{price}</p>
    </ContainerButton>
  );
}

export default ButtonSelection;
