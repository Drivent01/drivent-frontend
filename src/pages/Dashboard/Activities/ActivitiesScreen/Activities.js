import { useState } from 'react';
import ActivitiesByDay from './ActivitiesByDay';
import ActivitiesTable from '../../../../components/Activities/ActivitiesTable';

export default function Activities({ activities }) {
  const [day, setDay] = useState(null);

  return (
    <>
      <ActivitiesByDay activities={activities} setDay={setDay} />
      <ActivitiesTable day={day} />
    </>
  );
}
