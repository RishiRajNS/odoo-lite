import React from 'react';
import { motion } from 'framer-motion';

export const CardSkeleton: React.FC = () => (
    <div style={{
        background: 'var(--color-bg-surface)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-xl)',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--color-border)'
    }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                    height: '20px',
                    background: 'var(--color-bg-hover)',
                    borderRadius: 'var(--radius-md)',
                    width: '60%'
                }}
            />
            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                style={{
                    height: '16px',
                    background: 'var(--color-bg-hover)',
                    borderRadius: 'var(--radius-md)',
                    width: '40%'
                }}
            />
            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                style={{
                    height: '40px',
                    background: 'var(--color-bg-hover)',
                    borderRadius: 'var(--radius-md)',
                    width: '100%'
                }}
            />
        </div>
    </div>
);

export const TableRowSkeleton: React.FC = () => (
    <div style={{
        display: 'flex',
        gap: 'var(--space-lg)',
        padding: 'var(--space-md)',
        borderBottom: '1px solid var(--color-border)'
    }}>
        {[1, 2, 3, 4].map((i) => (
            <motion.div
                key={i}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                style={{
                    height: '16px',
                    background: 'var(--color-bg-hover)',
                    borderRadius: 'var(--radius-md)',
                    flex: 1
                }}
            />
        ))}
    </div>
);

export const DashboardSkeleton: React.FC = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
        {/* Stats Grid Skeleton */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-lg)' }}>
            {[1, 2, 3, 4].map((i) => (
                <CardSkeleton key={i} />
            ))}
        </div>

        {/* Charts Skeleton */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-lg)' }}>
            {[1, 2].map((i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
    </div>
);

export default { CardSkeleton, TableRowSkeleton, DashboardSkeleton };
