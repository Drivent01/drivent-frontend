import styled from 'styled-components';

export const ContainerButton = styled.button`
  outline: none;
  border: none;
  box-sizing: border-box;

  font-family: 'Roboto', sans-serif;

  width: ${({ width }) => width ? width : '167px'};
  height: 37px;
  margin-right: ${({ margin }) => margin ? margin : ''};
  cursor: pointer;

  background-color: ${({ isSelected }) => isSelected ? '#FFD37D' : '#E0E0E0'};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  .title{
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #000000;
  }

`;
