import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Terms from '@/pages/legal/Terms';

// Company Pages
import Index from '@/pages/Index';

// Legal Pages
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import GDPR from '@/pages/GDPR';
import CookiePolicy from '@/pages/CookiePolicy';
import Accessibility from '@/pages/Accessibility';

// Support Pages
import HelpCenter from '@/pages/HelpCenter';
import Status from '@/pages/Status';
import FAQs from '@/pages/FAQs';
import About from '@/pages/About';
import Blogs from '@/pages/Blogs';
import BlogPost from '@/pages/BlogPost';
import BlogEditor from '@/pages/admin/BlogEditor';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  // Company Routes
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/blogs',
    element: <Blogs />,
  },
  {
    path: '/blogs/:slug',
    element: <BlogPost />,
  },
  {
    path: '/admin/blogs/:id',
    element: <BlogEditor />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  // Legal Routes
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/terms-of-service',
    element: <Terms />,
  },
  {
    path: '/cookie-policy',
    element: <CookiePolicy />,
  },
  {
    path: '/gdpr',
    element: <GDPR />,
  },
  {
    path: '/accessibility',
    element: <Accessibility />,
  },
  // Support Routes
  {
    path: '/help',
    element: <HelpCenter />,
  },
  {
    path: '/faqs',
    element: <FAQs />,
  },
  {
    path: '/status',
    element: <Status />,
  },
  // Catch-all route for 404 errors
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router; 