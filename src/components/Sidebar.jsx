import React from 'react';
import { LayoutDashboard, Users, UserPlus, Car, Bike, Info } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'vehicles', label: 'Veículos', icon: Car },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'registration', label: 'Cadastro Admin', icon: UserPlus },
  ];

  return (
    <div className="sidebar glass" style={{ width: '260px', height: '100vh', padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', position: 'fixed', left: 0, top: 0 }}>
      <div className="logo" style={{ marginBottom: 'var(--spacing-xl)', padding: '0 var(--spacing-sm)' }}>
        <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px', lineHeight: '1.2' }}>
          <Car size={28} />
          Sonhos sobre rodas
        </h2>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: '36px' }}>Experiência Premium</span>
      </div>

      <nav style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '10px',
              color: activeTab === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
              backgroundColor: activeTab === item.id ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
              marginBottom: '8px',
              transition: 'var(--transition-fast)',
              border: activeTab === item.id ? '1px solid var(--accent-glow)' : '1px solid transparent',
            }}
          >
            <item.icon size={20} color={activeTab === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)'} />
            <span style={{ fontWeight: activeTab === item.id ? '600' : '400' }}>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer" style={{ marginTop: 'auto', padding: 'var(--spacing-sm)', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          <Info size={16} />
          <span>v1.0.0 Alpha</span>
        </div>
      </div>

      <style jsx>{`
        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
