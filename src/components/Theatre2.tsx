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
  SeatLayoutWrapper,
} from './Theatre';

const seatLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M'];

export const Theatre2 = ({
  eventId,
  bookedSeats = [],
}: {
  eventId: string;
  bookedSeats: string[];
}) => {
  const [countInputs, setCountInputs] = useState<(ValueType | null)[]>(Array(8).fill(0));

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

  const radius = 100;
  const angleStep = Math.PI / 20;

  const calculateSeatPosition = (seatIndex: number) => {
    const angle = angleStep * seatIndex;
    const y = Math.sin(angle) * radius - 50;
    return { y };
  };

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
              style={{ transform: 'translateY(-90px)' }}
            />
          ))}
        </OptionPanel>
        <SeatLayoutWrapper>
          <SeatLayout style={{ paddingBottom: '80px', gap: '15px' }}>
            <Screen>Screen</Screen>
            {orangeSeats.map((row: string[]) => {
              return (
                <Row key={row[0]}>
                  {row.map((seat: string, seatIndex: number) => {
                    const { y } = calculateSeatPosition(seatIndex);
                    if (seat === 'half') {
                      return <EmptyHalfSeat key={seat} />;
                    }
                    if (seat === 'empty') {
                      return <EmptySeat key={seat} />;
                    }
                    return (
                      <OrangeSeat
                        status={getStatus(seat)}
                        key={seat}
                        style={{ transform: `translateY(${y}px)` }}
                      >
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
                  {row.map((seat: string, seatIndex: number) => {
                    const { y } = calculateSeatPosition(seatIndex);
                    if (seat === 'half') {
                      return <EmptyHalfSeat key={seat} />;
                    }
                    if (seat === 'empty') {
                      return <EmptySeat key={seat} />;
                    }
                    return (
                      <BlueSeat
                        status={getStatus(seat)}
                        key={seat}
                        style={{ transform: `translateY(${y}px)` }}
                      >
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
                  {row.map((seat: string, seatIndex: number) => {
                    const { y } = calculateSeatPosition(seatIndex);
                    if (seat === 'half') {
                      return <EmptyHalfSeat key={seat} />;
                    }
                    if (seat === 'empty') {
                      return <EmptySeat key={seat} />;
                    }
                    return (
                      <GreenSeat
                        status={getStatus(seat)}
                        key={seat}
                        style={{ transform: `translateY(${y}px)` }}
                      >
                        {seat}
                      </GreenSeat>
                    );
                  })}
                </Row>
              );
            })}
          </SeatLayout>
        </SeatLayoutWrapper>
      </TheatreWrapper>
      <Controls>
        <Button type='primary' style={{ marginTop: '10px' }}>
          Accept the Seating Plan
        </Button>
      </Controls>
    </PageWrapper>
  );
};
