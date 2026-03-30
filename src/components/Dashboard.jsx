import React from 'react';
import { TrendingUp, Users, Car, CreditCard, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const stats = [
    { label: 'Locações Ativas', value: '42', icon: Activity, color: '#3b82f6' },
    { label: 'Frota Total', value: '128', icon: Car, color: '#10b981' },
    { label: 'Novos Clientes', value: '15', icon: Users, color: '#f59e0b' },
    { label: 'Faturamento Mensal', value: 'R$ 85.400', icon: CreditCard, color: '#ef4444' },
  ];

  return (
    <div style={{ width: '100%' }}>
      <header style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Bem-vindo, Admin</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Aqui está o resumo operacional da FBarreto Locadora hoje.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card"
            style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '20px' }}
          >
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: `${stat.color}15`, color: stat.color }}>
              <stat.icon size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{stat.label}</span>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-card" style={{ padding: 'var(--spacing-lg)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <TrendingUp size={20} color="var(--accent-primary)" />
          Atividade Recente
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            'Carlos Silva alugou Sedan Premium 2024',
            'Nova moto elétrica Neon adicionada à frota',
            'Manutenção concluída: SUV Adventure 4x4',
            'Novo funcionário registrado: Ana Oliveira (Atendente)',
          ].map((activity, i) => (
            <div key={i} style={{ padding: '12px', borderLeft: '3px solid var(--accent-primary)', backgroundColor: 'rgba(255,255,255,0.02)', fontSize: '0.875rem' }}>
              {activity}
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Há {i + 1} hora(s)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
