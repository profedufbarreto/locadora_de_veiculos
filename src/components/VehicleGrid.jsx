import React, { useState } from 'react';
import { Car, Bike, Zap, Search, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const vehiclesData = [
  // CARROS
  { id: 1, name: 'Honda Civic Premium', category: 'carro', price: 250, image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Jeep Wrangler 4x4', category: 'carro', price: 380, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Tesla Model S Plaid', category: 'carro', price: 650, image: 'https://images.unsplash.com/photo-1617788138017-80ad42243c7d?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Porsche 911 Carrera', category: 'carro', price: 1200, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800' },
  { id: 5, name: 'Audi RS6 Avant', category: 'carro', price: 1500, image: 'https://images.unsplash.com/photo-1606148651410-6ed28723652c?auto=format&fit=crop&q=80&w=800' },
  { id: 6, name: 'Mini Cooper S', category: 'carro', price: 350, image: 'https://images.unsplash.com/photo-1593055416805-34098616fa1f?auto=format&fit=crop&q=80&w=800' },
  { id: 7, name: 'Ford Mustang Mach-E', category: 'carro', price: 800, image: 'https://images.unsplash.com/photo-1605898862351-a1e649bd123f?auto=format&fit=crop&q=80&w=800' },
  { id: 23, name: 'Land Rover Defender', category: 'carro', price: 550, image: 'https://images.unsplash.com/photo-1567117632960-56e34a4c2456?auto=format&fit=crop&q=80&w=800' },
  
  // MOTOS
  { id: 8, name: 'Sport Bike Ninja', category: 'moto', price: 180, image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&q=80&w=800' },
  { id: 9, name: 'Ducati Panigale V4', category: 'moto', price: 850, image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800' },
  { id: 10, name: 'BMW R1250 GS Adv', category: 'moto', price: 420, image: 'https://images.unsplash.com/photo-1591637333184-1d1354366668?auto=format&fit=crop&q=80&w=800' },
  { id: 11, name: 'Yamaha MT-07 Sport', category: 'moto', price: 280, image: 'https://images.unsplash.com/photo-1601334674068-ba287669d033?auto=format&fit=crop&q=80&w=800' },
  { id: 12, name: 'KTM 390 Duke', category: 'moto', price: 220, image: 'https://images.unsplash.com/photo-1558981001-57640166665e?auto=format&fit=crop&q=80&w=800' },
  
  // MOTOS ELÉTRICAS & URBANAS
  { id: 13, name: 'Moto Elétrica Neon Pro', category: 'moto_eletrica', price: 120, image: 'https://images.unsplash.com/photo-1591438128445-4c573d74ac45?auto=format&fit=crop&q=80&w=800' },
  { id: 14, name: 'Super Soco TC Max', category: 'motos_urbanas', price: 160, image: 'https://images.unsplash.com/photo-1614165933390-349ede2588fe?auto=format&fit=crop&q=80&w=800' },
  { id: 15, name: 'NIU NQi GTS Sport', category: 'motos_urbanas', price: 140, image: 'https://images.unsplash.com/photo-1620436402432-841f3d8a67bd?auto=format&fit=crop&q=80&w=800' },
  
  // PATINETES
  { id: 16, name: 'Patinete Pro G3', category: 'patinete', price: 45, image: 'https://images.unsplash.com/photo-1597435480211-e408f6a97800?auto=format&fit=crop&q=80&w=800' },
  { id: 17, name: 'Segway Ninebot Max', category: 'patinete', price: 65, image: 'https://images.unsplash.com/photo-1605203305419-54316dce8f81?auto=format&fit=crop&q=80&w=800' },
  { id: 18, name: 'Unagi Model One E500', category: 'patinete', price: 85, image: 'https://images.unsplash.com/photo-1594914141203-34e2c81a293c?auto=format&fit=crop&q=80&w=800' },
  
  // MOTORHOMES
  { id: 19, name: 'Mercedes Sprinter Camper', category: 'motorhome', price: 1100, image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800' },
  { id: 20, name: 'VW California 6.1', category: 'motorhome', price: 950, image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800' },
  { id: 21, name: 'Airstream Interstate 24X', category: 'motorhome', price: 1800, image: 'https://images.unsplash.com/photo-1513313778780-9ae4807465f0?auto=format&fit=crop&q=80&w=800' },
  { id: 22, name: 'Ford Transit Nugget', category: 'motorhome', price: 850, image: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80&w=800' },
];

const VehicleGrid = () => {
  const [filter, setFilter] = useState('all');

  const filteredVehicles = filter === 'all' 
    ? vehiclesData 
    : vehiclesData.filter(v => v.category === filter);

  return (
    <div style={{ width: '100%', padding: 'var(--spacing-md)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h2 style={{ fontSize: '2rem' }}>Frota Disponível</h2>
        
        <div className="glass" style={{ display: 'flex', padding: '4px', gap: '8px' }}>
          {['all', 'carro', 'moto', 'moto_eletrica', 'motos_urbanas', 'patinete', 'motorhome'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                color: filter === cat ? 'var(--text-primary)' : 'var(--text-secondary)',
                backgroundColor: filter === cat ? 'var(--accent-primary)' : 'transparent',
                transition: 'var(--transition-fast)',
                textTransform: 'capitalize'
              }}
            >
              {cat.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
        {filteredVehicles.map((vehicle) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={vehicle.id}
            className="glass-card"
            style={{ overflow: 'hidden', cursor: 'pointer' }}
          >
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
              <img 
                src={vehicle.image} 
                alt={vehicle.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s transform' }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', top: '12px', right: '12px', padding: '4px 12px', borderRadius: '20px', backgroundColor: 'var(--bg-primary)', fontSize: '0.75rem', border: '1px solid var(--accent-glow)' }}>
                {vehicle.category.replace('_', ' ')}
              </div>
            </div>
            
            <div style={{ padding: 'var(--spacing-md)' }}>
              <h3 style={{ marginBottom: '8px' }}>{vehicle.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Preço por dia</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--accent-primary)' }}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(vehicle.price)}
                  </span>
                </div>
                <button className="btn-primary" style={{ padding: '8px', borderRadius: '50%' }}>
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .filter-btn:hover {
          background-color: rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  );
};

export default VehicleGrid;
