import Activities from './Activities';
import useActivities from '../../../../hooks/api/useActivities';
import StyledSubtitle from '../../../../components/Subtitle';
import { useContext } from 'react';
import ActivityContext from '../../../../contexts/ActivityContext';

export default function ActivitiesScreen() {
  const { activitiesLoading, activitiesError } = useActivities();
  const { activities } = useContext(ActivityContext);

  if (activitiesLoading) {
    return <StyledSubtitle>Carregando...</StyledSubtitle>;
  }

  if (activitiesError) {
    return <StyledSubtitle>Ops... Tivemos um erro</StyledSubtitle>;
  }

  if (!activities) {
    return <StyledSubtitle>As atividades do envento ainda não estão disponíveis</StyledSubtitle>;
  }

  return <Activities activities={activities} />;
}
