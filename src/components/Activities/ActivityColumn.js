import styled from 'styled-components';
import ActivityCard from './ActivityCard';

export default function ActivityColumn(props) {
  const { place } = props;

  return (
    <ActivityStyledColumn>
      <h1>{place.name}</h1>
      <div className="activity-box-container">
        {place.activities.map((activity) => (
          <ActivityCard activity={activity} />
        ))}
      </div>
    </ActivityStyledColumn>
  );
}

const ActivityStyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  .activity-box-container {
    display: flex;
    flex-direction: column;
  }
`;
