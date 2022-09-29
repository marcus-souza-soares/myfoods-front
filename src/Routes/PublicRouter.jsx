import { Navigate, Route, Routes } from 'react-router-dom';

import { SigIn } from "../Pages/Sigin";


export const PublicRouter = () => (
  <Routes>
    <Route path='/signin' element={<SigIn />} />
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
);
