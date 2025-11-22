import React, { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { LayoutGrid, Users, Package, Settings, Bell, Search, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import '../../styles/theme.css';

const Shell: React.FC = () => {
    const location = useLocation();
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const notifications = [
        { id: 1, title: 'New order received', time: '5 min ago', unread: true },
        { id: 2, title: 'Payment processed', time: '1 hour ago', unread: true },
        { id: 3, title: 'Customer registered', time: '2 hours ago', unread: false },
    ];

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--color-bg-app)' }}>
            {/* Sidebar */}
            <motion.aside
                animate={{ width: sidebarExpanded ? '240px' : '72px' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                    background: 'var(--color-bg-sidebar)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: sidebarExpanded ? 'stretch' : 'center',
                    padding: sidebarExpanded ? 'var(--space-lg)' : 'var(--space-lg) 0',
                    gap: 'var(--space-md)',
                    boxShadow: 'var(--shadow-lg)',
                    zIndex: 10,
                    position: 'relative'
                }}>
                {/* Logo */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-md)',
                    marginBottom: 'var(--space-xl)',
                    padding: sidebarExpanded ? '0' : '0',
                    justifyContent: sidebarExpanded ? 'flex-start' : 'center'
                }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: 'var(--radius-lg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'white',
                        fontSize: 'var(--text-lg)',
                        flexShrink: 0
                    }}>
                        O
                    </div>
                    {sidebarExpanded && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                color: 'white',
                                fontWeight: 'var(--font-weight-bold)',
                                fontSize: 'var(--text-lg)',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            OdooLite
                        </motion.span>
                    )}
                </div>

                {/* Navigation */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', width: '100%', alignItems: sidebarExpanded ? 'stretch' : 'center' }}>
                    <NavItem to="/" icon={<LayoutGrid size={20} />} label="Dashboard" expanded={sidebarExpanded} />
                    <NavItem to="/crm" icon={<Users size={20} />} label="CRM" expanded={sidebarExpanded} />
                    <NavItem to="/inventory" icon={<Package size={20} />} label="Inventory" expanded={sidebarExpanded} />
                </nav>

                {/* Bottom Items */}
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: sidebarExpanded ? 'stretch' : 'center', width: '100%' }}>
                    <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" expanded={sidebarExpanded} />
                </div>
            </motion.aside>

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
                    {/* Left Side - Menu Toggle & Search */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                        <button
                            onClick={() => setSidebarExpanded(!sidebarExpanded)}
                            style={{
                                background: 'var(--color-bg-hover)',
                                border: 'none',
                                color: 'var(--color-text-main)',
                                width: '40px',
                                height: '40px',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all var(--transition-base)'
                            }}
                        >
                            <Menu size={20} />
                        </button>

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
                    </div>

                    {/* Right Side */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                        {/* Notifications */}
                        <div style={{ position: 'relative' }}>
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                style={{
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
                                    transition: 'all var(--transition-base)',
                                    position: 'relative'
                                }}
                            >
                                <Bell size={20} />
                                {notifications.some(n => n.unread) && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '8px',
                                        right: '8px',
                                        width: '8px',
                                        height: '8px',
                                        background: 'var(--color-danger)',
                                        borderRadius: 'var(--radius-full)',
                                        border: '2px solid var(--color-bg-surface)'
                                    }} />
                                )}
                            </button>

                            {/* Notifications Dropdown */}
                            <AnimatePresence>
                                {showNotifications && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        style={{
                                            position: 'absolute',
                                            top: 'calc(100% + 8px)',
                                            right: 0,
                                            width: '320px',
                                            background: 'var(--color-bg-surface)',
                                            borderRadius: 'var(--radius-xl)',
                                            boxShadow: 'var(--shadow-xl)',
                                            border: '1px solid var(--color-border)',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <div style={{
                                            padding: 'var(--space-lg)',
                                            borderBottom: '1px solid var(--color-border)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <h3 style={{
                                                fontSize: 'var(--text-base)',
                                                fontWeight: 'var(--font-weight-semibold)',
                                                margin: 0
                                            }}>
                                                Notifications
                                            </h3>
                                            <button
                                                onClick={() => setShowNotifications(false)}
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    color: 'var(--color-text-muted)',
                                                    cursor: 'pointer',
                                                    padding: '4px'
                                                }}
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                            {notifications.map(notif => (
                                                <div
                                                    key={notif.id}
                                                    style={{
                                                        padding: 'var(--space-md) var(--space-lg)',
                                                        borderBottom: '1px solid var(--color-border-light)',
                                                        cursor: 'pointer',
                                                        transition: 'background var(--transition-base)',
                                                        background: notif.unread ? 'var(--color-bg-light)' : 'transparent'
                                                    }}
                                                >
                                                    <div style={{
                                                        fontSize: 'var(--text-sm)',
                                                        fontWeight: notif.unread ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
                                                        color: 'var(--color-text-main)',
                                                        marginBottom: '4px'
                                                    }}>
                                                        {notif.title}
                                                    </div>
                                                    <div style={{
                                                        fontSize: 'var(--text-xs)',
                                                        color: 'var(--color-text-muted)'
                                                    }}>
                                                        {notif.time}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

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
                            fontSize: 'var(--text-sm)',
                            cursor: 'pointer'
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

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string; expanded: boolean }> = ({ to, icon, label, expanded }) => {
    return (
        <NavLink
            to={to}
            style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: expanded ? 'flex-start' : 'center',
                gap: 'var(--space-md)',
                padding: expanded ? 'var(--space-md)' : 'var(--space-sm)',
                width: expanded ? '100%' : '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                color: 'white',
                background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                transition: 'all var(--transition-base)',
                position: 'relative',
                textDecoration: 'none'
            })}
            title={!expanded ? label : undefined}
        >
            <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {icon}
            </div>
            {expanded && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: 'var(--font-weight-medium)',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {label}
                </motion.span>
            )}
        </NavLink>
    );
};

export default Shell;
