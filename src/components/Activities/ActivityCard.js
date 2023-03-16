import { BiCheckCircle } from 'react-icons/bi';
import CircleOutline from '../../assets/circle-outlined.png';
import { CgEnter } from 'react-icons/cg';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import useSaveActivities from '../../hooks/api/useSaveActivities';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import ActivityContext from '../../contexts/ActivityContext';

export default function ActivityCard({ activity }) {
  const { title, vacancies, startsAt, endsAt, id, userSubscribed: userSubscribedFromApi } = activity;
  const [userSubscribed, setUserSubscribed] = useState(userSubscribedFromApi);
  const [loading, setLoading] = useState(false);
  const { saveActivities } = useSaveActivities();
  const { setReload } = useContext(ActivityContext);

  function activityStatus() {
    if (loading)
      return (
        <>
          <Loader
            height="20"
            width="20"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius={5}
            type="Puff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <h2>Carregando...</h2>
        </>
      );
    else if (userSubscribed) {
      return (
        <>
          <BiCheckCircle style={{ color: '#078632', width: '20px', height: '20px' }} />
          <h2 style={{ color: '#078632' }}>Inscrito</h2>
        </>
      );
    } else if (vacancies === 0) {
      return (
        <>
          <img src={CircleOutline} alt="" />
          <h2>Esgotado</h2>
        </>
      );
    } else {
      return (
        <>
          <CgEnter style={{ color: 'green', width: '30px', height: '20px' }} />
          <h2 style={{ color: '#078632' }}>{vacancies} vagas</h2>
        </>
      );
    }
  }

  function createStartEnd() {
    const start =
      parseInt(dayjs(startsAt, 'H').format('H')) * 2 - 17 + parseInt(dayjs(startsAt, 'H:mm').format('mm')) / 30;
    const end = parseInt(dayjs(endsAt, 'H').format('H')) * 2 - 17 + parseInt(dayjs(endsAt, 'H:mm').format('mm')) / 30;
    return `${start} / ${end}`;
  }

  async function handleSubscribe(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await saveActivities({ activityId: id });
      setUserSubscribed(!userSubscribed);
      setReload(true);
      toast('Inscrição realizada com sucesso!');
    } catch (err) {
      toast('Problema na inscrição!');
    }
    setLoading(false);
  }

  return (
    <ActivityStyledCard startEnd={createStartEnd()} subscribed={userSubscribed}>
      <div className="main-content">
        <h1>{title}</h1>
        <div className="time">
          <h2>
            {startsAt} - {endsAt}
          </h2>
        </div>
      </div>
      <button
        className="activity-status"
        onClick={handleSubscribe}
        disabled={vacancies === 0 && !userSubscribed}
        key={`${id}-button`}
      >
        <div>{activityStatus()}</div>
      </button>
    </ActivityStyledCard>
  );
}

const ActivityStyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  width: 265px;
  grid-column: 1;
  grid-row: ${({ startEnd }) => startEnd};
  background-color: ${({ subscribed }) => subscribed ? '#D0FFDB' : '#f1f1f1'};
  border-radius: 5px;
  align-items: center;
  border: 10px solid ${({ subscribed }) => subscribed ? '#D0FFDB' : '#f1f1f1'};;
  .main-content {
    height: 100%;
    .time {
      margin-top: 6px;
    }
  }
  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
  .activity-status {
    width: 60px;
    min-height: 100%;
    background-color: ${({ subscribed }) => subscribed ? '#D0FFDB' : '#f1f1f1'};
    border: 0;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    :disabled {
      background-color: #f1f1f1;
      color: #cc6666;
    }
    h2 {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 9px;
      line-height: 11px;
    }
  }
`;
