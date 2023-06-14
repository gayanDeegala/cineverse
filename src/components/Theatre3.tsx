import { ValueType } from '@rc-component/mini-decimal';
import { Button, Row } from 'antd';
import { useState } from 'react';
import { Status } from '../enums/enums';
import { Theatre3Layout } from './layouts';
import {
  BlueSeat,
  EmptyHalfSeat,
  EmptySeat,
  GreenSeat,
  OrangeSeat,
  SeatLayout,
  Screen,
  Controls,
  CountInput,
  OptionPanel,
  PageWrapper,
  TheatreWrapper,
} from './Theatre';

export const Theatre3 = () => {
  const [countInputs, setCountInputs] = useState(Array(8).fill(0));
  const bookedSeats = ['A9', 'A10', 'A8', 'C10', 'E7', 'F8', 'L2', 'L9'];
  const seatingPlan = ['A1', 'C9', 'C10', 'C8', 'G17', 'G20', 'J5'];

  const handleCountInputChange = (index: number, value: ValueType | null) => {
    const updatedInputs = [...countInputs];
    updatedInputs[index] = value;
    setCountInputs(updatedInputs);
  };

  const getStatus = (seat: string) => {
    if (bookedSeats.includes(seat)) {
      return Status.booked;
    }
    if (seatingPlan.includes(seat)) {
      return Status.selected;
    }
    return Status.available;
  };

  const orangeSeats = Theatre3Layout.orangeSeats;
  const blueSeats = Theatre3Layout.blueSeats;
  const greenSeats = Theatre3Layout.greenSeats;

  return (
    <PageWrapper>
      <TheatreWrapper>
        <OptionPanel>
          {countInputs.map((input, index) => (
            <CountInput
              key={index}
              value={input}
              onChange={(value) => handleCountInputChange(index, value)}
            />
          ))}
        </OptionPanel>
        <SeatLayout>
          <Screen>Screen</Screen>
          {orangeSeats.map((row: string[]) => {
            return (
              <Row key={row[0]}>
                {row.map((seat) => {
                  if (seat === 'half') {
                    return <EmptyHalfSeat key={seat} />;
                  }
                  if (seat === 'empty') {
                    return <EmptySeat key={seat} />;
                  }
                  return (
                    <OrangeSeat status={getStatus(seat)} key={seat}>
                      {seat}
                    </OrangeSeat>
                  );
                })}
              </Row>
            );
          })}
          {blueSeats.map((row: string[]) => {
            return (
              <Row key={row[0]}>
                {row.map((seat) => {
                  if (seat === 'half') {
                    return <EmptyHalfSeat key={seat} />;
                  }
                  if (seat === 'empty') {
                    return <EmptySeat key={seat} />;
                  }
                  return (
                    <BlueSeat status={getStatus(seat)} key={seat}>
                      {seat}
                    </BlueSeat>
                  );
                })}
              </Row>
            );
          })}
          {greenSeats.map((row: string[]) => {
            return (
              <Row key={row[0]}>
                {row.map((seat) => {
                  if (seat === 'half') {
                    return <EmptyHalfSeat key={seat} />;
                  }
                  if (seat === 'empty') {
                    return <EmptySeat key={seat} />;
                  }
                  return (
                    <GreenSeat status={getStatus(seat)} key={seat}>
                      {seat}
                    </GreenSeat>
                  );
                })}
              </Row>
            );
          })}
        </SeatLayout>
      </TheatreWrapper>
      <Controls>
        <Button style={{ marginTop: '10px' }}>Generate a Seating Plan</Button>
        <Button type='primary' style={{ marginTop: '10px' }}>
          Accept the Seating Plan
        </Button>
      </Controls>
    </PageWrapper>
  );
};