import { lazy } from 'react';
import HomePage from '../pages/Home';
import CategoryPage from '../pages/Category';
import ProductDetailPage from '../pages/Product/Detail';
import AuthPage from '../pages/Auth';
import { registerUser, loginUser } from '../controllers/userController';

// Lazy load các components
const Home = lazy(() => import('../pages/Home'));
const Category = lazy(() => import('../pages/Category'));
const ProductDetail = lazy(() => import('../pages/Product/Detail'));
const Auth = lazy(() => import('../pages/Auth'));

const routes = [
  {
    path: '/',
    element: Home,
    protected: false
  },
  {
    path: '/category/:slug',
    element: Category,
    protected: false
  },
  {
    path: '/product/:id',
    element: ProductDetail,
    protected: false
  },
  {
    path: '/auth',
    element: Auth,
    protected: false
  },
  {
    path: '/api/Users/login',
    method: 'post',
    handler: loginUser
  }
];

export const publicRoutes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/category',
    component: CategoryPage
  },
  {
    path: '/product/:id',
    component: ProductDetailPage
  },
  {
    path: '/auth',
    component: AuthPage
  }
];

export const privateRoutes = [
  // Add private routes here
];

export default routes; 