import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import VehicleGrid from './components/VehicleGrid';
import ClientRegistration from './components/ClientRegistration';
import EmployeeRegistration from './components/EmployeeRegistration';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'vehicles':
        return <VehicleGrid />;
      case 'clients':
        return <ClientRegistration />;
      case 'registration':
        return <EmployeeRegistration />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Navigation Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main style={{ 
        marginLeft: '260px', 
        width: 'calc(100% - 260px)', 
        padding: 'var(--spacing-xl)',
        minHeight: '100vh'
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <style jsx global>{`
        .app-container {
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 40%);
        }
      `}</style>
    </div>
  );
}

export default App;
