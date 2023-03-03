import styled from 'styled-components';

export const Container = styled.div`
  #PaymentForm {
    display: flex;
    width: 706px;
  }
  .card-container {
    margin-right: 30px;
  }
  button {
    margin-top: 60px;
    width: 182px;
    height: 37px;
    border: 0;
    background: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
`;

export const CardCredentials = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  width: 400px;
  input {
    height: 45px;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    font-size: 18px;
    padding: 0 10px;
    ::placeholder {
      color: #b7b7b7;
    }
  }
  .card-number-pair {
    display: flex;
    flex-direction: column;
    grid-column: 1/4;
    label {
      color: #b7b7b7;
      margin-top: 5px;
      font-family: sans-serif;
      font-size: 12px;
    }
  }
  input[name='name'] {
    grid-column: 1/4;
    margin-top: 7px;
  }
  input[name='cvc'] {
    grid-column: 1/3;
  }
`;
