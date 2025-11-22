import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Upload } from 'lucide-react';

const ProductDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-xl)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    <button
                        onClick={() => navigate('/inventory')}
                        style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', padding: 0, cursor: 'pointer' }}
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>
                        {id === 'new' ? 'New Product' : 'Edit Product'}
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'var(--space-xl)' }}>
                {/* Form */}
                <div style={{ backgroundColor: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>Product Name</label>
                            <input type="text" defaultValue="Office Chair" style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem' }} />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>SKU</label>
                            <input type="text" defaultValue="FUR-001" style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem' }} />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>Price</label>
                            <input type="text" defaultValue="$120.00" style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem' }} />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>Stock Level</label>
                            <input type="number" defaultValue="45" style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem' }} />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>Category</label>
                            <select style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', backgroundColor: 'white' }}>
                                <option>Furniture</option>
                                <option>Electronics</option>
                                <option>Accessories</option>
                            </select>
                        </div>

                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>Description</label>
                            <textarea rows={4} style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }} />
                        </div>
                    </div>
                </div>

                {/* Image Upload */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-sm)',
                        aspectRatio: '1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px dashed var(--color-border)',
                        flexDirection: 'column',
                        gap: 'var(--space-sm)',
                        color: 'var(--color-text-muted)',
                        cursor: 'pointer'
                    }}>
                        <Upload size={32} />
                        <span>Upload Image</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
