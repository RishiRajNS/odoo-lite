import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { LayoutGrid, Users, Package, Settings, Menu, Bell, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import '../../styles/theme.css';

const Shell: React.FC = () => {
    const location = useLocation();

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--color-bg-app)' }}>
            {/* Sidebar */}
            <aside style={{
                width: '72px',
                background: 'var(--color-bg-sidebar)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 'var(--space-lg) 0',
                gap: 'var(--space-md)',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 10
            }}>
                {/* Logo */}
                <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'white',
                    fontSize: 'var(--text-lg)'
                }}>
                    O
                </div>

                {/* Navigation */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', width: '100%', alignItems: 'center' }}>
                    <NavItem to="/" icon={<LayoutGrid size={20} />} label="Dashboard" />
                    <NavItem to="/crm" icon={<Users size={20} />} label="CRM" />
                    <NavItem to="/inventory" icon={<Package size={20} />} label="Inventory" />
                </nav>

                {/* Bottom Items */}
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: 'center' }}>
                    <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
                </div>
            </aside>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {/* Topbar */}
                <header style={{
                    height: '72px',
                    background: 'var(--color-bg-surface)',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 var(--space-2xl)',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    zIndex: 5
                }}>
                    {/* Search */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-md)',
                        background: 'var(--color-bg-hover)',
                        padding: 'var(--space-sm) var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        width: '320px'
                    }}>
                        <Search size={18} color="var(--color-text-muted)" />
                        <input
                            type="text"
                            placeholder="Search..."
                            style={{
                                border: 'none',
                                background: 'transparent',
                                outline: 'none',
                                width: '100%',
                                color: 'var(--color-text-main)',
                                fontSize: 'var(--text-sm)'
                            }}
                        />
                    </div>

                    {/* Right Side */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                        <button style={{
                            background: 'var(--color-bg-hover)',
                            border: 'none',
                            color: 'var(--color-text-muted)',
                            width: '40px',
                            height: '40px',
                            borderRadius: 'var(--radius-lg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all var(--transition-base)'
                        }}>
                            <Bell size={20} />
                        </button>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: 'var(--radius-full)',
                            background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'var(--font-weight-semibold)',
                            fontSize: 'var(--text-sm)'
                        }}>
                            U
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            style={{ height: '100%', overflow: 'auto', padding: 'var(--space-2xl)' }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => {
    return (
        <NavLink
            to={to}
            style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                color: 'white',
                background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                transition: 'all var(--transition-base)',
                position: 'relative'
            })}
            title={label}
        >
            {icon}
        </NavLink>
    );
};

export default Shell;
