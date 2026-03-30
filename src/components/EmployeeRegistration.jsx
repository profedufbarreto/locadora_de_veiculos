import React from 'react';
import { useForm } from 'react-hook-form';
import { UserPlus, Shield, Briefcase, Mail, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const EmployeeRegistration = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Funcionário Registrado:', data);
    alert('Funcionário cadastrado com sucesso! (Simulação)');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card" 
      style={{ padding: 'var(--spacing-lg)', maxWidth: '600px' }}
    >
      <div style={{ marginBottom: 'var(--spacing-md)' }}>
        <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '8px' }}>Cadastro de Funcionário</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Acesso administrativo e operacional.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
        
        <div className="input-group">
          <label className="input-label"><UserPlus size={16} /> Nome do Funcionário</label>
          <input 
            {...register('name', { required: true })}
            className="custom-input" 
            placeholder="Nome Completo" 
          />
        </div>

        <div className="input-group">
          <label className="input-label"><Mail size={16} /> Email Corporativo</label>
          <input 
            {...register('email', { required: true })}
            className="custom-input" 
            type="email"
            placeholder="func@fbarreto.com" 
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="input-group">
            <label className="input-label"><Briefcase size={16} /> Cargo</label>
            <select {...register('role')} className="custom-input">
              <option value="admin">Administrador</option>
              <option value="atendente">Atendente</option>
              <option value="mecanico">Mecânico</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label"><Shield size={16} /> ID Registro</label>
            <input 
              {...register('employeeId', { required: true })}
              className="custom-input" 
              placeholder="FB-0000" 
            />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label"><Key size={16} /> Senha Temporária</label>
          <input 
            {...register('password', { required: true })}
            className="custom-input" 
            type="password"
            placeholder="••••••••" 
          />
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: 'var(--spacing-sm)' }}>
          Registrar Funcionário
        </button>
      </form>
    </motion.div>
  );
};

export default EmployeeRegistration;
