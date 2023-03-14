import styled from 'styled-components';

export default function ActivitiesTable(props) {
  const places = [
    {
      id: 0,
      name: 'Auditório Principal',
      activities: [
        {
          name: 'Minecraft: montando o PC ideal',
          startsAt: '9:00',
          endsAt: '10:00',
          capacity: 10,
          subscribed: [1, 2, 3, 4],
        },
      ],
    },
    {
      id: 1,
      name: 'Auditório Lateral',
      activities: [
        {
          name: 'Minecraft: montando o PC ideal 2',
          startsAt: '9:00',
          endsAt: '10:00',
          capacity: 10,
          subscribed: [1, 2, 3, 4],
        },
      ],
    },
    {
      id: 2,
      name: 'Sala de Workshop',
      activities: [
        {
          name: 'Minecraft: montando o PC ideal 3',
          startsAt: '9:00',
          endsAt: '10:00',
          capacity: 10,
          subscribed: [1, 2, 3, 4],
        },
      ],
    },
  ];

  return (
    <ActivityStyledTable>
      {places.map((place, index) => (
        <ActivityPlaceColumn place={place} key={index} />
      ))}
    </ActivityStyledTable>
  );
}

function ActivityPlaceColumn(props) {
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

function ActivityCard({ activity }) {
  const { name, startsAt, endsAt, capacity, subscribed } = activity;
  return (
    <ActivityStyledCard>
      <div className="main-content">
        <h1>{activity.name}</h1>
        <div className="time">
          <h2>{activity.startsAt}</h2>
          <h2>{activity.endsAt}</h2>
        </div>
      </div>
      <button className="activity-status" onClick={() => {}} disabled={capacity === subscribed.length}></button>
      <h2>{activity.capacity}</h2>
      <h2>{activity.subscribed}</h2>
    </ActivityStyledCard>
  );
}

const ActivityStyledTable = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;

const ActivityStyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  .activity-box-container {
    display: flex;
    flex-direction: column;
  }
`;

const ActivityStyledCard = styled.div`
  width: 265px;
  background-color: #f1f1f1;
  border-radius: 5px;
`;
