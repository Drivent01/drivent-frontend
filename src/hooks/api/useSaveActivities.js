import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useSaveActivities() {
  const token = useToken();

  const {
    act: saveActivities,
    loading: saveActivitiesLoading,
    error: saveActivitiesError,
  } = useAsync((body) => activitiesApi.activitySubscription(body, token), false);

  return {
    saveActivities,
    saveActivitiesLoading,
    saveActivitiesError,
  };
}
