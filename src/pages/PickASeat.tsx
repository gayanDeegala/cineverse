import { Typography } from 'antd';
import { Theatre1 } from '../components/Theatre1';
import { Theatre2 } from '../components/Theatre2';
import { Theatre3 } from '../components/Theatre3';
import { Theatre } from '../enums/enums';
import { useGetEvent } from '../hooks/useGetEvent';
import { getUrlParameters } from './utils/getUrlParameters';

const { Title } = Typography;

export const PickASeat = () => {
  const { eventId, theatre } = getUrlParameters();
  const { data: { booked_seats: bookedSeats } = {} } = useGetEvent(eventId);

  return (
    <>
      <Title>Buy Tickets</Title>
      {theatre === Theatre.theatre1 ? (
        <Theatre1 eventId={eventId} bookedSeats={bookedSeats} />
      ) : theatre === Theatre.theatre2 ? (
        <Theatre2 eventId={eventId} bookedSeats={bookedSeats} />
      ) : (
        <Theatre3 eventId={eventId} bookedSeats={bookedSeats} />
      )}
    </>
  );
};
