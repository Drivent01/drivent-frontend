import React from 'react';
import ButtonFinalization from '../../../../components/Payment/ButtonFinalization';

import { Container, Title } from './styles';

import Subtitle from '../../../../components/Subtitle';
import HotelCard from '../../../../components/Hotel/HotelCard';

function HotelReview() {
  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <Container>
        <Subtitle>Você já escolheu seu quarto:</Subtitle>
        <HotelCard
          isSelected={true}
          subtitle01="Quarto reservado"
          subtitle02="Pessoas no seu quarto"
          text01="101 (Double)"
          text02="Você e mais 1"
          image="https://http.cat/200"
        />
        <ButtonFinalization>TROCAR DE QUARTO</ButtonFinalization>
      </Container>
    </>
  );
}

export default HotelReview;
