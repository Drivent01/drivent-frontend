import styled from 'styled-components';
import ActivityCard from './ActivityCard';

export default function ActivityColumn(props) {
  const { place } = props;

  return (
    <ActivityStyledColumn>
      <h1 className="place">{place.name}</h1>
      <div className="activity-box-container">
        {place.activities.map((activity, id) => (
          <ActivityCard activity={activity} key={id} />
        ))}
      </div>
    </ActivityStyledColumn>
  );
}

const ActivityStyledColumn = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: none !important;
  .place {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #7b7b7b;
  }
  .activity-box-container {
    height: 392px;
    min-width: 288px;
    padding: 12px;
    display: grid;
    grid-template-rows: repeat(26, 35px);
    gap: 10px;
    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-y: scroll;
    overflow-x: hidden;
      ::-webkit-scrollbar{
      width: 6px;
      height: 12px;
    }

    ::-webkit-scrollbar-track{
      background: transparent;
    }

    ::-webkit-scrollbar-thumb{
      background: rgb(212, 210, 210);
      border-radius: 1.5px;
    }
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
