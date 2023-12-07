import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import { SignUp } from 'src/pages/SignUp';
import { LoginPage } from 'src/pages/LoginPage';
import DashboardLayout from 'src/layouts/dashboard';
// export const SignUp = lazy(() => import('src/pages/SignUp'));
export const ManageBalance = lazy(() => import('src/pages/ManageBalance'));
export const HomePage = lazy(() => import('src/pages/HomePage'));
export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
// export const LoginPage = lazy(() => import('src/pages/LoginPage'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        // { element: <HomePage />, index: true },
        { path: 'dashboard', element: <IndexPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'manage_balance', element: <ManageBalance /> },
      ],
    },
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'signup',
      element: <SignUp />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
