import { Navigate, Route, Routes } from 'react-router-dom';

import { SigIn } from "../Pages/Sigin";
import { SigUp } from "../Pages/Signup"
import { Home } from "../Pages/Home"

export const PublicRouter = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signin' element={<SigIn />} />
    <Route path='/signup' element={<SigUp />} />
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
);
