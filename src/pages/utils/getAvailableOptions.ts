import { events } from '../../data/events';
import { Date, MovieTitle, Theatre, ShowTime } from '../../enums/enums';

export const getAvailableMovies = (date: Date): MovieTitle[] => {
  // Filter the events based on the given date
  const filteredEvents = events.filter((event) => event.date === date);

  // Extract the unique movie titles from the filtered events
  const movies = Array.from(new Set(filteredEvents.map((event) => event.movieTitle)));

  return movies;
};

export const getAvailableTheaters = (date: Date, movieTitle: MovieTitle): Theatre[] => {
  // Filter the events based on the given date and movieTitle
  const filteredEvents = events.filter(
    (event) => event.date === date && event.movieTitle === movieTitle,
  );

  // Extract the unique theater options from the filtered events
  const theaters = Array.from(new Set(filteredEvents.map((event) => event.theatre)));

  return theaters;
};

export const getAvailableShowTimes = (
  date: Date,
  movieTitle: MovieTitle,
  theatre: Theatre,
): ShowTime[] => {
  // Filter the events based on the given date, movieTitle, and theatre
  const filteredEvents = events.filter(
    (event) => event.date === date && event.movieTitle === movieTitle && event.theatre === theatre,
  );

  // Extract the show times from the filtered events
  const showTimes = filteredEvents.map((event) => event.showTime);

  return showTimes;
};
