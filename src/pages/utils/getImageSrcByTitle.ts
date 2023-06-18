import { movieFixtures } from '../../fixtures/movieFixtures';

export const getImageSrcByTitle = (title: string) => {
  const movie = movieFixtures.find((movie) => movie.title === title);
  return movie ? movie.imageSrc : null;
};
