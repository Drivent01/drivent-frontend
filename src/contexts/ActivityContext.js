import { createContext, useEffect, useState } from 'react';
import useActivities from '../hooks/api/useActivities';

const ActivityContext = createContext();
export default ActivityContext;

export function ActivityProvider({ children }) {
  const [activities, setActivities] = useState([]);
  const [reload, setReload] = useState(false);
  const { getActivities } = useActivities();
  //eslint-disable-next-line
  useEffect(async () => {
    if (reload) {
      setReload(false);
      setActivities(await getActivities());
    }
  }, [reload]);
  //eslint-disable-next-line
  useEffect(async () => {
    setActivities(await getActivities());
  }, []);

  return (
    <ActivityContext.Provider
      value={{
        activities,
        setActivities,
        setReload,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
}
