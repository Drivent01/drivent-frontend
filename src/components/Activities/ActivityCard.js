import { BiCheckCircle } from 'react-icons/bi';
import CircleOutline from '../../assets/circle-outlined.png';
import { CgEnter } from 'react-icons/cg';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { useState } from 'react';
import useSaveActivities from '../../hooks/api/useSaveActivities';
import dayjs from 'dayjs';

export default function ActivityCard({ activity }) {
  const { title, vacancies, startsAt, endsAt, userSubscribed, id } = activity;
  const [loading, setLoading] = useState(false);
  const { saveActivities } = useSaveActivities();

  function activityStatus() {
    if (loading)
      return (
        <>
          <Loader
            height="20"
            width="20"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="5"
            type="Puff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <h2>Carregando...</h2>
        </>
      );
    if (vacancies === 0)
      return (
        <>
          <img src={CircleOutline} alt="" />
          <h2>Esgotado</h2>
        </>
      );
    if (userSubscribed)
      return (
        <>
          <BiCheckCircle />
          <h2>Inscrito</h2>
        </>
      );
    return (
      <>
        <CgEnter style={{ color: 'green', width: '30px', height: '20px' }} />
        <h2 style={{ color: '#078632' }}>{vacancies} vagas</h2>
      </>
    );
  }

  function createStartEnd() {
    const start = (parseInt(dayjs(startsAt, 'H').format('H')) * 2 - 17) + parseInt(dayjs(startsAt, 'H:mm').format('mm')) / 30;
    const end = (parseInt(dayjs(endsAt, 'H').format('H')) * 2 - 17)  + parseInt(dayjs(endsAt, 'H:mm').format('mm')) / 30;
    return `${start} / ${end}`;
  }

  async function handleSubscribe(e) {
    e.preventDefault();
    try {
    } catch (err) {
      await saveActivities({ activityId: id });
    }
  }

  return (
    <ActivityStyledCard startEnd={createStartEnd()}>
      <div className="main-content">
        <h1>{title}</h1>
        <div className="time">
          <h2>
            {startsAt} - {endsAt}
          </h2>
        </div>
      </div>
      <button className="activity-status" onClick={handleSubscribe} disabled={vacancies === 0}>
        <div>{activityStatus()}</div>
      </button>
    </ActivityStyledCard>
  );
}

const ActivityStyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 79px;
  width: 265px;
  grid-column: 1;
  grid-row: ${({ startEnd }) => startEnd};
  background-color: #f1f1f1;
  border-radius: 5px;
  align-items: center;
  border: 10px solid #f1f1f1;
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
    min-height: 60px;
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
