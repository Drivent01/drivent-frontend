import ActivityCard from '../ActivityCard/ActivityCard';
import { ActivityStyledColumn } from './styles';

export default function ActivityColumn(props) {
  const { place } = props;

  return (
    <ActivityStyledColumn>
      <h1 className="place">{place.name}</h1>
      <div className="activity-box-container">
        {place.activities.map((activity) => (
          <ActivityCard activity={activity} key={activity.id} />
        ))}
      </div>
    </ActivityStyledColumn>
  );
}
