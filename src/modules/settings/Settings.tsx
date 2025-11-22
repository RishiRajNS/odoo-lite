import React, { useState } from 'react';
import { User, Bell, Lock, Palette, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Settings: React.FC = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'security', label: 'Security', icon: Lock },
        { id: 'appearance', label: 'Appearance', icon: Palette },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)', height: '100%' }}
        >
            {/* Header */}
            <div>
                <h1 style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-text-main)',
                    marginBottom: 'var(--space-xs)'
                }}>
                    Settings
                </h1>
                <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)'
                }}>
                    Manage your account settings and preferences
                </p>
            </div>

            {/* Content */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '240px 1fr',
                gap: 'var(--space-xl)',
                flex: 1
            }}>
                {/* Sidebar Tabs */}
                <div style={{
                    background: 'var(--color-bg-surface)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-md)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--color-border)',
                    height: 'fit-content'
                }}>
                    {tabs.map(tab => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-md)',
                                    padding: 'var(--space-md)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: 'none',
                                    background: activeTab === tab.id ? 'var(--color-bg-light)' : 'transparent',
                                    color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-main)',
                                    cursor: 'pointer',
                                    transition: 'all var(--transition-base)',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: activeTab === tab.id ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
                                    textAlign: 'left'
                                }}
                            >
                                <Icon size={18} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div style={{
                    background: 'var(--color-bg-surface)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-2xl)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--color-border)'
                }}>
                    {activeTab === 'profile' && <ProfileSettings />}
                    {activeTab === 'notifications' && <NotificationSettings />}
                    {activeTab === 'security' && <SecuritySettings />}
                    {activeTab === 'appearance' && <AppearanceSettings />}
                </div>
            </div>
        </motion.div>
    );
};

const ProfileSettings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        <div>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-md)' }}>
                Profile Information
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                Update your account profile information and email address.
            </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div>
                <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-sm)' }}>
                    Full Name
                </label>
                <input
                    type="text"
                    placeholder="John Doe"
                    style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        fontSize: 'var(--text-sm)',
                        outline: 'none',
                        transition: 'border var(--transition-base)'
                    }}
                />
            </div>

            <div>
                <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-sm)' }}>
                    Email Address
                </label>
                <input
                    type="email"
                    placeholder="john@example.com"
                    style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        fontSize: 'var(--text-sm)',
                        outline: 'none'
                    }}
                />
            </div>

            <div>
                <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-sm)' }}>
                    Company
                </label>
                <input
                    type="text"
                    placeholder="Acme Corp"
                    style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        fontSize: 'var(--text-sm)',
                        outline: 'none'
                    }}
                />
            </div>

            <button style={{
                background: 'var(--color-primary)',
                color: 'white',
                padding: 'var(--space-md) var(--space-xl)',
                borderRadius: 'var(--radius-lg)',
                border: 'none',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                cursor: 'pointer',
                alignSelf: 'flex-start'
            }}>
                Save Changes
            </button>
        </div>
    </div>
);

const NotificationSettings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        <div>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-md)' }}>
                Notification Preferences
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                Manage how you receive notifications.
            </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {['Email notifications', 'Push notifications', 'SMS notifications', 'Weekly summary'].map(item => (
                <label key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                    <span style={{ fontSize: 'var(--text-sm)' }}>{item}</span>
                </label>
            ))}
        </div>
    </div>
);

const SecuritySettings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        <div>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-md)' }}>
                Security Settings
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                Manage your password and security preferences.
            </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div>
                <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-sm)' }}>
                    Current Password
                </label>
                <input
                    type="password"
                    style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        fontSize: 'var(--text-sm)',
                        outline: 'none'
                    }}
                />
            </div>

            <div>
                <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-sm)' }}>
                    New Password
                </label>
                <input
                    type="password"
                    style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        fontSize: 'var(--text-sm)',
                        outline: 'none'
                    }}
                />
            </div>

            <button style={{
                background: 'var(--color-primary)',
                color: 'white',
                padding: 'var(--space-md) var(--space-xl)',
                borderRadius: 'var(--radius-lg)',
                border: 'none',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                cursor: 'pointer',
                alignSelf: 'flex-start'
            }}>
                Update Password
            </button>
        </div>
    </div>
);

const AppearanceSettings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        <div>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-md)' }}>
                Appearance
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                Customize how the app looks and feels.
            </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div>
                <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-sm)' }}>
                    Theme
                </label>
                <select style={{
                    width: '100%',
                    padding: 'var(--space-md)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)',
                    fontSize: 'var(--text-sm)',
                    outline: 'none',
                    cursor: 'pointer'
                }}>
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Auto</option>
                </select>
            </div>
        </div>
    </div>
);

export default Settings;
