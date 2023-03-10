import styled from 'styled-components';

export const Container = styled.div`
  width: 190px;
  height: 45px;
  border: 1px solid #CECECE;
  background-color: ${(props) => {
    if (props.isFull) {
      return '#E9E9E9';
    } else if (props.isSelected) {
      return '#FFEED2';
    }
  }};
  border-radius: 10px;
  padding: 12px;
  margin-right: 18px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RoomName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.isFull ? '#9D9D9D' : '#454545'};
  margin-left: 4px;
`;

export const IconGroupContainer = styled.div`
  display: flex;
`;
