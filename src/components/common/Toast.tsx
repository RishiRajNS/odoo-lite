import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

interface Toast {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
}

interface ToastContextType {
    showToast: (type: Toast['type'], message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback((type: Toast['type'], message: string) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts(prev => [...prev, { id, type, message }]);

        setTimeout(() => {
            setToasts(prev => prev.filter(toast => toast.id !== id));
        }, 4000);
    }, []);

    const removeToast = (id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    const getIcon = (type: Toast['type']) => {
        switch (type) {
            case 'success': return <CheckCircle size={20} />;
            case 'error': return <XCircle size={20} />;
            case 'warning': return <AlertCircle size={20} />;
            case 'info': return <Info size={20} />;
        }
    };

    const getColors = (type: Toast['type']) => {
        switch (type) {
            case 'success': return { bg: '#10B981', border: '#059669' };
            case 'error': return { bg: '#EF4444', border: '#DC2626' };
            case 'warning': return { bg: '#F59E0B', border: '#D97706' };
            case 'info': return { bg: '#3B82F6', border: '#2563EB' };
        }
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div style={{
                position: 'fixed',
                top: 'var(--space-xl)',
                right: 'var(--space-xl)',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-sm)'
            }}>
                <AnimatePresence>
                    {toasts.map(toast => {
                        const colors = getColors(toast.type);
                        return (
                            <motion.div
                                key={toast.id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                style={{
                                    background: colors.bg,
                                    color: 'white',
                                    padding: 'var(--space-md) var(--space-lg)',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-xl)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-md)',
                                    minWidth: '300px',
                                    maxWidth: '400px',
                                    border: `2px solid ${colors.border}`
                                }}
                            >
                                {getIcon(toast.type)}
                                <span style={{ flex: 1, fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                                    {toast.message}
                                </span>
                                <button
                                    onClick={() => removeToast(toast.id)}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.2)',
                                        border: 'none',
                                        color: 'white',
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: 'var(--radius-md)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'background var(--transition-base)'
                                    }}
                                >
                                    <X size={14} />
                                </button>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};
