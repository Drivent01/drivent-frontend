import React from 'react';

import { ContainerButton } from './styles';

function ButtonSelection({
  id,
  title,
  price,
  width,
  height,
  isSelected,
  setSelectedTicket,
  includesHotel,
  setMoreOptions,
  clickable,
}) {
  function selectTicket() {
    if (!includesHotel) {
      setMoreOptions(false);
      setSelectedTicket({ id, title, totalPrice: price, concluded: true });
    } else {
      setMoreOptions(true);
      setSelectedTicket({ id, title, price });
    }
  }

  return (
    <ContainerButton width={width} height={height} isSelected={isSelected} onClick={clickable && selectTicket}>
      <p className="title">{title}</p>
      <p className="subtitle">R$ {price}</p>
    </ContainerButton>
  );
}

export default ButtonSelection;
