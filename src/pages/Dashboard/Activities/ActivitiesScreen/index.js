import Activities from './Activities';
import useActivities from '../../../../hooks/api/useActivities';
import StyledSubtitle from '../../../../components/Subtitle';

export default function ActivitiesScreen() {
  const { activities, activitiesLoading, activitiesError } = useActivities();

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
