import { useState, useEffect, memo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Rating, 
  Button, 
  IconButton,
  Breadcrumbs,
  Link,
  Paper,
  Tabs,
  Tab,
  Badge,
  Modal,
  TextField
} from '@mui/material';
import { Home as HomeIcon, Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import productService from '../../apis/productService';
import orderService from '../../apis/orderService';
import reviewService from "../../apis/reviewService";



// Create a separate memoized component for the timer
const FlashDealTimer = memo(({ initialHours = 0, initialMinutes = 0, initialSeconds = 45 }) => {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  console.log
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        
        if (newSeconds < 0) {
          const newMinutes = prevTime.minutes - 1;
          
          if (newMinutes < 0) {
            const newHours = prevTime.hours - 1;
            
            if (newHours < 0) {
              clearInterval(timer);
              return { hours: 0, minutes: 0, seconds: 0 };
            }
            
            return { hours: newHours, minutes: 59, seconds: 59 };
          }
          
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }
        
        return { ...prevTime, seconds: newSeconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <Typography variant="body2">
      KẾT THÚC TRONG {time.hours.toString().padStart(2, '0')} : {time.minutes.toString().padStart(2, '0')} : {time.seconds.toString().padStart(2, '0')}
    </Typography>
  );
});

// Add display name and prop types
FlashDealTimer.displayName = 'FlashDealTimer';
FlashDealTimer.propTypes = {
  initialHours: PropTypes.number,
  initialMinutes: PropTypes.number,
  initialSeconds: PropTypes.number
};

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [tabValue, setTabValue] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const isMounted = useRef(true);
  const requestInProgress = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewContent, setReviewContent] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [totalSold, setTotalSold] = useState(0);
  const [mainImageUrl, setMainImageUrl] = useState('');
  
  const handleThumbnailClick = (imageUrl) => {
  // Update the selected thumbnail index
  setMainImageUrl(imageUrl);
};
  useEffect(() => {
    isMounted.current = true;
    if (!requestInProgress.current) {
      fetchProduct();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  const fetchProduct = async () => {
    if (requestInProgress.current) return;
    requestInProgress.current = true;
    try {
      setLoading(true);
      const fetchedProduct = await productService.getProductById(id);
      const fetchedReviews = await reviewService.getReviewsProductId(id);
      const totalSold = await orderService.countBoughtProducts(id);
      if (isMounted.current) {
        setProduct({
          ...fetchedProduct,
          discountedPrice: fetchedProduct.price - (fetchedProduct.price * 15 / 100),
          relatedProducts: [
            {
              id: 1,
              name: "Sữa rửa mặt GGGGGGGG",
              price: 115000,
              originalPrice: 250000,
              discountPercent: 47,
              rating: 4,
              reviewCount: 243,
              soldCount: 657,
              image: "/path/to/image.jpg"
            }
          ]
        });
        setMainImageUrl(fetchedProduct?.imageUrls[0] || '');
        setReviews(fetchedReviews);
        if (totalSold) {
          setTotalSold(totalSold.totalSold);
        }
      }
    } catch (error) {
      console.error("Error fetching product or reviews:", error);
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
      requestInProgress.current = false;
    }
  };

  if (loading) {
    return <Typography>Đang tải sản phẩm...</Typography>;
  }

  if (!product) {
    return <Typography>Không tìm thấy sản phẩm</Typography>;
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  const addToCart = async () => {
    if (!product) return;
    
    try {
      // Get user ID from localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user?.userId || 1; // Fallback to 1 if no user ID found
      
      // Call the API to add item to cart
      await orderService.addtocard(userId, product.productId, quantity);
      
      // Dispatch custom event to notify other components (like Header) that cart has been updated
      window.dispatchEvent(new CustomEvent('cartUpdated'));
      
      // Show success message
      alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng`);
      
      // Reset quantity
      setQuantity(1);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Có lỗi xảy ra khi thêm vào giỏ hàng. Vui lòng thử lại sau.');
    }
  };

  const handleBuyNow = async () => {
    // Logic để thêm sản phẩm vào giỏ hàng nếu cần
    // ...
    await addToCart();
    // Chuyển hướng đến trang checkout
    navigate('/cart');
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleReviewSubmit = async () => {
    if (!reviewContent || reviewRating <= 0) {
      alert('Please provide a review and rating.');
      return;
    }
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user?.userId || 1;
      await reviewService.postReview({
        userId,
        productId: id,
        rating: reviewRating,
        reviewComment: reviewContent
      });
      const updatedReviews = await reviewService.getReviewsProductId(id);
      setReviews(updatedReviews);
      alert('Review added successfully!');
      handleCloseModal();
    } catch (error) {
      console.error('Error adding review:', error);
      alert('Bạn chỉ có thể đánh giá sản phẩm sau khi đã mua hàng.');
    }
  };


  return (
    <>
      <Container>
        <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
          <Link color="inherit" href="/">
            <HomeIcon />
          </Link>
          <Link color="inherit" href="/category">
            Danh Mục
          </Link>
          {loading ? (
            <Box sx={{ bgcolor: '#f0f0f0', height: 24, width: 200 }} />
          ) : (
            <Typography color="textPrimary">{product?.productName}</Typography>
          )}
        </Breadcrumbs>
        <Grid container spacing={3}>
          {/* Product Images */}

          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {/* Thumbnails column */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '80px' }}>
                {/* You would map through product images here */}
                {product?.imageUrls?.map((thumb, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      border: '1px solid #eee',
                      cursor: 'pointer',
                      '&:hover': { borderColor: '#ccc' }
                    }}
                    onClick={() => handleThumbnailClick(thumb)}
                  >
                    <img 
                      src={thumb} 
                      alt={`${product.productName} thumbnail ${index}`} 
                      style={{ width: '100%', height: '80px', objectFit: 'contain' }} 
                    />
                  </Box>
                ))}
              </Box>
              
              {/* Main image */}
              <Box 
                sx={{ 
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #eee',
                  padding: 2
                }}
              >
                {loading ? (
                  <Typography variant="h6" color="#bdbdbd">
                    Loading Image...
                  </Typography>
                ) : (
                  <img 
                    src={mainImageUrl} 
                    alt={product.productName} 
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '400px',
                      objectFit: 'contain'
                    }} 
                  />
                )}
              </Box>
            </Box>
          </Grid>
          
          
          {/* Product Details */}
          <Grid item xs={12} md={6}>
            {loading ? (
              // Gray background placeholders for product details
              <>
                <Box sx={{ bgcolor: '#f0f0f0', height: 60, width: '80%', mb: 2 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ bgcolor: '#f0f0f0', height: 24, width: 120 }} />
                </Box>
                <Box sx={{ bgcolor: '#f0f0f0', height: 60, width: '100%', mb: 2 }} />
                <Box sx={{ bgcolor: '#f0f0f0', height: 100, width: '100%', mb: 2 }} />
                <Box sx={{ bgcolor: '#f0f0f0', height: 30, width: '40%', mb: 3 }} />
                <Box sx={{ bgcolor: '#f0f0f0', height: 50, width: '100%', mb: 3 }} />
                <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ bgcolor: '#f0f0f0', height: 50, width: '50%' }} />
                <Box sx={{ bgcolor: '#f0f0f0', height: 50, width: '50%' }} />
                </Box>
              </>
            ) : (
              <>
                <Typography variant="h5" component="h1" gutterBottom>
                  {product?.productName}
                </Typography>
                
                {/* Ratings */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating value={4.5} precision={0.5} readOnly size="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {reviews?.length} đánh giá
                  </Typography>
                  <Typography variant="body2" sx={{ ml: 2, color: 'text.secondary' }}>
                    Đã bán {totalSold} sản phẩm
                  </Typography>
                </Box>
                
                {/* Flash Deal */}
                <Box 
                  sx={{ 
                    bgcolor: '#f57224', 
                    color: 'white', 
                    p: 1, 
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="body1" fontWeight="bold">
                    🔥 FLASH DEAL
                  </Typography>
                  <FlashDealTimer />
                </Box>
                
                {/* Price */}
                <Box sx={{ mb: 2, bgcolor: '#f8f8f8', p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography 
                      variant="h5" 
                      component="span" 
                      color="error" 
                      fontWeight="bold"
                    >
                      {product?.discountedPrice?.toLocaleString()}đ
                    </Typography>
                    <Typography 
                      variant="body2" 
                      component="span" 
                      sx={{ 
                        textDecoration: 'line-through', 
                        color: 'text.secondary',
                        ml: 2
                      }}
                    >
                      {product?.price?.toLocaleString()}đ
                    </Typography>
                    <Badge 
                      sx={{ ml: 2 }}
                      badgeContent={`14%`} 
                      color="error"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    *Giá đã bao gồm VAT
                  </Typography>
                </Box>
                
                {/* Product Specifications */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1">
                    Dung tích: {product?.capacity}g
                  </Typography>
                </Box>
                
                {/* Quantity Selector */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Typography variant="body1" sx={{ mr: 2 }}>
                    Số lượng:
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd' }}>
                    <IconButton 
                      size="small" 
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography sx={{ px: 2 }}>{quantity}</Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => handleQuantityChange(1)}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                
                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Button 
                    variant="contained" 
                    color="success" 
                    sx={{ 
                      flex: 1,
                      py: 1.5,
                      textTransform: 'none',
                      fontWeight: 'bold'
                    }}
                    onClick={addToCart}
                  >
                    Thêm vào giỏ
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="success" 
                    sx={{ 
                      flex: 1,
                      py: 1.5,
                      textTransform: 'none',
                      fontWeight: 'bold'
                    }}
                    onClick={handleBuyNow}
                  >
                    Mua Ngay
                  </Button>
                  
                </Box>
              </>
            )}
          </Grid>
        </Grid>
        
        {/* Product Tabs */}
        <Box sx={{ mt: 4, mb: 2, borderBottom: 1, borderColor: 'divider' }}>
          {loading ? (
            <Box sx={{ bgcolor: '#f0f0f0', height: 48, width: '100%' }} />
          ) : (
            <Tabs 
              value={tabValue} 
              onChange={(e, newValue) => setTabValue(newValue)}
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }
              }}
            >
              <Tab label="Thành Phần" />
              <Tab label="Đánh giá" sx={{ ml: 2 }} />
              <Tab label="Cách dùng" sx={{ ml: 2 }} />
            </Tabs>
          )}
        </Box>
        
        {/* Tab Content */}
        <Box sx={{ mb: 4 }}>
          {loading ? (
            <Box 
              sx={{ 
                p: 2, 
                bgcolor: '#f0f0f0', 
                height: 200, 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="body1" color="#bdbdbd">
                Loading content...
              </Typography>
            </Box>
          ) : (
            <>
              {tabValue === 0 && (
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">{product?.description}</Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>{product?.ingredients}</Typography>
                </Box>
              )}
              
              {/* {
    "$id": "2",
    "reviewId": 16,
    "userId": 4,
    "productId": 7,
    "rating": 5,
    "reviewDate": "2025-03-12T12:45:04.397",
    "reviewComment": "viet anh review",
    "product": null,
    "user": null
} */}
              {tabValue === 1 && (
                <Box sx={{ p: 2 }}>
                  {reviews?.map((review, index) => (
                    <Paper key={index} sx={{ p: 2, mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box 
                          component="img" 
                          src="/images/avatar-placeholder.jpg" 
                          alt={review.userName}
                          sx={{ 
                            width: 40, 
                            height: 40, 
                            borderRadius: '50%',
                            backgroundColor: 'gray',
                            mr: 2
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/avatar-placeholder.jpg';
                          }}
                        />
                        <Box>
                          <Typography variant="body1" fontWeight="bold">
                            {review.userName || "Người dùng"}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {new Date(review.reviewDate).toLocaleDateString()}
                          </Typography>
                        </Box>
                      </Box>
                      <Rating value={review.rating} readOnly size="small" />
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {review?.reviewComment}
                      </Typography>
                    </Paper>
                  ))}
                  {reviews?.length === 0 && (
                    <Typography>Chưa có đánh giá nào</Typography>
                  )}
                  <Button onClick={handleOpenModal}>Add Review</Button>
                  <Modal open={isModalOpen} onClose={handleCloseModal}>
                    <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 24, maxWidth: 400, mx: 'auto', mt: 4 }}>
                     <Box>
                     <Typography variant="h6" gutterBottom>Write a Review</Typography>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        label="Review"
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
                        sx={{ mb: 2 }}
                      />
                      <Rating
                        value={reviewRating}
                        onChange={(e, newValue) => setReviewRating(newValue)}
                        sx={{ mb: 2 }}
                      />
                     </Box>
                      <Button variant="contained" color="primary" onClick={handleReviewSubmit}>Xác nhận</Button>


                    </Box>

                  </Modal>
                </Box>
              )}
              
              {tabValue === 2 && (
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">{product?.usageInstructions}</Typography>
                </Box>
              )}
            </>
          )}
        </Box>
        
      </Container>
    </>
  );
}

