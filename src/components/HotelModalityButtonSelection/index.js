import React from 'react';

import { ContainerButton } from './styles';

function HotelModalityButtonSelection({ id, title, name, price, width, height, setSelectedTicket, totalPrice }) {
  function selectTicket() {
    setSelectedTicket({ id, title, price, totalPrice, concluded: true });
  }

  return (
    <ContainerButton width={width} height={height} onClick={selectTicket}>
      <p className='title'>{name}</p>
      <p className='subtitle'>+ R$ {totalPrice - price}</p>
    </ContainerButton>
  );
}

export default HotelModalityButtonSelection;
