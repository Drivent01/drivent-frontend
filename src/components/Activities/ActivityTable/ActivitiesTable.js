import { useEffect, useState } from 'react';
import ActivityColumn from '../ActivityColumn/ActivityColumn';
import { ActivityStyledTable } from './styles';

export default function ActivitiesTable({ dayAcitivities }) {
  const [places, setplaces] = useState([]);

  useEffect(() => {
    setplaces(parseActivities(dayAcitivities));
  }, [dayAcitivities]);

  function parseActivities(activities) {
    const places = [
      { name: 'Auditório Principal', activities: [] },
      { name: 'Auditório Lateral', activities: [] },
      { name: 'Sala de Workshop', activities: [] },
    ];
    if (!activities) return [];
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
      {places?.map((place) => (
        <ActivityColumn place={place} key={place.name} />
      ))}
    </ActivityStyledTable>
  );
}
