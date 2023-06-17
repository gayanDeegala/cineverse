import { Route, Routes } from 'react-router-dom';
import { BuyTickets } from './pages/BuyTickets';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';
import { PickASeat } from './pages/PickASeat';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/buy-tickets' element={<BuyTickets />} />
    <Route path='/pick-seats' element={<PickASeat />} />
    <Route path='/checkout' element={<Checkout />} />
  </Routes>
);
