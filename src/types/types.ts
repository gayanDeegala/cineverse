import { Date, MovieTitle, ShowTime, Theatre } from '../enums/enums';

export type Movie = {
  title: MovieTitle;
  description: string;
  genres: string[];
  theatres: string[];
  imageSrc: string;
};

export type Event = {
  date: Date;
  showTime: ShowTime;
  theatre: Theatre;
  movieTitle: MovieTitle;
};
