import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/buy-tickets' element={<BuyTicketsPage />} />
  </Routes>
);
const BuyTicketsPage = () => <h1>Buy Tickets</h1>;
