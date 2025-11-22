import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutGrid, Users, Package, Settings, Menu } from 'lucide-react';
import '../../styles/theme.css';

const Shell: React.FC = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--color-bg-app)' }}>
            {/* Sidebar */}
            <aside style={{
                width: '260px',
                background: 'rgba(30, 41, 59, 0.8)', // Semi-transparent slate 800
                backdropFilter: 'blur(12px)',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--color-text-inverse)',
                display: 'flex',
                flexDirection: 'column',
                padding: 'var(--space-md)',
                zIndex: 10
            }}>
                <div style={{ marginBottom: 'var(--space-xl)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--color-primary)', borderRadius: 'var(--radius-md)' }}></div>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>OdooLite</span>
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
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {/* Topbar */}
                <header style={{
                    height: '60px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 var(--space-lg)',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    zIndex: 5
                }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)' }}>
                        <Menu size={24} />
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-border)' }}></div>
                    </div>
                </header>

                {/* Page Content */}
                <main style={{ flex: 1, overflow: 'auto', padding: 'var(--space-lg)' }}>
                    <Outlet />
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
                backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                transition: 'all 0.2s ease'
            })}
        >
            {icon}
            <span style={{ fontSize: '0.95rem' }}>{label}</span>
        </NavLink>
    );
};

export default Shell;
