import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box, Rating } from '@mui/material';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if(product.id){
      navigate(`/product/${product.id}`);
      return;
    }
    navigate(`/product/${product.productId}`);
  };

  return (
    <Card 
      onClick={handleClick}
      sx={{ 
        cursor: 'pointer',
        '&:hover': { 
          boxShadow: 3,
          transform: 'translateY(-4px)',
          transition: 'all 0.3s ease-in-out'
        }
      }}
    >
      {/* <CardMedia
        component="img"
        height="200"
        image={product.imgUrl}
        alt={product.name}
      /> */}
      <img src={product?.imageUrls[0] || ''} alt={product.productName} style={{width: '100%', height: '233px'}} />
      <div style={{ padding: '8px 16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
      {product.name}
      </div>
{/* <img src={product.imgUrl} alt={product.productName} style={{width: '100%', height: '233px'}} /> */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.productName}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Typography variant="h6" color="error" fontWeight="bold">
            {product.price?.toLocaleString()}đ
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: 'line-through' }}
          >
            {product.price?.toLocaleString()}đ
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Rating value={product.rating} precision={0.5} readOnly size="small" />
          {/* <Typography variant="body2" color="text.secondary">
            ({product.ratingCount})
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            Đã bán {product?.totalSold || 0}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
//!
  