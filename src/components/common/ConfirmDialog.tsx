import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface ConfirmDialogProps {
    isOpen: boolean;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    variant?: 'danger' | 'warning' | 'info';
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    isOpen,
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    variant = 'warning'
}) => {
    const getColors = () => {
        switch (variant) {
            case 'danger': return { primary: '#EF4444', light: '#FEE2E2' };
            case 'warning': return { primary: '#F59E0B', light: '#FEF3C7' };
            case 'info': return { primary: '#3B82F6', light: '#DBEAFE' };
        }
    };

    const colors = getColors();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onCancel}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 9998,
                            backdropFilter: 'blur(4px)'
                        }}
                    />

                    {/* Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: 'var(--color-bg-surface)',
                            borderRadius: 'var(--radius-xl)',
                            boxShadow: 'var(--shadow-xl)',
                            padding: 'var(--space-2xl)',
                            maxWidth: '400px',
                            width: '90%',
                            zIndex: 9999
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: 'var(--radius-full)',
                            background: colors.light,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 'var(--space-lg)',
                            color: colors.primary
                        }}>
                            <AlertTriangle size={24} />
                        </div>

                        <h3 style={{
                            fontSize: 'var(--text-xl)',
                            fontWeight: 'var(--font-weight-semibold)',
                            marginBottom: 'var(--space-sm)',
                            color: 'var(--color-text-main)'
                        }}>
                            {title}
                        </h3>

                        <p style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--color-text-muted)',
                            marginBottom: 'var(--space-xl)',
                            lineHeight: 1.6
                        }}>
                            {message}
                        </p>

                        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'flex-end' }}>
                            <button
                                onClick={onCancel}
                                style={{
                                    padding: 'var(--space-sm) var(--space-lg)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-bg-surface)',
                                    color: 'var(--color-text-main)',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    cursor: 'pointer',
                                    transition: 'all var(--transition-base)'
                                }}
                            >
                                {cancelText}
                            </button>
                            <button
                                onClick={onConfirm}
                                style={{
                                    padding: 'var(--space-sm) var(--space-lg)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: 'none',
                                    background: colors.primary,
                                    color: 'white',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    cursor: 'pointer',
                                    transition: 'all var(--transition-base)'
                                }}
                            >
                                {confirmText}
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ConfirmDialog;
