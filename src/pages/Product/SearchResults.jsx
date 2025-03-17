import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import productService from '../../apis/productService';
import { Grid, Typography, Box } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { styled } from '@mui/material/styles';

const SearchResultsTitle = styled(Typography)(({ theme }) => ({
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '5px',
}));

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('name');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productService.searchProducts(query);
                const _products = response['$values'] || [];
                setProducts(_products);
                if (_products.length > 0) {
                    setError(null);
                } else {
                    setError('Không tìm thấy sản phẩm');
                }
            } catch (error) {
                console.error(error);
                setError('Không tìm thấy sản phẩm');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [query]);

    if (loading) return <Typography>Đang tải...</Typography>;

    return (
        <>
            <Header />
            <Box sx={{  width: "99vw", overflowX: "hidden" }}>
            <SearchResultsTitle variant="h4" align="center" gutterBottom>
                {error ? error : `Kết quả tìm kiếm cho: ${query}`}
            </SearchResultsTitle>
            <Grid container spacing={2}>
                {error ? null : (
                    Array.isArray(products) && products.length > 0 ? (
                        products.map(product => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <ProductCard product={product} />
                            </Grid>
                        ))
                    ) : null
                )}
            </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default SearchResults; 