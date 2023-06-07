import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { FaTicketAlt } from 'react-icons/fa';

export const MenuBar = () => (
  <TopMenu mode='horizontal'>
    <Menu.Item key='home' icon={<HomeFilled />} style={{ justifyContent: 'right' }}>
      <Link to='/'>Home</Link>
    </Menu.Item>
    <Menu.Item key='tickets' icon={<FaTicketAlt />} style={{ justifyContent: 'right' }}>
      <Link to='/buy-tickets'>Buy Tickets</Link>
    </Menu.Item>
  </TopMenu>
);

const TopMenu = styled(Menu)`
  display: flex;
  justify-content: right;
  padding-right: 40px;
`;
