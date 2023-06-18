import { getImageSrcByTitle } from '../getImageSrcByTitle';

describe('getImageSrcByTitle', () => {
  it('should return the image source URL for a valid movie title', () => {
    const title = 'Spider-Man: Across the Spider-Verse';
    const expectedImageSrc =
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFHMCMi3SM6HVf0M-Ua0zLlXgBvdsyTT8JL47mVS58uxEaEPse';

    const result = getImageSrcByTitle(title);

    expect(result).toEqual(expectedImageSrc);
  });

  it('should return null for an invalid movie title', () => {
    const title = 'Invalid Movie Title';

    const result = getImageSrcByTitle(title);

    expect(result).toBeNull();
  });
});
