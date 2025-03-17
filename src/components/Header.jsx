import { 
  AccountCircle, ShoppingCart, Search, Edit, Phone, 
  Person, ShoppingBag, HeadsetMic, ExitToApp 
} from "@mui/icons-material";
import {
  AppBar, IconButton, InputBase, Toolbar, Typography, 
  Box, Badge, Avatar, Button, Container, Paper, Divider, 
  Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import QuizTest from '../pages/Quiz/QuizTest';
import orderService from '../apis/orderService';


const Header = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [open, setOpen] = useState(false);
  const isMounted = useRef(true);

  // Update cart count from orderService
  useEffect(() => {
    // Mark component as mounted
    isMounted.current = true;
    
    const updateCartCount = async () => {
      try {
        // Get user ID from localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (user && user.userId) {
          // Fetch current cart directly using getCurrentCart
          const response = await orderService.getCurrentCart(user.userId);
          
          if (response && response.items && response.items.$values) {
            // Calculate total quantity from order items
            const count = response.items.$values.reduce(
              (total, item) => total + item.quantity, 0
            );
            if (isMounted.current) {
              setCartItemCount(count);
            }
          } else {
            if (isMounted.current) {
              setCartItemCount(0);
            }
          }
        } else {
          // Fallback to localStorage for non-authenticated users
          const cart = JSON.parse(localStorage.getItem('cart') || '[]');
          const count = cart.reduce((total, item) => total + item.quantity, 0);
          if (isMounted.current) {
            setCartItemCount(count);
          }
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
        // Fallback to localStorage on error
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        if (isMounted.current) {
          setCartItemCount(count);
        }
      }
    };

    // Initial count
    updateCartCount();

    // Listen for storage events to update count when cart changes
    window.addEventListener('storage', updateCartCount);
    
    // Custom event for when cart is updated within the same window
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      isMounted.current = false;
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Thêm state mới cho dialog yêu cầu đăng nhập
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  const [authDialogMessage, setAuthDialogMessage] = useState("");
  
  // Kiểm tra trạng thái đăng nhập
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);

  }, []);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    console.log("Searching:", searchValue);
    
    if (searchValue.trim()) {
        navigate(`/search?name=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const handleAccountMenuOpen = (event) => {
    if (isAuthenticated) {
      setAccountMenuAnchor(event.currentTarget);
    } else {
      showAuthRequiredDialog("tài khoản");
    }
  };

  const handleAccountMenuClose = () => setAccountMenuAnchor(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    handleAccountMenuClose();
    window.location.href = "/";
  };

  const accountMenuItems = [
    { icon: <Person fontSize="small" />, text: "Thông tin tài khoản", path: "/account" },
    { icon: <ShoppingBag fontSize="small" />, text: "Đơn hàng của tôi", path: "/orders" },
    { icon: <HeadsetMic fontSize="small" />, text: "Hỗ trợ", path: "/support" },
    { 
      icon: <ExitToApp fontSize="small" />, 
      text: "Đăng xuất", 
      onClick: handleLogout
    }
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Hàm mới để hiển thị dialog yêu cầu đăng nhập
  const showAuthRequiredDialog = (feature) => {
    setAuthDialogMessage(`Bạn cần đăng nhập để sử dụng ${feature}`);
    setOpenAuthDialog(true);
  };

  // Đóng dialog yêu cầu đăng nhập
  const handleAuthDialogClose = () => {
    setOpenAuthDialog(false);
  };

  // Chuyển hướng đến trang đăng nhập
  const handleGoToLogin = () => {
    setOpenAuthDialog(false);
    navigate("/login");
  };

  const handleQuizClick = () => {
    if (isAuthenticated) {
      handleClickOpen();
    } else {
      showAuthRequiredDialog("tính năng Quiz");
    }
  };

  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate("/cart");
    } else {
      showAuthRequiredDialog("giỏ hàng");
    }
  };

  const handleSupportClick = () => {
    if (isAuthenticated) {
      navigate("/customer-support");
    } else {
      showAuthRequiredDialog("hỗ trợ khách hàng");
    }
  };

  const handleAccountMenuItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.path) {
      navigate(item.path);
      handleAccountMenuClose();
    }
  };

  return (
    <>
      <Box sx={{ bgcolor: "black", color: "white", py: 1 }}>
        <Container>
          <Typography variant="body2" align="center">
            Miễn phí vận chuyển cho đơn hàng trên 500K
          </Typography>
        </Container>
      </Box>

      <AppBar position="static" sx={{ bgcolor: "white", color: "black", boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 2, gap: 2 }}>
            <Box sx={{ flexShrink: 0 }}>
              <IconButton onClick={() => navigate("/")} sx={{ p: 0 }}>
                <Avatar
                  alt="LOGO"
                  src="/images/logo.png"
                  variant="square"
                  sx={{ width: 90, height: 90, borderRadius: 100 }}
                />
              </IconButton>
            </Box>

            <Paper
              component="form"
              onSubmit={handleSearchSubmit}
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                mx: 4,
                px: 2,
                py: 0.5,
                borderRadius: 2,
                bgcolor: "#f5f5f5"
              }}
            >
              <InputBase
                placeholder="Tìm kiếm sản phẩm..."
                sx={{ flex: 1, ml: 1 }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <IconButton type="submit" sx={{ p: "10px" }}>
                <Search />
              </IconButton>
            </Paper>

            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Button
                startIcon={<Edit />}
                sx={{
                  color: "text.primary",
                  "&:hover": { bgcolor: "action.hover" }
                }}
                onClick={handleQuizClick}
              >
                Quiz
              </Button>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton color="inherit" onClick={handleSupportClick}>
                  <Phone />
                </IconButton>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Hỗ trợ khách hàng
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    0956497123
                  </Typography>
                </Box>
              </Box>

              <IconButton color="inherit" onClick={handleCartClick}>
                <Badge badgeContent={cartItemCount} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>

              <Button
                startIcon={<AccountCircle />}
                sx={{ color: "text.primary", "&:hover": { bgcolor: "action.hover" } }}
                onClick={handleAccountMenuOpen}
              >
                Tài khoản
              </Button>

              <Menu
                anchorEl={accountMenuAnchor}
                open={Boolean(accountMenuAnchor)}
                onClose={handleAccountMenuClose}
                PaperProps={{
                  sx: { width: 200, mt: 1 }
                }}
              >
                {accountMenuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    onClick={() => handleAccountMenuItemClick(item)}
                    sx={{ display: "flex", alignItems: "center", gap: 1, py: 1 }}
                  >
                    {item.icon}
                    <Typography>{item.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>

          <Divider />

          <Navigation />
        </Container>
      </AppBar>

      {/* Dialog cho Quiz */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Quiz</DialogTitle>
        <DialogContent>
          <QuizTest />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog yêu cầu đăng nhập mới */}
      <Dialog open={openAuthDialog} onClose={handleAuthDialogClose}>
        <DialogTitle>Yêu cầu đăng nhập</DialogTitle>
        <DialogContent>
          <Typography>{authDialogMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAuthDialogClose} color="primary">
            Hủy
          </Button>
          <Button 
            onClick={handleGoToLogin} 
            color="primary" 
            variant="contained"
            autoFocus
          >
            Đăng nhập
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;
