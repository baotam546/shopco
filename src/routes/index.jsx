import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { publicRoutes, privateRoutes } from '../config/routes';
// import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <MainLayout>
              <Component />
            </MainLayout>
          }
        />
      ))}

      {/* Protected Routes */}
      {privateRoutes.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={
            // <PrivateRoute>
              <MainLayout>
                <Component />
              </MainLayout>
            // </PrivateRoute>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes; 