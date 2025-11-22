import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, ShoppingCart, ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 2780 },
    { name: 'May', revenue: 4890 },
    { name: 'Jun', revenue: 6390 },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const StatCard = ({ title, value, change, icon: Icon, trend }: any) => (
    <motion.div variants={item} style={{
        backgroundColor: 'var(--color-bg-surface)',
        padding: 'var(--space-xl)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--color-bg-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)'
            }}>
                <Icon size={24} />
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                color: trend === 'up' ? 'var(--color-success)' : 'var(--color-danger)',
                background: trend === 'up' ? '#10B98110' : '#EF444410',
                padding: '4px 8px',
                borderRadius: 'var(--radius-md)'
            }}>
                {trend === 'up' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                {change}%
            </div>
        </div>
        <div>
            <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--space-xs)',
                fontWeight: 'var(--font-weight-medium)'
            }}>
                {title}
            </div>
            <div style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-main)',
                letterSpacing: '-0.02em'
            }}>
                {value}
            </div>
        </div>
    </motion.div>
);

const Dashboard: React.FC = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
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
                    Dashboard
                </h1>
                <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)'
                }}>
                    Welcome back! Here's what's happening with your business today.
                </p>
            </div>

            {/* Stats Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 'var(--space-lg)'
            }}>
                <StatCard title="Total Revenue" value="$54,230" change={12.5} trend="up" icon={DollarSign} />
                <StatCard title="Active Customers" value="1,234" change={8.2} trend="up" icon={Users} />
                <StatCard title="New Orders" value="456" change={3.1} trend="down" icon={ShoppingCart} />
                <StatCard title="Growth Rate" value="23.5%" change={5.4} trend="up" icon={TrendingUp} />
            </div>

            {/* Charts Section */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: 'var(--space-lg)',
                flex: 1
            }}>
                {/* Revenue Chart */}
                <motion.div variants={item} style={{
                    backgroundColor: 'var(--color-bg-surface)',
                    padding: 'var(--space-xl)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h3 style={{
                        margin: '0 0 var(--space-lg) 0',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-main)'
                    }}>
                        Revenue Overview
                    </h3>
                    <div style={{ height: '280px', width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: '12px',
                                        border: 'none',
                                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                                        padding: '12px'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#7C3AED"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorRevenue)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div variants={item} style={{
                    backgroundColor: 'var(--color-bg-surface)',
                    padding: 'var(--space-xl)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h3 style={{
                        margin: '0 0 var(--space-lg) 0',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-main)'
                    }}>
                        Recent Activity
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                        {[
                            { name: 'New order from Alice', time: '2 min ago', color: '#7C3AED' },
                            { name: 'Payment received', time: '1 hour ago', color: '#10B981' },
                            { name: 'New customer registered', time: '3 hours ago', color: '#F59E0B' },
                            { name: 'Product updated', time: '5 hours ago', color: '#6B7280' }
                        ].map((activity, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-md)',
                                padding: 'var(--space-md)',
                                borderRadius: 'var(--radius-lg)',
                                background: 'var(--color-bg-hover)',
                                transition: 'all var(--transition-base)'
                            }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: 'var(--radius-full)',
                                    background: activity.color,
                                    flexShrink: 0
                                }} />
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        fontSize: 'var(--text-sm)',
                                        fontWeight: 'var(--font-weight-medium)',
                                        color: 'var(--color-text-main)'
                                    }}>
                                        {activity.name}
                                    </div>
                                    <div style={{
                                        fontSize: 'var(--text-xs)',
                                        color: 'var(--color-text-muted)',
                                        marginTop: '2px'
                                    }}>
                                        {activity.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Dashboard;
