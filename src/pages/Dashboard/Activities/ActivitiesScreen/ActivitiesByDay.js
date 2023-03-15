import ButtonFinalization from '../../../../components/Payment/ButtonFinalization';
import StyledSubtitle from '../../../../components/Subtitle';
import { useState } from 'react';

const days = [
  {
    id: 1,
    day: 'Sexta, 18/03'
  },
  {
    id: 2,
    day: 'Sábado, 19/03'
  },
  {
    id: 3,
    day: 'Domingo, 20/03'
  }];

export default function ActivitiesByDay({ activities, setDay, day }) {
  const [selections, setSelections] = useState(days.map((_) => false));

  const fridayActivities = activities.filter(a => a.day === '2022-03-18T03:00:00.000Z');
  const saturdayActivities = activities.filter(a => a.day === '2022-03-19T03:00:00.000Z');
  const sundayActivities = activities.filter(a => a.day === '2022-03-20T03:00:00.000Z');

  const setSelected = (date, index) => {
    setSelections(selections.map((_, i) => i === index));
    if (date === 'Sexta, 18/03') {
      setDay(fridayActivities);
    }

    if (date === 'Sábado, 19/03') {
      setDay(saturdayActivities);
    }

    if (date === 'Domingo, 20/03') {
      setDay(sundayActivities);
    }
  };

  return (
    <>
      {!day && <StyledSubtitle>Primeiro, filtre pelo dia do evento: </StyledSubtitle>}
      {days.map((d, i) => (
        <ButtonFinalization
          key={d.id}
          width='131px'
          margin='17px'
          isSelected={selections[i]}
          onClick={() => setSelected(d.day, i)}
          disabled={selections[i]}
        >
          <p className='title'>{d.day}</p>
        </ButtonFinalization>
      ))}
    </>
  );
}
