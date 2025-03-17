import { Box, Button, Container, Typography, Tabs, Tab, Grid, Paper, Avatar, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Person, Phone, Email, ExitToApp } from "@mui/icons-material";
import {Link, Breadcrumbs} from '@mui/material'
import Banner from "../../components/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import userService from "../../apis/userService";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);  
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = () => {
      try {
        const currentUser = userService.getCurrentUser();
        if (currentUser && currentUser.name) {
          setUserName(currentUser.name);
        }
      } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
      }
    };

    fetchUserName();
  }, []);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const menuItems = [
    { text: "Thông tin tài khoản", icon: <Person />, action: () => navigate("/account") },
    { text: "Đơn hàng của tôi", icon: <Phone />, active: true },
    { text: "Hỏi đáp", icon: <Email /> },
    { text: "Đăng xuất", icon: <ExitToApp />, action: handleLogout },
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
                        {userName ? `Chào ${userName}!` : 'Chào bạn!'}
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
       
            <Grid item xs={12} md={9} sx={{ display: "flex", flexDirection: "column" }}>
             <Paper elevation={0} sx={{ flexGrow: 1, p: 3, bgcolor: "white" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                ĐƠN HÀNG CỦA TÔI
              </Typography>
              <Box sx={{ bgcolor: "#f5f5f5", p: 2, borderRadius: 2, mb: 3 }}>
                <Tabs
                  value={tabIndex}
                  onChange={handleTabChange}
                  variant="fullWidth"
                  sx={{ bgcolor: "white", color: "black", borderRadius: 2 }}
                  TabIndicatorProps={{ style: { backgroundColor: "#FF6600" } }}
                >
                  <Tab label="Tất cả" sx={{ color: "black" }} />
                  <Tab label="Đang xử lý" sx={{ color: "black" }} />
                  <Tab label="Đang vận chuyển" sx={{ color: "black" }} />
                  <Tab label="Đã giao" sx={{ color: "black" }} />
                  <Tab label="Đã hủy" sx={{ color: "black" }} />
                </Tabs>
              </Box>
              <Box sx={{ bgcolor: "#f5f5f5", p: 4, borderRadius: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography color="black" variant="h6" sx={{ mb: 2 }}>
                  Bạn chưa có đơn hàng nào
                </Typography>
                <Button variant="contained" color="success" size="large">
                  Tiếp tục mua sắm
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid >
      </Container>
      <Footer />
    </Box>
  );
};

export default Order;
