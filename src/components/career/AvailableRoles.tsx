
import React from 'react';
import { motion } from 'framer-motion';

interface RolesProps {
  roles: Record<string, string[]>;
}

const AvailableRoles: React.FC<RolesProps> = ({ roles }) => {
  return (
    <motion.div 
      className="mt-12 bg-white/5 p-6 rounded-xl border border-purple-500/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-sylonow-gold">
        Available Roles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(roles).map(([category, positions], index) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white/5 p-4 rounded-lg border border-purple-500/10"
          >
            <h3 className="text-lg font-semibold mb-2 capitalize">{category} Team</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              {positions.map((position, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  {position}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AvailableRoles;
