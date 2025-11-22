import React from 'react';
import { motion } from 'framer-motion';

interface EmptyStateProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, action }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-3xl)',
                textAlign: 'center',
                minHeight: '400px'
            }}
        >
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-bg-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-xl)'
            }}>
                {icon}
            </div>

            <h3 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-main)',
                marginBottom: 'var(--space-sm)'
            }}>
                {title}
            </h3>

            <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)',
                maxWidth: '400px',
                marginBottom: action ? 'var(--space-xl)' : 0
            }}>
                {description}
            </p>

            {action && (
                <button
                    onClick={action.onClick}
                    style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        padding: 'var(--space-md) var(--space-xl)',
                        borderRadius: 'var(--radius-lg)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 'var(--font-weight-semibold)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-base)'
                    }}
                >
                    {action.label}
                </button>
            )}
        </motion.div>
    );
};

export default EmptyState;
