import React from 'react';
import { Plus, Search, Filter, Grid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
    id: string;
    name: string;
    sku: string;
    price: string;
    stock: number;
    image: string;
}

const products: Product[] = [
    { id: '1', name: 'Office Chair', sku: 'FUR-001', price: '$120.00', stock: 45, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=300' },
    { id: '2', name: 'Standing Desk', sku: 'FUR-002', price: '$450.00', stock: 12, image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=300' },
    { id: '3', name: 'Monitor Arm', sku: 'ACC-001', price: '$85.00', stock: 150, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=300' },
    { id: '4', name: 'Mechanical Keyboard', sku: 'TEC-001', price: '$140.00', stock: 30, image: 'https://images.unsplash.com/photo-1587829741301-dc798b91add1?auto=format&fit=crop&q=80&w=300' },
    { id: '5', name: 'Wireless Mouse', sku: 'TEC-002', price: '$60.00', stock: 85, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=300' },
];

const ProductList: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', height: '100%' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Inventory</h1>
                <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                    <button style={{
                        backgroundColor: 'white',
                        border: '1px solid var(--color-border)',
                        padding: 'var(--space-sm)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-text-muted)'
                    }}>
                        <Grid size={20} />
                    </button>
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
                        onClick={() => navigate('/inventory/new')}
                    >
                        <Plus size={18} />
                        Add Product
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
                <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        style={{
                            width: '100%',
                            padding: 'var(--space-sm) var(--space-md) var(--space-sm) 40px',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border)',
                            fontSize: '0.95rem'
                        }}
                    />
                </div>
                <button style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--color-border)',
                    padding: 'var(--space-sm) var(--space-md)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                    color: 'var(--color-text-muted)'
                }}>
                    <Filter size={18} />
                    Filters
                </button>
            </div>

            {/* Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: 'var(--space-lg)',
                overflowY: 'auto',
                paddingBottom: 'var(--space-lg)'
            }}>
                {products.map(product => (
                    <div key={product.id} style={{
                        backgroundColor: 'white',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid var(--color-border)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        cursor: 'pointer'
                    }}
                        onClick={() => navigate(`/inventory/${product.id}`)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                        }}
                    >
                        <div style={{ height: '160px', overflow: 'hidden' }}>
                            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: 'var(--space-md)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 'var(--space-xs)' }}>
                                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>{product.name}</h3>
                                <span style={{ fontWeight: '600', color: 'var(--color-primary)' }}>{product.price}</span>
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>{product.sku}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{
                                    fontSize: '0.8rem',
                                    padding: '2px 8px',
                                    borderRadius: '12px',
                                    backgroundColor: product.stock > 20 ? '#dcfce7' : '#fee2e2',
                                    color: product.stock > 20 ? '#166534' : '#991b1b',
                                    fontWeight: '500'
                                }}>
                                    {product.stock} in stock
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
