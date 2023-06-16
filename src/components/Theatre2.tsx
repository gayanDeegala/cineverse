import { ValueType } from '@rc-component/mini-decimal';
import { Button, Row } from 'antd';
import { useState } from 'react';
import { Status } from '../enums/enums';
import { useGenerateSeatingPlan } from '../hooks/useGenerateSeatingPlan';
import { Theatre2Layout } from './layouts';
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

const seatLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M'];

export const Theatre2 = ({
  eventId,
  bookedSeats = [],
}: {
  eventId: string;
  bookedSeats: string[];
}) => {
  const [countInputs, setCountInputs] = useState<(ValueType | null)[]>(Array(12).fill(0));

  const { data: { seating_plan: seatingPlan = [] } = {} } = useGenerateSeatingPlan(
    eventId,
    countInputs,
    seatLabels,
  );

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

  const orangeSeats = Theatre2Layout.orangeSeats;
  const blueSeats = Theatre2Layout.blueSeats;
  const greenSeats = Theatre2Layout.greenSeats;

  return (
    <PageWrapper>
      <TheatreWrapper>
        <OptionPanel>
          {countInputs.map((input, index) => (
            <CountInput
              key={index}
              value={input}
              onChange={(value) => handleCountInputChange(index, value)}
              min={0}
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
        <Button type='primary' style={{ marginTop: '10px' }}>
          Accept the Seating Plan
        </Button>
      </Controls>
    </PageWrapper>
  );
};
