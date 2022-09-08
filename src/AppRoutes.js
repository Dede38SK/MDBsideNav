import SEODashboard from './components/views/SEODashboard';
import ECommerce1 from './components/views/ECommerce1';
import ECommerce2 from './components/views/ECommerce2';
import AdsDashboard from './components/views/AdsDashboard';
import OrderDashboard from './components/views/OrderDashboard';
import TrafficDashboard from './components/views/TrafficDashboard';
import InvoicePage from './components/views/InvoicePage';
import ChatApp from './components/views/ChatApp';
import MailboxApp from './components/views/MailboxApp';
import UserProfile from './components/views/UserProfile';
import UserManagement from './components/views/UserManagement';
import LoginRegister from './components/views/LoginRegister';
import ForgotPassword from './components/views/ForgotPassword';
import ChangePassword from './components/views/ChangePassword';

import GT2NotFound from './components/pages/GT2NotFound';

const AppRoutes = [
    { path: '/seo-dashboard', element: <SEODashboard /> },
    { path: '/e-commerce1', element: <ECommerce1 /> },
    { path: '/e-commerce2', element: <ECommerce2 /> },
    { path: '/ads-dashboard', element: <AdsDashboard /> },
    { path: '/order-dashboard', element: <OrderDashboard /> },
    { path: '/traffic-dashboard', element: <TrafficDashboard /> },
    { path: '/invoice-page', element: <InvoicePage /> },
    { path: '/chat-app', element: <ChatApp /> },
    { path: '/mailbox-app', element: <MailboxApp /> },
    { path: '/user-profile', element: <UserProfile /> },
    { path: '/user-management', element: <UserManagement /> },
    { path: '/login-register', element: <LoginRegister /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
    { path: '/change-password', element: <ChangePassword /> },

    { index: true, element: <SEODashboard /> },
    { path: '/*', element: <GT2NotFound /> },
];

export default AppRoutes;
