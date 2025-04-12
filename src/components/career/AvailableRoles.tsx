import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface RolesProps {
  roles: {
    [category: string]: string[];
  };
}

const AvailableRoles: React.FC<RolesProps> = ({ roles }) => {
  // Ensure roles is not undefined
  const roleEntries = roles ? Object.entries(roles) : [];

  return (
    <motion.div 
      className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-lg sticky top-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-pink-100 to-purple-100">
          <Users className="w-6 h-6 text-pink-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Available Roles
        </h2>
      </div>
      
      <div className="space-y-4">
        {roleEntries.map(([category, positions], index) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white rounded-lg border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 capitalize">{category} Team</h3>
            </div>
            <ul className="p-4 space-y-2">
              {Array.isArray(positions) && positions.map((position, posIndex) => (
                <li key={`${category}-${posIndex}`} className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-600"></span>
                  {position}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-100">
        <p className="text-sm text-gray-600 text-center">
          Don't see your role? We're always looking for passionate individuals. 
          Apply anyway and tell us what you can bring to the team!
        </p>
      </div>
    </motion.div>
  );
};

export default AvailableRoles;
