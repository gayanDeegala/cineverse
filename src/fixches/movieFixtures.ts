import { MovieTitle } from '../enums/enums';
import { Movie } from '../types/types';

export const movieFixtures: Movie[] = [
  {
    title: MovieTitle.SpiderManAcrossTheSpiderVerse,
    description:
      "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.",
    genres: ['Action', 'Adventure', 'Animation'],
    theatres: ['T1', 'T2', 'T3'],
    imageSrc:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFHMCMi3SM6HVf0M-Ua0zLlXgBvdsyTT8JL47mVS58uxEaEPse',
  },
  {
    title: MovieTitle.GuardiansOfTheGalaxyVol3,
    description:
      'Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    theatres: ['T1', 'T2'],
    imageSrc:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTslskXBSMy0kAhcDsCHmf2KmNMgva17TaGU2W59Sq-CLgibiIw',
  },
  {
    title: MovieTitle.FastX,
    description:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they've ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom's world and destroy everything -- and everyone -- he loves.",
    genres: ['Action', 'Adventure', 'Thriller'],
    theatres: ['T2', 'T3'],
    imageSrc:
      'https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg',
  },
  {
    title: MovieTitle.TheLittleMermaid,
    description:
      "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to experience life on land.",
    genres: ['Action', 'Adventure', 'Thriller'],
    theatres: ['T3'],
    imageSrc:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDpzRZ5cROWYHDz0e0kvi_yTOi_-ot_XpTnZaRspRCqtchtJK7',
  },
];
