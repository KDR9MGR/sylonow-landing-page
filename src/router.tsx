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
import Career from '@/pages/Career';
import Contact from '@/pages/Contact';

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
    path: '/career',
    element: <Career />,  
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
]);

export default router; 