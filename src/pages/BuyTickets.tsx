import { useState } from 'react';
import { styled } from 'styled-components';
import { Button, Tag, Typography } from 'antd';
import { Date, MovieTitle, ShowTime, Theatre } from '../enums/enums';
import {
  getAvailableMovies,
  getAvailableTheaters,
  getAvailableShowTimes,
} from './utils/getAvailableOptions';
import { Link } from 'react-router-dom';
import { useSearchEvent } from '../hooks/useSearchEvent';

const { Title } = Typography;

export const BuyTickets = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedMovie, setSelectedMovie] = useState<MovieTitle | undefined>();
  const [selectedTheatre, setSelectedTheatre] = useState<Theatre | undefined>();
  const [selectedShowTime, setSelectedShowTime] = useState<ShowTime | undefined>();

  const { data: { id } = {} } = useSearchEvent(selectedDate, selectedShowTime, selectedTheatre);
  console.log('asd', id);

  const queryParams = new URLSearchParams();
  if (selectedDate) queryParams.append('eventId', id);
  if (selectedTheatre) queryParams.append('theatre', selectedTheatre.toString());

  const queryString = queryParams.toString();

  const handleSelectDate = (value: Date) => {
    setSelectedDate(value);

    // side effects
    setSelectedMovie(undefined);
    setSelectedTheatre(undefined);
    setSelectedShowTime(undefined);
  };

  const handleSelectMovie = (value: MovieTitle) => {
    setSelectedMovie(value);

    // side effects
    setSelectedTheatre(undefined);
    setSelectedShowTime(undefined);
  };

  const handleSelectTheatre = (value: Theatre) => {
    setSelectedTheatre(value);

    // side effects
    setSelectedShowTime(undefined);
  };

  return (
    <>
      <Title>Buy Tickets</Title>
      <Body>
        {/* Date */}
        <Title level={2}>Select a date</Title>
        <Options>
          {Object.values(Date).map((date) => (
            <Chip
              key={date}
              onClick={() => handleSelectDate(date)}
              selected={date === selectedDate}
            >
              {date}
            </Chip>
          ))}
        </Options>

        {/* Movie */}
        {selectedDate && (
          <>
            <Title level={2}>Select a movie</Title>
            <Options>
              {getAvailableMovies(selectedDate).map((movieTitle) => (
                <Chip
                  key={movieTitle}
                  onClick={() => handleSelectMovie(movieTitle)}
                  selected={movieTitle === selectedMovie}
                >
                  {movieTitle}
                </Chip>
              ))}
            </Options>
          </>
        )}

        {/* Theatre */}
        {selectedDate && selectedMovie && (
          <>
            <Title level={2}>Select a theatre</Title>
            <Options>
              {getAvailableTheaters(selectedDate, selectedMovie).map((theatre) => (
                <Chip
                  key={theatre}
                  onClick={() => handleSelectTheatre(theatre)}
                  selected={theatre === selectedTheatre}
                >
                  {theatre}
                </Chip>
              ))}
            </Options>
          </>
        )}

        {/* Show Time */}
        {selectedDate && selectedMovie && selectedTheatre && (
          <>
            <Title level={2}>Select a showTime</Title>
            <Options>
              {getAvailableShowTimes(selectedDate, selectedMovie, selectedTheatre).map(
                (showTime) => (
                  <Chip
                    key={showTime}
                    onClick={() => setSelectedShowTime(showTime)}
                    selected={showTime === selectedShowTime}
                  >
                    {showTime}
                  </Chip>
                ),
              )}
            </Options>
          </>
        )}
        <Link to={`/pick-seats?${queryString}`}>
          <Button
            type='primary'
            size='large'
            disabled={!(selectedDate && selectedMovie && selectedTheatre && selectedShowTime)}
            style={{ margin: '15px 0 0 50px' }}
          >
            Pick a Seat
          </Button>
        </Link>
      </Body>
    </>
  );
};

const Body = styled.div`
  margin: 100px 20px;
`;

const Options = styled.div`
  margin: 20px;
`;

const Chip = styled(Tag)<{ selected?: boolean }>`
  display: inline-grid;
  align-content: center;
  font-size: 18px;
  padding: 10px 15px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#b30000' : 'transparent')};

  &:hover {
    border-color: #b30000; /* Hover border color */
    background-color: rgba(179, 0, 0, 0.3);
  }
`;
