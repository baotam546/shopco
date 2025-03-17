import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './checkout.css';
import Header from '../../components/Header';
import orderService from '../../apis/orderService';
import voucherService from '../../apis/voucherService';

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const [addressDialogOpen, setAddressDialogOpen] = useState(false);
  const [voucherDialogOpen, setVoucherDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Thanh toán khi nhận hàng (COD)');
  const [thankYouDialogOpen, setThankYouDialogOpen] = useState(false);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [tempDeliveryAddress, setTempDeliveryAddress] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [tempRecipientName, setTempRecipientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tempPhoneNumber, setTempPhoneNumber] = useState('');
  const [vouchers, setVouchers] = useState([]);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [voucherLoading, setVoucherLoading] = useState(false);
  const [voucherError, setVoucherError] = useState(null);
  const [voucherApplied, setVoucherApplied] = useState(false);
  const isMounted = useRef(true);
  const requestInProgress = useRef(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const userName = searchParams.get('name');
  const userEmail = searchParams.get('email');
  const userPhone = searchParams.get('phone');
  const userAddress = searchParams.get('address');

  useEffect(() => {


    // Mark component as mounted
    isMounted.current = true;
    
    // Only fetch data if no request is in progress and orderId exists
    if (!requestInProgress.current && orderId) {
      fetchOrderById(orderId);
    } else if (!orderId) {
      // If no orderId is provided, we're not loading anymore
      setLoading(false);
    }
    
    // Cleanup function
    return () => {
      isMounted.current = false;
    };
  }, [orderId]);

  const fetchOrderById = async (id) => {
    // lấy dữ liệu từ orderID,
    // dựa vào dữ liệu, mình xem nó phù hợp với các voucher nào
    // gọi api để lấy cái vourchers
    // khi mà chọn voucher, mình call api apply-voucher
    // bấm vào nút thanh tóan, mình call api confirm-payment

    // If a request is already in progress, don't send a new one
    if (requestInProgress.current) return;
    
    // Mark that a request is in progress
    requestInProgress.current = true;
    
    try {
      setLoading(true);
      console.log('Fetching order with ID:', id);
      const response = await orderService.getOrderById(id);
      console.log('Order response:', response);
      
      if (response) {
        setOrder(response);
        
        // Set delivery address from order
        if (response.deliveryAddress) {
          setDeliveryAddress(response.deliveryAddress);
        } else {
          setDeliveryAddress(userAddress || '6 Vĩnh Khánh Phường 9 Quận 4 Hồ Chí Minh 700000, Việt Nam');
        }
        
        // Set recipient name and phone number from user info
        if (response.user) {
          setRecipientName(`${response.user.firstName} ${response.user.lastName}`);
          setPhoneNumber(response.user.phoneNumber);
        } else {
          setRecipientName(userName || 'Nguyễn');
          setPhoneNumber(userPhone || '0386874065');
        }
        
        // Set payment method if available in the order
        if (response.payments && response.payments.$values && response.payments.$values.length > 0) {
          const paymentInfo = response.payments.$values[0];
          setPaymentMethod(paymentInfo.paymentMethod || 'Thanh toán khi nhận hàng (COD)');
        }

        // Set voucher if available in the order
        if (response.voucher) {
          setSelectedVoucher(response.voucher);
          setVoucherApplied(true);
        }
      }
    } catch (error) {
      console.error('Error fetching order:', error);
      setError('Failed to load order details. Please try again later.');
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
      // Mark that no request is in progress
      requestInProgress.current = false;
    }
  };

  const fetchVouchers = async () => {
    try {
      setVoucherLoading(true);
      setVoucherError(null);
      const response = await voucherService.getVouchers();
      if (response && response.$values) {
        // Filter active vouchers that meet the minimum order amount
        const activeVouchers = response.$values.filter(
          voucher => 
            voucher.status === 'Active' && 
            voucher.quantity > 0 && 
            order.totalAmount >= voucher.minOrderAmount
        );
        setVouchers(activeVouchers);
      } else {
        setVouchers([]);
      }
    } catch (error) {
      console.error('Error fetching vouchers:', error);
      setVoucherError('Failed to load vouchers. Please try again later.');
    } finally {
      setVoucherLoading(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddressDialogOpen = () => {
    setTempDeliveryAddress(deliveryAddress);
    setTempRecipientName(recipientName);
    setTempPhoneNumber(phoneNumber);
    setAddressDialogOpen(true);
  };

  const handleAddressDialogClose = () => {
    setAddressDialogOpen(false);
  };

  const handleVoucherDialogOpen = () => {
    fetchVouchers();
    setVoucherDialogOpen(true);
  };

  const handleVoucherDialogClose = () => {
    setVoucherDialogOpen(false);
  };

  const handleConfirmAddressChange = async () => {
    // Update the delivery address
    setDeliveryAddress(tempDeliveryAddress);
    setRecipientName(tempRecipientName);
    setPhoneNumber(tempPhoneNumber);
    
    // Here you would typically call an API to update the order's delivery address
    // For example:
    // try {
    //   await orderService.updateOrderAddress(order.orderId, tempDeliveryAddress);
    // } catch (error) {
    //   console.error('Error updating address:', error);
    // }
    
    // Close the dialog
    handleAddressDialogClose();
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleConfirmPaymentMethod = () => {
    // Here you would typically handle saving the payment method
    handleClose();
  };

  const handleVoucherSelect = (voucher) => {
    setSelectedVoucher(voucher);
  };

  const handleApplyVoucher = async () => {
    if (!selectedVoucher || !order) return;

    try {
      // Call API to apply voucher to order
      await orderService.applyvoucher(order.orderId, selectedVoucher.voucherId);
      
      // Update order with voucher
      const updatedOrder = await orderService.getOrderById(order.orderId);
      setOrder(updatedOrder);
      setVoucherApplied(true);
      
      // Close the dialog
      handleVoucherDialogClose();
    } catch (error) {
      console.error('Error applying voucher:', error);
      setVoucherError('Failed to apply voucher. Please try again later.');
    }
  };

  const handlePlaceOrder = async () => {
    try {
      if (order && order.orderId) {
        // Call API to confirm payment
        //max 30 character for delivery address
        await orderService.confirmpayment(order.orderId, paymentMethod, deliveryAddress.substring(0, 30));
        setThankYouDialogOpen(true);
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
      setError('Failed to place order. Please try again later.');
    }
  };

  const handleThankYouDialogClose = () => {
    setThankYouDialogOpen(false);
    // Redirect to home page
    navigate('/');
  };

  // Calculate discount amount
  const calculateDiscount = () => {
    if (!order) return 0;
    
    if (order.voucher) {
      return order.totalAmount * order.voucher.discountPercent / 100;
    } else if (selectedVoucher && voucherApplied) {
      return order.totalAmount * selectedVoucher.discountPercent / 100;
    }
    
    return 0;
  };

  // Calculate final amount
  const calculateFinalAmount = () => {
    if (!order) return 0;
    
    const shippingFee = 30000;
    const discount = calculateDiscount();
    
    return order.totalAmount + shippingFee - discount;
  };

  if (!order && !loading && !orderId) {
    return (
      <Box sx={{ bgcolor: "#fff176", minHeight: "100vh", width: '100vw' }}>
        <Header />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
          <Typography variant="h5" sx={{ mb: 3 }}>Không có đơn hàng nào để thanh toán</Typography>
          <Button 
            variant="contained" 
            onClick={() => navigate('/cart')}
            sx={{ 
              backgroundColor: 'darkgreen', 
              color: 'white', 
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#005000',
              }
            }}
          >
            Quay lại giỏ hàng
          </Button>
        </Box>
      </Box>
    );
  }

  if (!order && !loading) {
    return (
      <Box sx={{ bgcolor: "#fff176", minHeight: "100vh", width: '100vw' }}>
        <Header />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
          <Typography variant="h6">Không tìm thấy đơn hàng</Typography>
        </Box>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: "#fff176" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: "#fff176" }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#fff176", minHeight: "100vh", width: '100vw' }}>
      <Header />
      <div className="checkout-container">
        <div className="grid-container">
          <div className="left-column">
            <div className="address-section">
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  Địa chỉ nhận hàng
                </Typography>
                <Button 
                  variant="text" 
                  size="large" 
                  sx={{ 
                    textTransform: 'none', 
                    color: 'green', 
                    fontWeight: 'bold' 
                  }}
                  onClick={handleAddressDialogOpen}
                >
                  Thay đổi
                </Button>
              </Box>
              <p>{recipientName} - {phoneNumber}</p>
              <p>{deliveryAddress}</p>
              <p>{userEmail}</p>
            </div>
            
            <div className="payment-method">
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  Hình thức thanh toán
                </Typography>
                <Button 
                  variant="text" 
                  size="large" 
                  sx={{ 
                    textTransform: 'none', 
                    color: 'green', 
                    fontWeight: 'bold' 
                  }}
                  onClick={handleClickOpen}
                >
                  Chọn hình thức
                </Button>
              </Box>
              <p>{paymentMethod}</p>
            </div>
            
            <div className="discount-code">
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  Mã giảm giá
                </Typography>
                <Button 
                  variant="text" 
                  size="large" 
                  sx={{ 
                    textTransform: 'none', 
                    color: 'green', 
                    fontWeight: 'bold' 
                  }}
                  onClick={handleVoucherDialogOpen}
                  disabled={voucherApplied}
                >
                  {voucherApplied ? 'Đã áp dụng' : 'Nhập mã giảm giá'}
                </Button>
              </Box>
              {(order.voucher || (selectedVoucher && voucherApplied)) && (
                <Box sx={{ mt: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Mã giảm giá: {order.voucher ? order.voucher.voucherName : selectedVoucher.voucherName}
                  </Typography>
                  <Typography variant="body2">
                    Giảm {order.voucher ? order.voucher.discountPercent : selectedVoucher.discountPercent}% cho đơn hàng
                  </Typography>
                </Box>
              )}
            </div>
          </div>
          
          <div className="right-column">
            <Paper elevation={0} sx={{ bgcolor: '#ffffff', color: 'black', p: 3, borderRadius: 1 }}>
              <Typography variant="h6" sx={{ mb: 3, color: 'darkgreen', fontWeight: 'bold', fontSize: '1.2rem' }}>
                Đơn hàng
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography>Tạm tính:</Typography>
                <Typography sx={{ color: '#ff6b6b', fontWeight: 'bold' }}>
                  {order.totalAmount?.toLocaleString()} ₫
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography>Giảm giá:</Typography>
                <Typography sx={{ color: '#ff6b6b', fontWeight: 'bold' }}>
                  {`-${calculateDiscount().toLocaleString()} ₫`}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography>Phí vận chuyển:</Typography>
                <Typography sx={{ color: '#ff6b6b', fontWeight: 'bold' }}>
                  30.000 ₫
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography>Thành tiền:</Typography>
                <Typography sx={{ color: '#ff6b6b', fontWeight: 'bold' }}>
                  {calculateFinalAmount().toLocaleString()} ₫
                </Typography>
              </Box>
              
              <Button 
                variant="contained" 
                fullWidth 
                sx={{ 
                  mt: 2, 
                  backgroundColor: 'darkgreen', 
                  color: 'white', 
                  fontWeight: 'bold',
                  padding: '10px',
                  '&:hover': {
                    backgroundColor: '#005000',
                  }
                }}
                onClick={handlePlaceOrder}
                disabled={order.orderStatus === 'Paid'}
              >
                {order.orderStatus === 'Paid' ? 'Đã thanh toán' : 'Đặt hàng'}
              </Button>
            </Paper>
          </div>
        </div>
        
        <Paper elevation={0} sx={{ bgcolor: '#ffffff', color: 'black', p: 3, borderRadius: 1, mt: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'darkgreen', fontWeight: 'bold', fontSize: '1.2rem' }}>
            Thông tin kiện hàng
          </Typography>
          <Typography sx={{ mb: 2 }}>Giao trong 48 giờ</Typography>
          
          {order?.items?.$values && order.items.$values && order.items.$values.map((item) => (
            <Box key={item.orderItemId} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              {/* Product Image */}
              <Box sx={{ width: '70px', height: '70px', mr: 2 }}>
                <img 
                  src={item.product?.imgUrl ? `https://klairscosmetics.com/wp-content/uploads/2017/04/${item.product.imgUrl}.jpg` : "https://klairscosmetics.com/wp-content/uploads/2017/04/supple-toner-1.jpg"} 
                  // alt={item.product?.productName || "Product"} 
                  alt="Product"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} 
                />
                <Box 
                  sx={{ 
                    position: 'relative', 
                    top: '-65px', 
                    left: '0', 
                    backgroundColor: '#ff6b6b', 
                    color: 'white', 
                    padding: '2px 4px', 
                    borderRadius: '2px',
                    fontSize: '10px',
                    width: 'fit-content'
                  }}
                >
                  -20%
                </Box>
              </Box>
              
              {/* Product Info */}
              <Box sx={{ flex: 1, ml: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                  {item.product?.brand || "Klairs"}
                </Typography>
                <Typography variant="body2">
                  {item?.productName || "Nước Hoa Hồng Klairs Không Mùi Cho Da Nhạy Cảm 180ml"}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey', fontSize: '0.8rem' }}>
                  {item.product?.capacity?.split(',')[0] || "180ml"}
                </Typography>
              </Box>
              
              {/* Price & Quantity */}
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: 2 }}>
                <Typography sx={{ mr: 1 }}>{item?.quantity}</Typography>
                <Typography sx={{ fontWeight: 'bold', mr: 1 }}>×</Typography>
                <Typography sx={{ fontWeight: 'bold', color: '#ff6b6b' }}>
                  {item?.price?.toLocaleString()} ₫
                </Typography>
              </Box>
            </Box>
          ))}
        </Paper>
      </div>

      {/* Payment Method Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: 'darkgreen', fontWeight: 'bold' }}>
          Chọn hình thức thanh toán
        </DialogTitle>
        <DialogContent>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="payment-method"
              name="payment-method"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <FormControlLabel 
                value="Thanh toán khi nhận hàng (COD)" 
                control={<Radio />} 
                label="Thanh toán khi nhận hàng (COD)" 
              />
              <FormControlLabel 
                value="Thanh toán ví VNPAY" 
                control={<Radio />} 
                label="Thanh toán ví VNPAY" 
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: 'gray' }}>
            Hủy
          </Button>
          <Button onClick={handleConfirmPaymentMethod} sx={{ color: 'green', fontWeight: 'bold' }}>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>

      {/* Address Change Dialog */}
      <Dialog 
        open={addressDialogOpen} 
        onClose={handleAddressDialogClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ color: 'darkgreen', fontWeight: 'bold' }}>
          Thay đổi địa chỉ nhận hàng
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Họ và tên người nhận"
              fullWidth
              margin="normal"
              value={tempRecipientName}
              onChange={(e) => setTempRecipientName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Số điện thoại"
              fullWidth
              margin="normal"
              value={tempPhoneNumber}
              onChange={(e) => setTempPhoneNumber(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Địa chỉ nhận hàng"
              fullWidth
              multiline
              rows={3}
              margin="normal"
              value={tempDeliveryAddress}
              onChange={(e) => setTempDeliveryAddress(e.target.value)}
              placeholder="Nhập địa chỉ đầy đủ (số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố)"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddressDialogClose} sx={{ color: 'gray' }}>
            Hủy
          </Button>
          <Button onClick={handleConfirmAddressChange} sx={{ color: 'green', fontWeight: 'bold' }}>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>

      {/* Voucher Dialog */}
      <Dialog
        open={voucherDialogOpen}
        onClose={handleVoucherDialogClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ color: 'darkgreen', fontWeight: 'bold' }}>
          Chọn mã giảm giá
        </DialogTitle>
        <DialogContent>
          {voucherLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
              <CircularProgress size={30} />
            </Box>
          ) : voucherError ? (
            <Alert severity="error" sx={{ my: 2 }}>{voucherError}</Alert>
          ) : vouchers.length === 0 ? (
            <Box sx={{ my: 2 }}>
              <Typography>Không có mã giảm giá nào phù hợp với đơn hàng của bạn.</Typography>
            </Box>
          ) : (
            <List sx={{ width: '100%' }}>
              {vouchers.map((voucher) => (
                <Box key={voucher.voucherId}>
                  <ListItem 
                    button 
                    selected={selectedVoucher && selectedVoucher.voucherId === voucher.voucherId}
                    onClick={() => handleVoucherSelect(voucher)}
                    sx={{ 
                      borderRadius: 1,
                      mb: 1,
                      border: '1px solid #e0e0e0',
                      '&.Mui-selected': {
                        backgroundColor: '#e8f5e9',
                        border: '1px solid #4caf50',
                      }
                    }}
                  >
                    <Radio
                      checked={selectedVoucher && selectedVoucher.voucherId === voucher.voucherId}
                      onChange={() => handleVoucherSelect(voucher)}
                    />
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'darkgreen' }}>
                          {voucher.voucherName}
                        </Typography>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2">{voucher.description}</Typography>
                          <Typography variant="body2" sx={{ color: '#ff6b6b', fontWeight: 'bold' }}>
                            Giảm {voucher.discountPercent}% - Đơn tối thiểu {voucher.minOrderAmount.toLocaleString()}₫
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'gray' }}>
                            HSD: {new Date(voucher.endDate).toLocaleDateString('vi-VN')}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  <Divider sx={{ my: 1 }} />
                </Box>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleVoucherDialogClose} sx={{ color: 'gray' }}>
            Hủy
          </Button>
          <Button 
            onClick={handleApplyVoucher} 
            sx={{ color: 'green', fontWeight: 'bold' }}
            disabled={!selectedVoucher || voucherLoading}
          >
            Áp dụng
          </Button>
        </DialogActions>
      </Dialog>

      {/* Thank You Dialog */}
      <Dialog
        open={thankYouDialogOpen}
        onClose={handleThankYouDialogClose}
        aria-labelledby="thank-you-dialog-title"
        aria-describedby="thank-you-dialog-description"
      >
        <DialogTitle id="thank-you-dialog-title" sx={{ color: 'darkgreen', fontWeight: 'bold' }}>
          Cảm ơn bạn đã đặt hàng
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="thank-you-dialog-description">
            Cảm ơn bạn đã tin tưởng và mua hàng. Chúng tôi rất hân hạnh phục vụ bạn cho những lần kế tiếp.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Checkout;
