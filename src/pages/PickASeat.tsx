import { Typography } from 'antd';
import { Theatre1 } from '../components/Theatre1';
import { Theatre3 } from '../components/Theatre3';
import { Theatre } from '../enums/enums';
import { getUrlParameters } from './utils/getUrlParameters';

const { Title } = Typography;

export const PickASeat = () => {
  const { theatre } = getUrlParameters();

  return (
    <>
      <Title>Buy Tickets</Title>
      {theatre === Theatre.theatre1 ? (
        <Theatre1 />
      ) : theatre === Theatre.theatre2 ? (
        <></>
      ) : (
        <Theatre3 />
      )}
    </>
  );
};
