import React, { useContext, useEffect, useState } from 'react';
import ButtonFinalization from '../../../../components/Payment/ButtonFinalization';

import { Container, Title } from './styles';

import Subtitle from '../../../../components/Subtitle';
import HotelCard from '../../../../components/Hotel/HotelCard';

import HotelReviewContext from '../../../../contexts/HotelReviewContext';
import useToken from '../../../../hooks/useToken';
import { useNavigate } from 'react-router-dom';

const capacityType = { '1': 'Single', '2': 'Double', '3': 'Triple' };

function HotelReview() {
  const token = useToken();
  const navigate = useNavigate();

  const { handleDataBookingUser, roomUser, hotelUser } = useContext(HotelReviewContext);
  const [peopleInTheRoom, setPeopleInTheRoom] = useState(0);

  useEffect(() => {
    handleDataBookingUser(token);
  }, []);

  useEffect(() => {
    if(Boolean(hotelUser.length)) {
      handleSearchQtdPeople();
    }
  }, [hotelUser]);

  const handleSearchQtdPeople = async() => {
    const selectedRoomAndBooking = await hotelUser[0]?.Rooms.filter((item) => item.id === roomUser[0].id);
    const QtdPeopleInTheRoom = await selectedRoomAndBooking[0]?.Booking.length;
    setPeopleInTheRoom(QtdPeopleInTheRoom);
  };

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <Container>
        <Subtitle>Você já escolheu seu quarto:</Subtitle>
        <HotelCard
          isSelected={true}
          subtitle01="Quarto reservado"
          subtitle02="Pessoas no seu quarto"
          text01={roomUser[0]?.name + ' (' + capacityType[roomUser[0]?.capacity] + ')'}
          text02={peopleInTheRoom === 1 ? 'Você' : `Você e mais ${peopleInTheRoom - 1}`}
          image={hotelUser[0]?.image}
          hotel={hotelUser[0]?.name}
        />
        <ButtonFinalization onClick={() => navigate('/dashboard/hotel')}>TROCAR DE QUARTO</ButtonFinalization>
      </Container>
    </>
  );
}

export default HotelReview;
