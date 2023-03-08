import styled from 'styled-components';

export const Container = styled.div`
  width: 196px;
  height: 264px;

  padding: 15px;
  border-radius: 10px;

  cursor: pointer;

  margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '20px'};
  background-color: ${({ isSelected }) => isSelected ? '#FFEED2' : '#EBEBEB'};

  img {
    width: 168px;
    height: 109px;
    background-size: cover;
    border-radius: 5px;
  }
  `;

export const ContentInfo = styled.div`
  margin-top: 10px;
  color: #343434;

    h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
  }

  .subTitle {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin-top: 10px;
    text-align: left;
  }

  .text {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
  }

  `;
