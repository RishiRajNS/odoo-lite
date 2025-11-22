import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

const LeadForm: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        revenue: '',
        stage: 'new'
    });

    useEffect(() => {
        // Mock fetch data
        if (id) {
            setFormData({
                name: 'Alice Smith',
                company: 'Acme Corp',
                email: 'alice@acme.com',
                phone: '+1 555 0123',
                revenue: '12000',
                stage: 'new'
            });
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-xl)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    <button
                        onClick={() => navigate('/crm')}
                        style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', padding: 0 }}
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>
                        {id ? 'Edit Lead' : 'New Lead'}
                    </h1>
                </div>
                <button style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    padding: 'var(--space-sm) var(--space-lg)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                    fontWeight: '500'
                }}>
                    <Save size={18} />
                    Save
                </button>
            </div>

            {/* Form */}
            <div style={{ backgroundColor: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>

                    <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>Lead Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>Company</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>Expected Revenue</label>
                        <input
                            type="text"
                            name="revenue"
                            value={formData.revenue}
                            onChange={handleChange}
                            style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>

                    <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>Stage</label>
                        <select
                            name="stage"
                            value={formData.stage}
                            onChange={handleChange}
                            style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', backgroundColor: 'white' }}
                        >
                            <option value="new">New</option>
                            <option value="qualified">Qualified</option>
                            <option value="proposition">Proposition</option>
                            <option value="won">Won</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LeadForm;
