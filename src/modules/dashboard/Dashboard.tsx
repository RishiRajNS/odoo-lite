import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Users, DollarSign, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
    { name: 'Jan', revenue: 4000, leads: 24 },
    { name: 'Feb', revenue: 3000, leads: 13 },
    { name: 'Mar', revenue: 2000, leads: 98 },
    { name: 'Apr', revenue: 2780, leads: 39 },
    { name: 'May', revenue: 1890, leads: 48 },
    { name: 'Jun', revenue: 2390, leads: 38 },
    { name: 'Jul', revenue: 3490, leads: 43 },
];

const sourceData = [
    { name: 'Website', value: 400 },
    { name: 'Referral', value: 300 },
    { name: 'Social', value: 300 },
    { name: 'Ads', value: 200 },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const StatCard = ({ title, value, trend, icon: Icon, color }: any) => (
    <motion.div variants={item} style={{
        backgroundColor: 'white',
        padding: 'var(--space-lg)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
        border: '1px solid var(--color-border)'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div style={{
                padding: 'var(--space-sm)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: `${color}15`,
                color: color
            }}>
                <Icon size={24} />
            </div>
            <span style={{
                fontSize: '0.85rem',
                color: trend > 0 ? '#10b981' : '#ef4444',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: trend > 0 ? '#10b98110' : '#ef444410',
                padding: '2px 6px',
                borderRadius: '4px'
            }}>
                {trend > 0 ? '+' : ''}{trend}%
                <TrendingUp size={14} />
            </span>
        </div>
        <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '4px' }}>{title}</div>
            <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-text-main)', letterSpacing: '-0.5px' }}>{value}</div>
        </div>
    </motion.div>
);

const Dashboard: React.FC = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.5px' }}>Dashboard</h1>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Overview for last 30 days</span>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-lg)' }}>
                <StatCard title="Total Revenue" value="$54,230" trend={12} icon={DollarSign} color="#6366f1" />
                <StatCard title="Active Leads" value="1,234" trend={8} icon={Users} color="#ec4899" />
                <StatCard title="New Orders" value="456" trend={-3} icon={ShoppingCart} color="#f59e0b" />
                <StatCard title="Conversion Rate" value="2.4%" trend={5} icon={TrendingUp} color="#10b981" />
            </div>

            {/* Charts Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-lg)' }}>

                {/* Revenue Chart */}
                <motion.div variants={item} style={{ backgroundColor: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', minHeight: '400px', border: '1px solid var(--color-border)' }}>
                    <h3 style={{ margin: '0 0 var(--space-lg) 0', fontSize: '1.1rem', fontWeight: '600' }}>Revenue Trend</h3>
                    <div style={{ height: '300px', width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Lead Sources */}
                <motion.div variants={item} style={{ backgroundColor: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border)' }}>
                    <h3 style={{ margin: '0 0 var(--space-lg) 0', fontSize: '1.1rem', fontWeight: '600' }}>Lead Sources</h3>
                    <div style={{ height: '300px', width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={sourceData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" width={80} axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="value" fill="#ec4899" radius={[0, 4, 4, 0]} barSize={32} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Dashboard;
