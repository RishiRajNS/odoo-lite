import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { LayoutGrid, Users, Package, Settings, Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import '../../styles/theme.css';

const Shell: React.FC = () => {
    const location = useLocation();

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--color-bg-app)' }}>
            {/* Sidebar */}
            <aside style={{
                width: '260px',
                background: 'rgba(15, 23, 42, 0.9)', // Darker slate
                backdropFilter: 'blur(20px)',
                borderRight: '1px solid rgba(255,255,255,0.05)',
                color: 'var(--color-text-inverse)',
                display: 'flex',
                flexDirection: 'column',
                padding: 'var(--space-md)',
                zIndex: 10,
                boxShadow: 'var(--shadow-lg)'
            }}>
                <div style={{ marginBottom: 'var(--space-xl)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', padding: '0 var(--space-sm)' }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        background: 'var(--gradient-primary)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-glow)'
                    }}></div>
                    <span style={{ fontWeight: '700', fontSize: '1.25rem', letterSpacing: '-0.5px' }}>OdooLite</span>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                    <NavItem to="/" icon={<LayoutGrid size={20} />} label="Dashboard" />
                    <NavItem to="/crm" icon={<Users size={20} />} label="CRM" />
                    <NavItem to="/inventory" icon={<Package size={20} />} label="Inventory" />
                </nav>

                <div style={{ marginTop: 'auto' }}>
                    <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
                </div>
            </aside>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
                {/* Topbar */}
                <header style={{
                    height: '64px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(16px)',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 var(--space-xl)',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    zIndex: 5
                }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', transition: 'color 0.2s' }}>
                        <Menu size={24} />
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'var(--gradient-surface)',
                            border: '1px solid white',
                            boxShadow: 'var(--shadow-sm)'
                        }}></div>
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
                            style={{ height: '100%', overflow: 'auto', padding: 'var(--space-xl)' }}
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
                gap: 'var(--space-md)',
                padding: 'var(--space-sm) var(--space-md)',
                borderRadius: 'var(--radius-md)',
                color: isActive ? 'white' : 'var(--color-text-muted)',
                background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                borderLeft: isActive ? '3px solid var(--color-primary)' : '3px solid transparent',
                transition: 'all 0.2s ease',
                fontWeight: isActive ? 500 : 400
            })}
        >
            {icon}
            <span style={{ fontSize: '0.95rem' }}>{label}</span>
        </NavLink>
    );
};

export default Shell;
