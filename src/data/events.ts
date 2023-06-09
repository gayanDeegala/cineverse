import { Date, ShowTime, Theatre, MovieTitle } from '../enums/enums';
import { Event } from '../types/types';

export const movieTitles: MovieTitle[] = [
  MovieTitle.SpiderManAcrossTheSpiderVerse,
  MovieTitle.SpiderManAcrossTheSpiderVerse,
  MovieTitle.SpiderManAcrossTheSpiderVerse,
  MovieTitle.GuardiansOfTheGalaxyVol3,
  MovieTitle.GuardiansOfTheGalaxyVol3,
  MovieTitle.GuardiansOfTheGalaxyVol3,
  MovieTitle.SpiderManAcrossTheSpiderVerse,
  MovieTitle.SpiderManAcrossTheSpiderVerse,
  MovieTitle.SpiderManAcrossTheSpiderVerse,
  MovieTitle.GuardiansOfTheGalaxyVol3,
  MovieTitle.GuardiansOfTheGalaxyVol3,
  MovieTitle.GuardiansOfTheGalaxyVol3,
  MovieTitle.SpiderManAcrossTheSpiderVerse,
  MovieTitle.SpiderManAcrossTheSpiderVerse,
  MovieTitle.SpiderManAcrossTheSpiderVerse,
  MovieTitle.GuardiansOfTheGalaxyVol3,
  MovieTitle.GuardiansOfTheGalaxyVol3,
  MovieTitle.GuardiansOfTheGalaxyVol3,
  MovieTitle.FastX,
  MovieTitle.FastX,
  MovieTitle.FastX,
  MovieTitle.TheLittleMermaid,
  MovieTitle.TheLittleMermaid,
  MovieTitle.TheLittleMermaid,
];

let i = 0;
export const events = Object.values(Date).reduce((acc: Event[], date) => {
  // Loop through all show times
  for (const showTime of Object.values(ShowTime)) {
    // Loop through all theatres
    for (const theatre of Object.values(Theatre)) {
      acc.push({
        date: date,
        showTime: showTime,
        theatre: theatre,
        movieTitle: movieTitles[i % movieTitles.length],
      });
      i++;
    }
  }
  return acc;
}, []);
