import { Typography } from 'antd';
import { styled } from 'styled-components';
import { AppRoutes } from './Routes';
import { MenuBar } from './components/MenuBar';

const { Title } = Typography;

export const Layout = () => (
  <>
    <PageTitle level={4}>CineVerse</PageTitle>
    <MenuBar />
    <PageContainer>
      <AppRoutes />
    </PageContainer>
  </>
);

const PageTitle = styled(Title)`
  position: absolute;
  top: 10px;
  margin-left: 40px;
`;

const PageContainer = styled.div`
  margin: 0 40px;
`;
