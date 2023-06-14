import { useQuery } from '@tanstack/react-query';
import { Date, ShowTime, Theatre } from '../enums/enums';

export const useSearchEvent = (
  date: Date | undefined,
  showTime: ShowTime | undefined,
  theatre: Theatre | undefined,
) => {
  const fetchJob = async () => {
    const response = await fetch(`http://127.0.0.1:8000/events/${date}/${showTime}/${theatre}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  };

  return useQuery({
    queryKey: ['events', 'search', date, showTime, theatre],
    queryFn: fetchJob,
    enabled: !!date && !!showTime && !!theatre,
  });
};
