import { Button, Carousel, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { movieFixtures } from '../fixches/movieFixtures';
import { CAROUSEL_ITEM_HEIGHT } from './const';

const { Title, Paragraph } = Typography;

export const Home = () => (
  <CarouselContainer>
    <Carousel autoplay>
      {movieFixtures.map(({ title, description, genres, theatres, imageSrc }) => (
        <div key={title}>
          <CarouselItemLayout>
            <Left>
              <ImageContainer>
                <MovieImage src={imageSrc} />
              </ImageContainer>
            </Left>
            <Right>
              <MovieDescription>
                <Title>{title}</Title>
                <Paragraph>{description}</Paragraph>
                <Paragraph>Now showing at CineVerse - {theatres.join(', ')} </Paragraph>
                <GenresContainer>
                  {genres.map((genre) => (
                    <Tag key={genre}>{genre}</Tag>
                  ))}
                </GenresContainer>
                <Link to='/buy-tickets'>
                  <Button type='primary'>Buy Tickets</Button>
                </Link>
              </MovieDescription>
            </Right>
          </CarouselItemLayout>
        </div>
      ))}
    </Carousel>
  </CarouselContainer>
);

const CarouselContainer = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  .slick-slide {
    height: ${CAROUSEL_ITEM_HEIGHT}px;
  }
`;

const CarouselItemLayout = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: ${CAROUSEL_ITEM_HEIGHT}px;
  grid-template-columns: 1fr 2fr;
`;

const Left = styled.div``;

const ImageContainer = styled.div`
  height: 500px;
  margin-top: 200px;
`;

const Right = styled.div``;

const MovieImage = styled.img`
  object-fit: contain;
  max-width: 100%;
`;

const MovieDescription = styled.div`
  margin: 450px 0 0 20px;
`;

const GenresContainer = styled.div`
  margin-bottom: 14px;
`;
