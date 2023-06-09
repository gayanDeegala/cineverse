import { Route, Routes } from 'react-router-dom';
import { BuyTickets } from './pages/BuyTickets';
import { Home } from './pages/Home';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/buy-tickets' element={<BuyTickets />} />
  </Routes>
);
