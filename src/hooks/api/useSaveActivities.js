import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useActivities() {
  const token = useToken();

  const {
    data: saveActivities,
    loading: saveActivitiesLoading,
    error: saveActivitiesError,
  } = useAsync((body) => activitiesApi.activitySubscription(body, token), false);

  return {
    saveActivities,
    saveActivitiesLoading,
    saveActivitiesError,
  };
}