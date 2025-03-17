import Header from '../../components/Header';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Dialog,
  Link,
  Breadcrumbs,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import {
  Home,
  Person,
  Phone,
  Email,
  Facebook,
  Google,
  LocationOn,
  Edit,
  ExitToApp
} from '@mui/icons-material';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer/Footer';
import userService from '../../apis/userService';
import axiosClient from '../../apis/axiosClient';

const Info = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const [open, setOpen] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState(userInfo);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();

    const fetchUserProfile = async () => {
      try {
        const currentUser = userService.getCurrentUser();
        if (!currentUser || !currentUser.userId) {
          navigate('/login');
          return;
        }

        console.log('Fetching profile for userId:', currentUser.userId);
        const response = await userService.getUserProfile(currentUser.userId);
        console.log('API response:', response);
        
        // Kiểm tra nếu component vẫn mounted trước khi cập nhật state
        if (isMounted && response) {
          const newUserInfo = {
            name: response.name || '',
            phone: response.phone || '',
            email: response.email || '',
            address: response.address || '',
          };
          setUserInfo(newUserInfo);
          setUpdatedInfo(newUserInfo);
        } else if (isMounted) {
          console.error('Không nhận được dữ liệu người dùng từ API');
        }
      } catch (error) {
        // Kiểm tra xem lỗi có phải do hủy request không
        if (error.name === 'CanceledError' || error.name === 'AbortError') {
          console.log('Request bị hủy do chuyển trang hoặc request khác:', error.message);
        } else {
          console.error('Lỗi khi lấy thông tin người dùng:', error);
          // Chỉ hiển thị thông báo nếu component vẫn mounted
          if (isMounted) {
            alert('Không thể lấy thông tin người dùng. Vui lòng thử lại sau.');
          }
        }
      }
    };

    fetchUserProfile();

    // Cleanup function để tránh memory leak và hủy request khi unmount
    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [navigate]);

  const handleLogout = () => {
    userService.logout();
    window.location.href = "/";
  };

  const handleOpenDialog = () => {
    // Kiểm tra xem thông tin có thay đổi không
    const isInfoChanged = 
      userInfo.name !== updatedInfo.name ||
      userInfo.phone !== updatedInfo.phone ||
      userInfo.email !== updatedInfo.email ||
      userInfo.address !== updatedInfo.address;
    
    if (!isInfoChanged) {
      alert('Bạn chưa thay đổi thông tin nào!');
      return;
    }
    
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10,11}$/;
    return re.test(String(phone));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo((prev) => ({ ...prev, [name]: value }));
    
    // Validate input
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Email không hợp lệ' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    } else if (name === 'phone') {
      if (value && !validatePhone(value)) {
        setErrors(prev => ({ ...prev, phone: 'Số điện thoại phải có 10-11 chữ số' }));
      } else {
        setErrors(prev => ({ ...prev, phone: '' }));
      }
    }
  };

  const handleSave = async () => {
    try {
      // Validate before saving
      if (errors.email || errors.phone) {
        alert('Vui lòng sửa các lỗi trước khi cập nhật thông tin!');
        return;
      }
      
      // Kiểm tra xem thông tin có thay đổi không
      const isInfoChanged = 
        userInfo.name !== updatedInfo.name ||
        userInfo.phone !== updatedInfo.phone ||
        userInfo.email !== updatedInfo.email ||
        userInfo.address !== updatedInfo.address;
      
      if (!isInfoChanged) {
        alert('Bạn chưa thay đổi thông tin nào!');
        setOpen(false);
        return;
      }
      
      setLoading(true);
      const currentUser = userService.getCurrentUser();
      if (!currentUser || !currentUser.userId) {
        navigate('/login');
        return;
      }

      // Lấy thông tin đầy đủ của người dùng
      const userResponse = await axiosClient.get(`/api/Users/${currentUser.userId}`);
      
      if (!userResponse) {
        throw new Error('Không thể lấy thông tin người dùng');
      }
      
      // Chuẩn bị dữ liệu cần cập nhật - giữ nguyên các trường khác
      const userData = {
        ...userResponse,
        fullName: updatedInfo.name,
        email: updatedInfo.email,
        phone: updatedInfo.phone,
        address: updatedInfo.address
      };
      
      // Gọi API cập nhật thông tin
      const response = await axiosClient.put(`/api/Users/${currentUser.userId}`, userData);
      
      // Kiểm tra phản hồi - với PUT có thể không có dữ liệu mà chỉ có status
      if (response && (response.success || response.status === 200 || response.status === 204)) {
        // Cập nhật localStorage với thông tin mới
        const updatedUser = { 
          ...currentUser, 
          fullName: updatedInfo.name,
          email: updatedInfo.email,
          phone: updatedInfo.phone,
          address: updatedInfo.address
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        
        // Cập nhật state với thông tin mới
        setUserInfo(updatedInfo);
        setOpen(false);
        
        // Hiển thị thông báo thành công
        alert('Cập nhật thông tin thành công!');
      } else {
        throw new Error('Cập nhật thông tin không thành công');
      }
    } catch (error) {
      console.error('Lỗi khi cập nhật thông tin:', error);
      
      // Hiển thị thông báo lỗi cụ thể hơn
      if (error.name === 'CanceledError' || error.name === 'AbortError') {
        alert('Yêu cầu đã bị hủy. Vui lòng thử lại.');
      } else if (error.response && error.response.status) {
        alert(`Có lỗi xảy ra khi cập nhật thông tin! (Mã lỗi: ${error.response.status})`);
      } else {
        alert('Có lỗi xảy ra khi cập nhật thông tin! Vui lòng thử lại sau.');
      }
    } finally {
      setLoading(false);
    }
  };

  const menuItems = [
    { text: 'Thông tin tài khoản', icon: <Person />, active: true, action: () => navigate('/account') },
    { text: 'Đơn hàng của tôi', icon: <Phone />, active: false, action: () => navigate('/orders') },
    { text: 'Hỏi đáp', icon: <Email /> },
    { text: 'Đăng xuất', icon: <ExitToApp />, action: handleLogout },
  ];

  return (
    <Box sx={{ bgcolor: "#f0f0f0", minHeight: "100vh", width:'99vw' }}>
      <Header />
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3, ml: 10}}>
        <Link underline="hover" color="inherit" href="/" display="flex" alignItems="center">
          <Home sx={{ mr: 0.5 }} fontSize="inherit" />
          Trang chủ
        </Link>
        <Typography color="text.primary">Tài khoản</Typography>
      </Breadcrumbs>
      <Banner />
      
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: "#f5f5f5", textAlign: "center" }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
                <Avatar src="/path-to-avatar.jpg" sx={{ width: 50, height: 50, mb: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  {userInfo.name ? `Chào ${userInfo.name}!` : 'Chào bạn!'}
                </Typography>
              </Box>
              <List>
                {menuItems.map((item) => (
                  <ListItem
                    key={item.text}
                    button
                    onClick={item.action ? item.action : null}
                    sx={{
                      borderRadius: 1,
                      mb: 1,
                      bgcolor: item.active ? '#e3f2fd' : 'transparent',
                      '&:hover': { bgcolor: '#e3f2fd' },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={9}>
            <Paper elevation={0} sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                THÔNG TIN TÀI KHOẢN
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Thông tin cá nhân
                  </Typography>
                  <TextField 
                    fullWidth 
                    label="Họ và tên" 
                    name="name" 
                    value={updatedInfo.name} 
                    onChange={handleChange} 
                    margin="dense" 
                    sx={{ mb: 2 }}
                  />
                  <TextField 
                    fullWidth 
                    label="Số điện thoại" 
                    name="phone" 
                    value={updatedInfo.phone} 
                    onChange={handleChange} 
                    margin="dense" 
                    sx={{ mb: 2 }}
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />
                  <TextField 
                    fullWidth 
                    label="Email" 
                    name="email" 
                    value={updatedInfo.email} 
                    onChange={handleChange} 
                    margin="dense" 
                    sx={{ mb: 2 }}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Địa chỉ
                  </Typography>
                  <TextField 
                    fullWidth 
                    label="Địa chỉ" 
                    name="address" 
                    value={updatedInfo.address} 
                    onChange={handleChange} 
                    margin="dense" 
                    multiline
                    rows={3}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Liên kết mạng xã hội
                  </Typography>
                  <Button startIcon={<Facebook />} variant="outlined" sx={{ mr: 2, mb: 2 }}>
                    Facebook
                  </Button>
                  <Button startIcon={<Google />} variant="outlined" sx={{ mb: 2 }}>
                    Google
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleOpenDialog}
                    startIcon={<Edit />}
                    sx={{ mb: 3 }}
                    disabled={loading || !!errors.email || !!errors.phone}
                  >
                    {loading ? 'Đang cập nhật...' : 'Cập nhật thông tin'}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Xác nhận cập nhật</DialogTitle>
        <DialogContent>
          <Typography>
            Bạn có chắc chắn muốn cập nhật thông tin không?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary" disabled={loading}>Hủy</Button>
          <Button 
            onClick={handleSave} 
            color="primary" 
            variant="contained" 
            disabled={loading}
          >
            {loading ? 'Đang cập nhật...' : 'Xác nhận'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Info;
