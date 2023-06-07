import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/buy-tickets' element={<BuyTicketsPage />} />
  </Routes>
);
const HomePage = () => <h1>Home</h1>;
const BuyTicketsPage = () => <h1>Buy Tickets</h1>;
