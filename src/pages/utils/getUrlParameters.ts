export const getUrlParameters = () => {
  const currentURL = window.location.href;
  const searchParams = new URLSearchParams(currentURL.split('?')[1]);
  const eventId = searchParams.get('eventId') || '';
  const theatre = searchParams.get('theatre') || '';
  const seatingPlan = searchParams.get('seatingPlan') || '';

  return {
    eventId,
    theatre,
    seatingPlan,
  };
};
