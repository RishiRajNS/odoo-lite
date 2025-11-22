import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Shell from './components/layout/Shell';
import Dashboard from './modules/dashboard/Dashboard';
import CRM from './modules/crm/CRM';
import LeadForm from './modules/crm/LeadForm';
import ProductList from './modules/inventory/ProductList';
import ProductDetail from './modules/inventory/ProductDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<Dashboard />} />
        <Route path="crm" element={<CRM />} />
        <Route path="crm/:id" element={<LeadForm />} />
        <Route path="inventory" element={<ProductList />} />
        <Route path="inventory/:id" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
