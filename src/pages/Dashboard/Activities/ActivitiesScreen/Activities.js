import { useState } from 'react';
import ActivitiesByDay from './ActivitiesByDay';

export default function Activities({ activities }) {
  const [day, setDay] = useState(null);

  return (
    <ActivitiesByDay activities={activities} setDay={setDay} />
  );
}
