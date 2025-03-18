import Dashboard from '../features/Dashboard/component/index';
import Home from '../features/Home/component/index';
import About from '../features/About/component/index';
import Error from '../shared/Error/index';
import Features from '../features/Features/component/index';
import SignIn from '../features/SignIn/components/index';
import SignUp from '../features/SignUp/components/index';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import PublicRoute from '@/components/ProtectedRoute/PublicRoute';
import Menu from '@/features/Menu/components';
import Cart from '@/features/Cart';
import { createBrowserRouter } from "react-router-dom";
import NavbarWrapper from '@/shared/Navbar/container';
import Reviews from '@/features/Reviews/components';
import Orders from '@/features/Orders';

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarWrapper />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/dashboard',
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/signin',
                element: (
                    <PublicRoute>
                        <SignIn />
                    </PublicRoute>
                ),
            },
            {
                path: '/signup',
                element: (
                    <PublicRoute>
                        <SignUp />
                    </PublicRoute>
                ),
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/features',
                element: <Features />,
            },
            {
                path: '/menu',
                element: (
                    <Menu />
                ),
            },
            {
                path: '/cart',
                element:
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                ,
            },
            {
                path: '/my_orders',
                element: <Orders />,
            },
            {
                path: '/menu/:menu_item_id/reviews',
                element: <Reviews />,
            },
            {
                path: '/*',
                element: <Error />,
            },
        ]
    }
])
export default router;
