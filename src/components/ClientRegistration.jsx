import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetchAddressByCep } from '../services/cepService';
import { MapPin, User, Mail, Phone, CreditCard, Search, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ClientRegistration = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loadingCep, setLoadingCep] = useState(false);
  const [cepError, setCepError] = useState('');

  const handleCepSearch = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      setLoadingCep(true);
      setCepError('');
      try {
        const address = await fetchAddressByCep(cep);
        setValue('address', address.street);
        setValue('neighborhood', address.neighborhood);
        setValue('city', address.city);
        setValue('state', address.state);
      } catch (err) {
        setCepError('CEP não encontrado ou inválido.');
      } finally {
        setLoadingCep(false);
      }
    }
  };

  const onSubmit = (data) => {
    console.log('Cliente Registrado:', data);
    alert('Cadastro de cliente realizado com sucesso! (Simulação)');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card" 
      style={{ padding: 'var(--spacing-lg)', maxWidth: '800px' }}
    >
      <div style={{ marginBottom: 'var(--spacing-md)' }}>
        <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '8px' }}>Cadastro de Cliente</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Preencha os campos abaixo para registrar um novo cliente no sistema.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-md)' }}>
        
        {/* Personal Info */}
        <div className="input-group" style={{ gridColumn: 'span 2' }}>
          <label className="input-label"><User size={16} /> Nome Completo</label>
          <input 
            {...register('name', { required: true })}
            className="custom-input" 
            placeholder="Ex: João Silva" 
          />
        </div>

        <div className="input-group">
          <label className="input-label"><Mail size={16} /> Email</label>
          <input 
            {...register('email', { required: true })}
            className="custom-input" 
            type="email"
            placeholder="joao@email.com" 
          />
        </div>

        <div className="input-group">
          <label className="input-label"><Phone size={16} /> Telefone</label>
          <input 
            {...register('phone', { required: true })}
            className="custom-input" 
            placeholder="(11) 99999-9999" 
          />
        </div>

        {/* Address with CEP Lookup */}
        <div className="input-group" style={{ position: 'relative' }}>
          <label className="input-label"><MapPin size={16} /> CEP</label>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input 
              {...register('cep', { required: true })}
              onBlur={handleCepSearch}
              className="custom-input" 
              placeholder="00000-000" 
            />
            {loadingCep && <Loader2 className="animate-spin" size={20} color="var(--accent-primary)" style={{ position: 'absolute', right: '12px', top: '42px' }} />}
          </div>
          {cepError && <span style={{ color: 'var(--error)', fontSize: '0.75rem' }}>{cepError}</span>}
        </div>

        <div className="input-group">
          <label className="input-label">Cidade</label>
          <input 
            {...register('city', { required: true })}
            className="custom-input" 
            readOnly
            style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
          />
        </div>

        <div className="input-group" style={{ gridColumn: 'span 2' }}>
          <label className="input-label">Endereço (Rua/Avenida)</label>
          <input 
            {...register('address', { required: true })}
            className="custom-input" 
            placeholder="Preenchido automaticamente pelo CEP" 
          />
        </div>

        <div className="input-group">
          <label className="input-label">Bairro</label>
          <input 
            {...register('neighborhood', { required: true })}
            className="custom-input" 
          />
        </div>

        <div className="input-group">
          <label className="input-label">Número</label>
          <input 
            {...register('number', { required: true })}
            className="custom-input" 
            placeholder="123" 
          />
        </div>

        <div style={{ gridColumn: 'span 2', marginTop: 'var(--spacing-sm)' }}>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Finalizar Cadastro
          </button>
        </div>
      </form>

      <style jsx>{`
        .input-label {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
};

export default ClientRegistration;
