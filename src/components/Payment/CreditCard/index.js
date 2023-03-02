import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Container, CardCredentials } from './styles';
import ButtonFinalization from '../ButtonFinalization';

export default function PaymentForm(props) {
  const [state, setState] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });
  console.log(state);
  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ ...state, [name]: value });
    setState({ ...state, [name]: value });
  };

  return (
    <Container>
      <div id="PaymentForm">
        <Cards cvc={state.cvc} expiry={state.expiry} focused={state.focus} name={state.name} number={state.number} />
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
      <ButtonFinalization>
        <p className="title"> FINALIZAR PAGAMENTO</p>
      </ButtonFinalization>
    </Container>
  );
}
