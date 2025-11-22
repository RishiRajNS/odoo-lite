import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
    content: string;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
    const [isVisible, setIsVisible] = useState(false);

    const getPosition = () => {
        switch (position) {
            case 'top':
                return { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px' };
            case 'bottom':
                return { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '8px' };
            case 'left':
                return { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '8px' };
            case 'right':
                return { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '8px' };
        }
    };

    return (
        <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        style={{
                            position: 'absolute',
                            ...getPosition(),
                            background: 'var(--color-text-main)',
                            color: 'white',
                            padding: 'var(--space-xs) var(--space-sm)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--text-xs)',
                            whiteSpace: 'nowrap',
                            zIndex: 10000,
                            pointerEvents: 'none',
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Tooltip;
