import styled from 'styled-components';

export const ActivityStyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  width: 265px;
  grid-column: 1;
  grid-row: ${({ startEnd }) => startEnd};
  background-color: ${({ subscribed }) => subscribed ? '#D0FFDB' : '#f1f1f1'};
  border-radius: 5px;
  align-items: center;
  border: 10px solid ${({ subscribed }) => subscribed ? '#D0FFDB' : '#f1f1f1'};;
  .main-content {
    height: 100%;
    .time {
      margin-top: 6px;
    }
  }
  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
  .activity-status {
    width: 60px;
    min-height: 100%;
    background-color: ${({ subscribed }) => subscribed ? '#D0FFDB' : '#f1f1f1'};
    border: 0;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    :disabled {
      background-color: #f1f1f1;
      color: #cc6666;
    }
    h2 {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 9px;
      line-height: 11px;
    }
  }
`;
