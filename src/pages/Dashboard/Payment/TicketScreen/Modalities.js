import { useState } from 'react';
import { TicketModality } from './TicketModality';
import { HotelModality } from './HotelModality';
import ButtonFinalization from '../../../../components/Payment/ButtonFinalization';

export const Modalities = ({ types }) => {
  const [showHotels, setShowHotels] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  //const [choosenModality, setChoosenModality] = useState(null);

  const typesWithoutHotel = types
    .filter(t => !t.includesHotel)
    .sort((a, b) => b.price - a.price);

  return (
    <>
      <TicketModality
        typesWithoutHotel={typesWithoutHotel}
        setShowHotels={setShowHotels}
        setShowConfirmation={setShowConfirmation} />
      {showHotels &&
        <HotelModality />}
      {showConfirmation && <ButtonFinalization />}
    </>
  );
};
