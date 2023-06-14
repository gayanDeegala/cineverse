import { useQuery } from '@tanstack/react-query';

export const useGetEvent = (eventId: string | undefined) => {
  const fetchJob = async () => {
    const response = await fetch(`http://127.0.0.1:8000/events/${eventId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  };

  return useQuery({
    queryKey: ['events', 'get', eventId],
    queryFn: fetchJob,
    enabled: !!eventId,
  });
};
