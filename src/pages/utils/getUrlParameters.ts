export const getUrlParameters = () => {
  const currentURL = window.location.href;
  const searchParams = new URLSearchParams(currentURL.split('?')[1]);
  const date = searchParams.get('date') || '';
  const movie = searchParams.get('movie') || '';
  const theatre = searchParams.get('theatre') || '';
  const showtime = searchParams.get('showtime') || '';

  return {
    date,
    movie,
    theatre,
    showtime,
  };
};
