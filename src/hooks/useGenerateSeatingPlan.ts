import { useQuery } from '@tanstack/react-query';
import { ValueType } from '@rc-component/mini-decimal';
import { countInputsToHeadcounts } from '../pages/utils/countInputsToHeadcounts';

export const useGenerateSeatingPlan = (
  eventId: string,
  countInputs: (ValueType | null)[],
  seatLabels: string[],
) => {
  const request = countInputsToHeadcounts(countInputs, seatLabels);

  const postBody = JSON.stringify({
    // eslint-disable-next-line camelcase
    event_id: eventId,
    rows: request,
  });

  const generateSeatingPlan = async () => {
    const response = await fetch('http://127.0.0.1:8000/seating-plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: postBody,
    });

    return response.json();
  };

  return useQuery({
    queryKey: ['seating-plan', eventId, countInputs, seatLabels],
    queryFn: generateSeatingPlan,
    enabled: !!eventId,
  });
};
