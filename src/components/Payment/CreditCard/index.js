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
  const [validCardNumber, setValidCardNumber] = useState(false);
  const handleInputFocus = (e) => {
    setCreditCard({ ...creditCard, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreditCard({ ...creditCard, [name]: value });
  };

  const cardNumberSanitization = (type, isValid) => {
    setValidCardNumber(isValid);
    setCreditCard({ ...creditCard, cardIssuer: type.issuer });
  };
  //eslint-disable-next-line
  const handleFinalizationButton = async (e) => {
    e.preventDefault();
    try {
      const credentialsSchema =
        validCardNumber &&
        (creditCard.cvc.length === 3 || creditCard.cvc.length === 4) &&
        creditCard.expiry.length === 5 &&
        creditCard.name.length >= 3;
      if (!credentialsSchema) {
        throw new Error('Dados inválidos!');
      }
      const cardData = {
        issuer: creditCard.cardIssuer,
        number: creditCard.number,
        name: creditCard.name,
        cvv: creditCard.cvc,
        expirationDate: creditCard.expiry,
      };
      await savePayment({ cardData, ticketId });
      toast('Informações salvas com sucesso!');
      setTimeout(() => {
        setConfirmationScreen(true);
      }, 1500);
    } catch (err) {
      if (err.message === 'Dados inválidos!') {
        toast(err.message);
        return;
      }
      toast('Não foi possível fazer o pagamento!');
    }
  };

  return (
    <Container>
      <div id="PaymentForm">
        <div className="card-container">
          <Cards
            cvc={creditCard.cvc}
            expiry={creditCard.expiry}
            focused={creditCard.focus}
            name={creditCard.name}
            number={creditCard.number}
            callback={cardNumberSanitization}
          />
        </div>
        <CardCredentials>
          <div className="card-number-pair">
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              maxLength="19"
            />
            <label>E.g: 49..., 51..., 36..., 37...</label>
          </div>
          <input type="text" name="name" placeholder="Name" onChange={handleInputChange} onFocus={handleInputFocus} maxLength="40"/>
          <input type="tel" name="cvc" placeholder="CVC" onChange={handleInputChange} onFocus={handleInputFocus} maxLength="3"/>
          <input
            type="tel"
            name="expiry"
            placeholder="Valid Thru"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            maxLength="5"
          />
        </CardCredentials>
      </div>
      <button onClick={handleFinalizationButton}>
        <p className="title"> FINALIZAR PAGAMENTO</p>
      </button>
    </Container>
  );
}
