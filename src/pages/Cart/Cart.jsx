import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Button, TextField, Paper, CircularProgress } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import orderService from '../../apis/orderService';

const Cart = () => {
  const navigate = useNavigate();
  // Initialize cart items state
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);
  const requestInProgress = useRef(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);




  useEffect(() => {
    // Đánh dấu component đã mount
    isMounted.current = true;
    
    // Chỉ fetch dữ liệu nếu chưa có yêu cầu đang xử lý
    if (!requestInProgress.current) {
      fetchCarts();
    }
    
    // Cleanup function
    return () => {
      isMounted.current = false;
    };
  }, []);

  const fetchCarts = async () => {

    // lấy thông tin giỏ hàng từ api order.getCurrentCart
    // xử lí hiện thi thông tin
    // thêm bớt số lượng sản phẩm, update giỏ hàng, tăng giảm số lượng sản phẩm
    // bấm vào nút thanh toán ngay -> đi đến trang checkout, truyền orderID vào trang checkout




    // Nếu đã có yêu cầu đang xử lý, không gửi yêu cầu mới
    if (requestInProgress.current) return;
    
    // Đánh dấu đang có yêu cầu đang xử lý
    requestInProgress.current = true;
    
    try {
      setLoading(true);
        // Get user ID from localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (user && user.userId) {
          // Fetch current cart from orderService
          
          const response = await orderService.getCurrentCart(user.userId);
          console.log(response);
          // Store the order ID for checkout
          if (response && response.orderId) {
            setCurrentOrderId(response.orderId);
          }
          const items = response.items.$values.map(item => ({
            id: item.orderItemId,
            productId: item.productId,
            name: item.product ? item.product.productName : 'Product Name',
            price: item.price,
            originalPrice: item.price * 1.2, // Assuming 20% markup, adjust as needed
            quantity: item.quantity,
            imgUrl: item.product ? item.product.imgUrl : 'https://via.placeholder.com/150',
          }));
          setCartItems(items);
          localStorage.setItem('cart', JSON.stringify(items));
        } else {
          setCartItems([]);
          localStorage.setItem('cart', '[]');
        }
    } catch (error) {
          console.error('Error fetching cart:', error);
        // Fallback to localStorage on error
        setCartItems([]);
          localStorage.setItem('cart', '[]');
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
      // Đánh dấu không còn yêu cầu đang xử lý
      requestInProgress.current = false;
    }
  };

  // Update cart items
  const updateCartItems = async (newItems) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      
      if (user && user.userId) {
        // For authenticated users, update via API
        // This is a simplified approach - in a real app, you'd need to handle
        // the specific API calls for each update type (add, update, remove)
        
        // For now, we'll just update the local state and localStorage as a fallback
        if (isMounted.current) {
          setCartItems(newItems);
        }
        localStorage.setItem('cart', JSON.stringify(newItems));
      } else {
        // For non-authenticated users, update localStorage
        if (isMounted.current) {
          setCartItems(newItems);
        }
        localStorage.setItem('cart', JSON.stringify(newItems));
      }
      
      // Dispatch custom event to notify other components (like Header) that cart has been updated
      window.dispatchEvent(new CustomEvent('cartUpdated'));
    } catch (error) {
      if (isMounted.current) {
        console.error('Error updating cart:', error);
        setError('Failed to update cart. Please try again.');
      }
    }
  };

  // Hàm tăng số lượng
  const increaseQuantity = async (id) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const item = cartItems.find(item => item.id === id);
      
      if (user && user.userId) {
        // For authenticated users, update via API
        await orderService.updatecartitem(id, item.quantity + 1);
      }
      
      // Update local state only if component is still mounted
      if (isMounted.current) {
        const updatedItems = cartItems.map(item => 
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCartItems(updatedItems);
      }
    } catch (error) {
      if (isMounted.current) {
        console.error('Error increasing quantity:', error);
        setError('Failed to update quantity. Please try again.');
      }
    }
  };


  // Hàm giảm số lượng
  const decreaseQuantity = async (id) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const item = cartItems.find(item => item.id === id);
      
      if (item.quantity > 1) {
        if (user && user.userId) {
          // For authenticated users, update via API
          await orderService.updatecartitem(id, item.quantity - 1);
        }
        
        // Update local state only if component is still mounted
        if (isMounted.current) {
          const updatedItems = cartItems.map(item => 
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
          );
          updateCartItems(updatedItems);
        }
      }
    } catch (error) {
      if (isMounted.current) {
        console.error('Error decreasing quantity:', error);
        setError('Failed to update quantity. Please try again.');
      }
    }
  };

  // Hàm xóa sản phẩm
  const removeItem = async (id) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      
      if (user && user.userId) {
        // For authenticated users, remove via API
        await orderService.removefromcart(id);
      }
      
      // Update local state only if component is still mounted
      if (isMounted.current) {
        const updatedItems = cartItems.filter(item => item.id !== id);
        updateCartItems(updatedItems);
      }
    } catch (error) {
      if (isMounted.current) {
        console.error('Error removing item:', error);
        setError('Failed to remove item. Please try again.');
      }
    }
  };

  // Tính tổng tiền
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  // Giảm giá (hardcoded for now, could be calculated based on business logic)
  const discount = 0;
  
  // Tổng cộng sau khi giảm giá
  const finalAmount = totalAmount - discount;

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography color="error" variant="h6" gutterBottom>
          {error}
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => window.location.reload()}
          sx={{ mt: 2 }}
        >
          Try Again
        </Button>
      </Box>
    );
  }

  return (

//     <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh',width: "99vw" }}>
    <Box sx={{ backgroundColor: '#e0f7fa', minHeight: '100vh', overflow: 'hidden', width:'99vw' }}>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {/* Left side - Cart items */}
          <Box sx={{ flex: '1 1 auto', width: '100%' }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              Giỏ hàng: <Typography component="span" sx={{ ml: 1, fontWeight: 'normal' }}>{cartItems.length} sản phẩm</Typography>
            </Typography>
            
            <Paper elevation={0} sx={{ p: 0, mb: 2, width: '100%' }}>
              {cartItems.map((item, index) => (
                <Box key={item.id}>
                  <Box sx={{ 
                    display: 'flex', 
                    p: 2, 
                    borderBottom: index < cartItems.length - 1 ? '1px solid #eee' : 'none',
                    alignItems: 'center'
                  }}>
                    <Box sx={{ width: 42, height: 42, mr: 2, display: 'flex', alignItems: 'center' }}>
                      <img 
                        src={item.imgUrl} 
                        alt={item.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </Box>
                    
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 'medium', mb: 1 }}>
                        {item.name}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body2" sx={{ mr: 1 }}>
                          {item.price.toLocaleString()}đ
                        </Typography>
                        <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                          {item.originalPrice.toLocaleString()}đ
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
                      <Button 
                        onClick={() => decreaseQuantity(item.id)}
                        sx={{ 
                          minWidth: 30, 
                          width: 30, 
                          height: 30, 
                          p: 0, 
                          border: '1px solid #ddd',
                          borderRadius: '4px'
                        }}
                      >
                        -
                      </Button>
                      <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                      <Button 
                        onClick={() => increaseQuantity(item.id)}
                        sx={{ 
                          minWidth: 30, 
                          width: 30, 
                          height: 30, 
                          p: 0, 
                          border: '1px solid #ddd',
                          borderRadius: '4px'
                        }}
                      >
                        +
                      </Button>
                    </Box>
                    
                    <Box sx={{ textAlign: 'right', minWidth: 100 }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {(item.price * item.quantity).toLocaleString()}đ
                      </Typography>
                    </Box>
                    
                    <Button 
                      onClick={() => removeItem(item.id)}
                      sx={{ 
                        color: 'text.secondary', 
                        textTransform: 'none', 
                        p: 0,
                        ml: 2,
                        minWidth: 'auto'
                      }}
                    >
                      Xóa
                    </Button>
                  </Box>
                  
                  {/* Promotion text for the second item */}
                  {item.id === 2 && (
                    <Box sx={{ p: 2, bgcolor: '#f9f9f9', fontSize: '0.875rem', color: 'text.secondary' }}>
                      Tặng ngay phần quà khi mua tại cửa hàng còn quà
                    </Box>
                  )}
                </Box>
              ))}
            </Paper>
            
            <Box sx={{ textAlign: 'left', mt: 3 }}>
              <Button 
                variant="text" 
                onClick={() => navigate('/')} 
                sx={{ 
                  color: 'primary.main',
                  textTransform: 'none',
                  '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
                  pl: 0,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                ← Tiếp tục mua hàng
              </Button>
            </Box>
          </Box>
          
          {/* Right side - Order summary */}
          <Box sx={{ width: { xs: '100%', md: '380px' }, flexShrink: 0 }}>
            <Paper elevation={0} sx={{ bgcolor: '#212121', color: 'white', p: 3, borderRadius: 1 }}>
              <Typography variant="h6" sx={{ mb: 3 }} color='white'>
                Thông tin đơn hàng
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography color='white'>Tạm tính:</Typography>
                <Typography sx={{ color: '#ff6b6b', fontWeight: 'bold' }} color='white'>
                  {totalAmount.toLocaleString()}đ
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography color='white'>Giá giảm:</Typography>
                <Typography sx={{ color: '#ff6b6b', fontWeight: 'bold' }} color='white'>
                  {discount.toLocaleString()}đ
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography color='white'>Tổng cộng:</Typography>
                <Typography sx={{ color: '#ff6b6b', fontWeight: 'bold' }} color='white'>
                  {finalAmount.toLocaleString()}đ
                </Typography>
              </Box>
              
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <CheckCircleIcon sx={{ color: '#ff6b6b', mr: 1 }} />
              </Box>
              
              <Typography variant="h6" sx={{ mb: 2 }} color='white'>
                Ghi chú đơn hàng
              </Typography>
              
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Ghi chú"
                variant="outlined"
                sx={{ 
                  mb: 3,
                  bgcolor: '#333',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#444' },
                    '&:hover fieldset': { borderColor: '#666' },
                    '&.Mui-focused fieldset': { borderColor: '#888' },
                  },
                  '& .MuiInputBase-input': { color: 'white' }
                }}
              />
              
              <Typography variant="h6" sx={{ mb: 2 }} color='white'>
                Thông tin xuất hoá đơn
              </Typography>
              
              <Button 
                fullWidth 
                variant="contained" 
                sx={{ 
                  bgcolor: '#ff6b6b', 
                  color: 'white', 
                  py: 1.5,
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: '#ff5252' }
                }}
                onClick={() => {
                  if (currentOrderId) {
                    const user = JSON.parse(localStorage.getItem('user'));
                    const queryParams = new URLSearchParams({
                      orderId: currentOrderId,
                      name: user?.name || '',
                      email: user?.email || '',
                      phone: user?.phone || '',
                      address: user?.address || ''
                    }).toString();
                    navigate(`/checkout?${queryParams}`);
                  } else {
                    navigate('/checkout');
                  }
                }}
              >
                THANH TOÁN NGAY
              </Button>
            </Paper>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Cart;

