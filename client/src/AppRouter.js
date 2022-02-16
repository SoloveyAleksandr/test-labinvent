import { Routes, Route, Navigate } from 'react-router';
import MethodPage from './pages/MethodPage/MethodPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function AppRouter() {
  return (
    <Routes>
      <Route
        path='/method'
        element={<MethodPage />} />

      <Route
        path='/'
        element={<Navigate to={'/method'} />} />

      <Route
        path='/*'
        element={<NotFoundPage />} />

    </Routes>
  );
}

export default AppRouter;