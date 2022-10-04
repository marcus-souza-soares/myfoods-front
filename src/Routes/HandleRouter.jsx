import { Navigate, Route, Routes } from 'react-router-dom';
import { SigIn } from "../Pages/Sigin";
import { SigUp } from "../Pages/Signup"
import { Home } from "../Pages/Home"
import { RevenueByCategory } from "../Pages/Category"
import { Favorites } from '../Pages/Favorites';
import { MyRevenues } from '../Pages/MyRevenues';

export const HandleRoute = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signin' element={<SigIn />} />
    <Route path='/signup' element={<SigUp />} />
    <Route path='/category' element={<RevenueByCategory />} />
    <Route path='/favorites' element={<Favorites />} />
    <Route path='/myrevenues' element={<MyRevenues />} />
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
);
