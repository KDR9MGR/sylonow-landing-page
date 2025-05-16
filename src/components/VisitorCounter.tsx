import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { visitorTracker } from '@/lib/visitorTracker';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const count = await visitorTracker.getVisitorCount();
      setVisitorCount(count);
    };

    fetchVisitorCount();

    // Update count every minute
    const interval = setInterval(fetchVisitorCount, 60000);

    return () => clearInterval(interval);
  }, []);

  if (visitorCount === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 left-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200"
    >
      <Users className="w-4 h-4 text-pink-600" />
      <span>{visitorCount.toLocaleString()} visitors</span>
    </motion.div>
  );
};

export default VisitorCounter; 