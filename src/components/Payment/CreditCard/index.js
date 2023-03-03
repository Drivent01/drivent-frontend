import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Container, CardCredentials } from './styles';
import ButtonFinalization from '../ButtonFinalization';
import usePayment from '../../../hooks/api/useSavePayment';
import useTicket from '../../../hooks/api/useTicket';

export default function PaymentForm({ setConfirmationScreen }) {
  const { savePayment } = usePayment();
  const { ticket } = useTicket();
  const [creditCard, setCreditCard] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });
  const handleInputFocus = (e) => {
    setCreditCard({ ...creditCard, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreditCard({ ...creditCard, [name]: value });
  };

  const handleFinalizationButton = (e) => {
    e.preventDefault();
    savePayment({ cardData: creditCard, ticketId: 1 });
    console.log('Finalizar pagamento');
  };

  return (
    <Container>
      <div id="PaymentForm">
        <Cards
          cvc={creditCard.cvc}
          expiry={creditCard.expiry}
          focused={creditCard.focus}
          name={creditCard.name}
          number={creditCard.number}
        />
        <CardCredentials>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input type="text" name="name" placeholder="Name" onChange={handleInputChange} onFocus={handleInputFocus} />
          <input type="tel" name="cvc" placeholder="CVC" onChange={handleInputChange} onFocus={handleInputFocus} />
          <input
            type="tel"
            name="expiry"
            placeholder="Valid Thru"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </CardCredentials>
      </div>
      <ButtonFinalization onClick={handleFinalizationButton}>
        <p className="title"> FINALIZAR PAGAMENTO</p>
      </ButtonFinalization>
    </Container>
  );
}
