import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
        <Grid container spacing={2}>
            {products.length > 0 ? (
                products?.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))
            ) : (
                <div style={{ color: 'red' }}>Không tìm thấy sản phẩm</div>
            )}
        </Grid>
    );
};

export default ProductList; 