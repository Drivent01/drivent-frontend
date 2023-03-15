import styled from 'styled-components';
import ActivityCard from './ActivityCard';

export default function ActivityColumn(props) {
  const { place } = props;

  return (
    <ActivityStyledColumn>
      <h1 className='place'>{place.name}</h1>
      <div className="activity-box-container">
        {place.activities.map((activity) => (
          <ActivityCard activity={activity} />
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
    color: #7B7B7B;
  }
  .activity-box-container {
    height: 392px;
    padding: 12px;
    display: grid;
    grid-template-rows: repeat(13, 80px);
    gap: 10px;
    scroll-behavior: smooth;
    overflow-y: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
