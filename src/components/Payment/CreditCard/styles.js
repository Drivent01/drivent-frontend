import styled from 'styled-components';

export const Container = styled.div`
#PaymentForm{
  display: flex;
  width: 706px;
}
button {
    margin-top: 60px;
  }
`;

export const CardCredentials = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  width: 400px;
  input {
    height: 45px;
    border: 1px solid #ebebeb;
    border-radius: 5px;
  }
  input[name='number'] input[name='name'] {
    width: 450px;
  }
  input[name='number'] {
    grid-column: 1/4;
  }
  input[name='name'] {
    grid-column: 1/4;
  }
  input[name='cvc'] {
    grid-column: 1/3;
  }
`;
