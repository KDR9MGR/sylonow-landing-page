import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Clock, Activity } from 'lucide-react';

const Status = () => {
  const systems = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: 'No recent incidents',
    },
    {
      name: 'Web Application',
      status: 'operational',
      uptime: '99.95%',
      lastIncident: 'March 1, 2024 - Minor UI glitch',
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: 'No recent incidents',
    },
    {
      name: 'Payment Processing',
      status: 'operational',
      uptime: '100%',
      lastIncident: 'No recent incidents',
    },
    {
      name: 'AI Recommendation Engine',
      status: 'operational',
      uptime: '99.90%',
      lastIncident: 'March 5, 2024 - Scheduled maintenance',
    },
    {
      name: 'Email Services',
      status: 'degraded',
      uptime: '98.5%',
      lastIncident: 'Current: Delayed email delivery',
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-6 h-6 text-yellow-500" />;
      default:
        return <AlertCircle className="w-6 h-6 text-red-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'degraded':
        return 'text-yellow-500';
      default:
        return 'text-red-500';
    }
  };

  return (
    <>
      <Helmet>
        <title>System Status - Sylonow</title>
        <meta name="description" content="Check the current status of Sylonow's services and systems." />
      </Helmet>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold text-gray-900">System Status</h1>
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-500" />
                  <span className="text-green-500 font-medium">All Systems Operational</span>
                </div>
              </div>

              {/* Current Time */}
              <div className="flex items-center gap-2 text-gray-600 mb-8">
                <Clock className="w-5 h-5" />
                <span>Last updated: {new Date().toLocaleString()}</span>
              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {systems.map((system, index) => (
                  <motion.div
                    key={system.name}
                    className="bg-white rounded-lg border border-gray-200 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-gray-900">{system.name}</h2>
                      {getStatusIcon(system.status)}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Status</span>
                        <span className={`font-medium ${getStatusColor(system.status)}`}>
                          {system.status.charAt(0).toUpperCase() + system.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Uptime</span>
                        <span className="font-medium text-gray-900">{system.uptime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Last Incident</span>
                        <span className="text-gray-900">{system.lastIncident}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Incident History */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Incidents</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Email Delivery Delays</h3>
                      <p className="text-gray-600">March 15, 2024 - Ongoing</p>
                      <p className="text-gray-600 mt-2">
                        We are currently experiencing delays in email delivery. Our team is working to resolve this issue.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Scheduled Maintenance Completed</h3>
                      <p className="text-gray-600">March 5, 2024 - Resolved</p>
                      <p className="text-gray-600 mt-2">
                        Scheduled maintenance on our AI Recommendation Engine has been completed successfully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Status; 