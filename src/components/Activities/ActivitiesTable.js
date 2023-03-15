import { useState } from 'react';
import styled from 'styled-components';
import ActivityColumn from './ActivityColumn';

export default function ActivitiesTable(props) {
  const dataFromApi = [
    {
      id: 4,
      title: 'Palestra X Principal',
      vacancies: 0,
      startsAt: '10:00',
      endsAt: '11:00',
      Places: {
        name: 'Auditório Principal',
      },
      userSubscribed: false,
    },
    {
      id: 0,
      title: 'Palestra X',
      vacancies: 0,
      startsAt: '13:00',
      endsAt: '14:00',
      Places: {
        name: 'Auditório Principal',
      },
      userSubscribed: false,
    },
    {
      id: 1,
      title: 'Palestra Y',
      vacancies: 10,
      startsAt: '9:00',
      endsAt: '10:00',
      Places: {
        name: 'Auditório Lateral',
      },
      userSubscribed: false,
    },
    {
      id: 7,
      title: 'Palestra Y2',
      vacancies: 10,
      startsAt: '10:00',
      endsAt: '11:00',
      Places: {
        name: 'Auditório Lateral',
      },
      userSubscribed: false,
    },
    {
      id: 2,
      title: 'Minecraft: montando o PC ideal 3',
      vacancies: 10,
      startsAt: '9:00',
      endsAt: '11:00',
      Places: {
        name: 'Sala de Workshop',
      },
      userSubscribed: false,
    },
  ];

  const [places, setplaces] = useState(parseActivities(dataFromApi));

  function parseActivities(activities) {
    const places = [];
    activities.forEach((activity) => {
      const { Places } = activity;
      const placeIndex = places.findIndex((place) => place.name === Places.name);
      if (placeIndex === -1) {
        places.push({
          name: Places.name,
          activities: [activity],
        });
      } else {
        places[placeIndex].activities.push(activity);
      }
    });
    return places;
  }

  return (
    <ActivityStyledTable>
      {places?.map((place, index) => (
        <ActivityColumn place={place} key={index} />
      ))}
    </ActivityStyledTable>
  );
}

const ActivityStyledTable = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
