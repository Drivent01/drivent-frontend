import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Container, CardCredentials } from './styles';
import usePayment from '../../../hooks/api/useSavePayment';
import { toast } from 'react-toastify';

export default function PaymentForm({ setConfirmationScreen, ticketId }) {
  const { savePayment } = usePayment();
  const [creditCard, setCreditCard] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    cardIssuer: '',
  });
  const handleInputFocus = (e) => {
    setCreditCard({ ...creditCard, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreditCard({ ...creditCard, [name]: value });
  };

  const cardSanitization = (type, isValid) => {
    setCreditCard({ ...creditCard, cardIssuer: type.issuer });
  };

  const handleFinalizationButton = async(e) => {
    e.preventDefault();
    try {
      const cardData = {
        issuer: creditCard.cardIssuer,
        number: creditCard.number,
        name: creditCard.name,
        cvv: creditCard.cvc,
        expirationDate: creditCard.expiry,
      };
      await savePayment({ cardData, ticketId });
      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível fazer o pagamento!');
    }
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
          callback={cardSanitization}
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
      <button onClick={handleFinalizationButton}>
        <p className="title"> FINALIZAR PAGAMENTO</p>
      </button>
    </Container>
  );
}
