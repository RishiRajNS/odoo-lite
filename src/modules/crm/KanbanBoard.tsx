import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, MoreHorizontal, Phone, Mail } from 'lucide-react';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';

interface Lead {
    id: string;
    name: string;
    company: string;
    revenue: string;
    stage: 'new' | 'qualified' | 'proposition' | 'won';
}

const initialLeads: Lead[] = [
    { id: '1', name: 'Alice Smith', company: 'Acme Corp', revenue: '$12,000', stage: 'new' },
    { id: '2', name: 'Bob Jones', company: 'Global Tech', revenue: '$45,000', stage: 'qualified' },
    { id: '3', name: 'Charlie Day', company: 'Day Industries', revenue: '$8,500', stage: 'new' },
    { id: '4', name: 'Diana Prince', company: 'Themyscira Inc', revenue: '$120,000', stage: 'proposition' },
];

const stages = [
    { id: 'new', label: 'New', color: '#3b82f6' },
    { id: 'qualified', label: 'Qualified', color: '#f59e0b' },
    { id: 'proposition', label: 'Proposition', color: '#8b5cf6' },
    { id: 'won', label: 'Won', color: '#10b981' },
];

const DraggableCard = ({ lead, onClick }: { lead: Lead; onClick: () => void }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: lead.id,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <div style={{
                backgroundColor: 'white',
                padding: 'var(--space-md)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'grab',
                border: '1px solid transparent',
                transition: 'box-shadow 0.2s ease'
            }}
                onClick={onClick}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-xs)' }}>
                    <span style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>{lead.name}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>{lead.revenue}</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                    {lead.company}
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                    <button style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4px', color: 'var(--color-text-muted)' }}>
                        <Mail size={14} />
                    </button>
                    <button style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4px', color: 'var(--color-text-muted)' }}>
                        <Phone size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const DroppableColumn = ({ stage, children }: { stage: any; children: React.ReactNode }) => {
    const { setNodeRef } = useDroppable({
        id: stage.id,
    });

    return (
        <div ref={setNodeRef} style={{
            minWidth: '300px',
            backgroundColor: '#f1f5f9', // Slate 100
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '100%'
        }}>
            {/* Column Header */}
            <div style={{ padding: 'var(--space-md)', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: stage.color }}></div>
                    <span style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>{stage.label}</span>
                </div>
                <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
                    <MoreHorizontal size={16} />
                </button>
            </div>

            {/* Cards Container */}
            <div style={{ padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', overflowY: 'auto', flex: 1 }}>
                {children}
            </div>
        </div>
    );
};

const KanbanBoard: React.FC = () => {
    const [leads, setLeads] = useState<Lead[]>(initialLeads);
    const navigate = useNavigate();

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setLeads((items) => {
                const oldIndex = items.findIndex(i => i.id === active.id);
                const newStage = over.id as Lead['stage'];

                if (items[oldIndex].stage !== newStage) {
                    const newItems = [...items];
                    newItems[oldIndex] = { ...newItems[oldIndex], stage: newStage };
                    return newItems;
                }
                return items;
            });
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 'var(--space-md)' }}>
                {/* Toolbar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Pipeline</h1>
                    <button style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        padding: 'var(--space-sm) var(--space-md)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                        fontWeight: '500'
                    }}
                        onClick={() => navigate('/crm/new')}
                    >
                        <Plus size={18} />
                        New Lead
                    </button>
                </div>

                {/* Board */}
                <div style={{ display: 'flex', gap: 'var(--space-md)', overflowX: 'auto', height: '100%', paddingBottom: 'var(--space-md)' }}>
                    {stages.map(stage => (
                        <DroppableColumn key={stage.id} stage={stage}>
                            {leads.filter(l => l.stage === stage.id).map(lead => (
                                <DraggableCard key={lead.id} lead={lead} onClick={() => navigate(`/crm/${lead.id}`)} />
                            ))}
                        </DroppableColumn>
                    ))}
                </div>
            </div>
        </DndContext>
    );
};

export default KanbanBoard;
