import styled from 'styled-components';

export const ContainerButton = styled.button`
  outline: none;
  border: none;
  box-sizing: border-box;

  width: ${({ width }) => width ? width : '145px'};
  height: ${({ height }) => height ? height : '145px'};
  left: 510px;
  top: 323px;

  border: ${({ isSelected }) => isSelected ? '' : '1px solid #CECECE;'};;
  border-radius: 20px;
  background-color: ${({ isSelected }) => isSelected ? '#FFEED2' : 'white'};;
  cursor: pointer;

  margin-right: 20px;

  .title{
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }

 .subtitle{
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  color:  #898989;
 }
`;
