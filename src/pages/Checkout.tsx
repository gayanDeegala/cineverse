import { Button, Typography } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { useGetEvent } from '../hooks/useGetEvent';
import { getImageSrcByTitle } from './utils/getImageSrcByTitle';
import { getUrlParameters } from './utils/getUrlParameters';

export const Checkout = () => {
  const [paid, setPaid] = useState(false);
  const { eventId, seatingPlan } = getUrlParameters();
  const { data: { date, show_time: showTime, theatre, movie_title: movieTitle } = {} } =
    useGetEvent(eventId);
  const bannerSrc = getImageSrcByTitle(movieTitle);
  const price = '$34';

  return (
    <TicketContainer>
      <Ticket>
        <TicketBanner src={bannerSrc || ''} alt='Movie Banner' />
        <TicketContent>
          <TicketHeader>
            <TicketTitle level={4}>Movie Ticket</TicketTitle>
            <TicketSubtitle>{date}</TicketSubtitle>
          </TicketHeader>
          <TicketInfo>
            <Typography.Text>Movie: {movieTitle}</Typography.Text>
            <Typography.Text>Theatre: {theatre}</Typography.Text>
            <Typography.Text>Show Time: {showTime}</Typography.Text>
          </TicketInfo>
          <TicketSeatPlan>
            <Typography.Text>{seatingPlan.replace(/,/g, ', ')}</Typography.Text>
          </TicketSeatPlan>
          <TicketPrice>
            <Typography.Text>Price: {price}</Typography.Text>
            {!paid && (
              <Button
                type='primary'
                onClick={() => {
                  setPaid(true);
                }}
              >
                Proceed to Payment
              </Button>
            )}
            {paid && (
              <>
                <PaidStamp
                  src={
                    'https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-paid-stamp-vector-illustration-png-image_6616360.png'
                  }
                />
                <QR
                  src={
                    'https://www.freepnglogos.com/uploads/qr-code-png/qr-code-file-bangla-mobile-code-0.png'
                  }
                />
              </>
            )}
          </TicketPrice>
        </TicketContent>
      </Ticket>
    </TicketContainer>
  );
};

const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

const Ticket = styled.div`
  display: flex;
  background-color: #333;
  color: #fff;
  padding: 20px;
  width: 650px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const TicketBanner = styled.img`
  width: 150px;
  margin-right: 20px;
`;

const TicketContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 475px;
`;

const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TicketTitle = styled(Typography.Title)`
  margin: 0;
  color: #fff;
`;

const TicketSubtitle = styled(Typography.Text)`
  margin: 0;
  color: #ccc;
`;

const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  color: #fff;
`;

const TicketSeatPlan = styled.div`
  margin-bottom: 20px;
  color: #fff;
`;

const TicketPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const PaidStamp = styled.img`
  width: 100px;
  position: absolute;
  right: 440px;
`;

const QR = styled.img`
  width: 100px;
  position: absolute;
  right: 340px;
`;
