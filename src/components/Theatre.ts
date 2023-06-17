import { InputNumber, Tag } from 'antd';
import styled from 'styled-components';
import { Status } from '../enums/enums';

export const PageWrapper = styled.div`
  margin: 50px 20px;
  display: grid;
  justify-content: center;
`;

export const TheatreWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

export const Controls = styled.div`
  display: flex;
  gap: 10px;
  justify-self: center;
`;

export const OptionPanel = styled.div`
  display: grid;
  /* background: salmon; */
  align-content: end;
  gap: 10px;
  margin: 10px 10px;
`;

export const CountInput = styled(InputNumber)`
  height: 32px;
  width: 50px;
`;

export const SeatLayout = styled.div`
  position: relative; /* Ensure the wrapper is positioned relative to this element */
  display: grid;
  gap: 10px;
  background: black;
  padding: 10px;
`;

export const SeatLayoutWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px; /* Adjust the height as per your preference */
`;

export const Screen = styled.div`
  width: 250px;
  height: 50px;
  background: white;
  place-self: center;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

export const EmptySeat = styled(Tag)`
  width: 32px;
  height: 32px;
  justify-content: center;
  display: inline-grid;
  font-size: 10px;
  padding: 5px 10px;
  background: none;
  border: none;changeing
`;

export const EmptyHalfSeat = styled(EmptySeat)`
  width: 12px;
  height: 32px;
  justify-content: center;
  display: inline-grid;
  font-size: 10px;
  padding: 5px 0px;
  background: none;
  border: none;
`;

export const Seat = styled(Tag)<{ status: Status }>`
  width: 32px;
  height: 32px;
  justify-content: center;
  display: inline-grid;
  font-size: 10px;
  padding: 5px 10px;
`;

export const OrangeSeat = styled(Seat)<{ status: Status }>`
  border-color: ${({ status }) => {
    switch (status) {
      case Status.booked:
        return 'rgba(255, 102, 0, 0.3)';
      default:
        return 'rgba(255, 102, 0, 0.9)';
    }
  }};
  background-color: ${({ status }) => {
    switch (status) {
      case Status.selected:
        return 'rgba(255, 102, 0, 0.9)';
      case Status.booked:
        return 'rgba(255, 102, 0, 0.3)';
      default:
        return 'transparent';
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case Status.booked:
        return 'rgba(255, 255, 255, 0.3)';
      default:
        return 'rgba(255, 255, 255, 0.85);';
    }
  }};
`;

export const BlueSeat = styled(Seat)<{ status: Status }>`
  border-color: ${({ status }) => {
    switch (status) {
      case Status.booked:
        return 'rgba(0, 153, 255, 0.3)';
      default:
        return 'rgba(0, 153, 255, 0.9)';
    }
  }};
  background-color: ${({ status }) => {
    switch (status) {
      case Status.selected:
        return 'rgba(0, 153, 255, 0.9)';
      case Status.booked:
        return 'rgba(0, 153, 255, 0.3)';
      default:
        return 'transparent';
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case Status.booked:
        return 'rgba(255, 255, 255, 0.3)';
      default:
        return 'rgba(255, 255, 255, 0.85);';
    }
  }};
`;

export const GreenSeat = styled(Seat)<{ status: Status }>`
  border-color: ${({ status }) => {
    switch (status) {
      case Status.booked:
        return 'rgba(0, 153, 0, 0.3)';
      default:
        return 'rgba(0, 153, 0, 0.9)';
    }
  }};
  background-color: ${({ status }) => {
    switch (status) {
      case Status.selected:
        return 'rgba(0, 153, 0, 0.9)';
      case Status.booked:
        return 'rgba(0, 153, 0, 0.3)';
      default:
        return 'transparent';
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case Status.booked:
        return 'rgba(255, 255, 255, 0.3)';
      default:
        return 'rgba(255, 255, 255, 0.85);';
    }
  }};
`;
