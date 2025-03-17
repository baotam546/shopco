
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Breadcrumbs,
  Link,
  useTheme
} from '@mui/material';
import { Home, LocalPhone, LocationOn, Email, AccessTime, Send } from '@mui/icons-material';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner';

const CustomerSupport = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Cảm ơn bạn đã gửi thắc mắc. Chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể.');
  };

  return (
    <Box sx={{ bgcolor: "#f0f0f0", minHeight: "100vh", width: "99vw", overflowX: "hidden" }}>

      <Header />
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3, ml: 10}}>
          <Link underline="hover" color="inherit" href="/" display="flex" alignItems="center">
            <Home sx={{ mr: 0.5 }} fontSize="inherit" />
            Trang chủ
          </Link>
          <Typography color="text.primary">Hỗ trợ khách hàng</Typography>
        </Breadcrumbs>
      <Banner />
      <Container>
        

        <Grid container spacing={4} >
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3}}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ borderBottom: `2px solid ${theme.palette.primary.main}`, pb: 1, mb: 3 }}>
                THÔNG TIN LIÊN HỆ
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <LocationOn sx={{ color: 'text.secondary', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle1" component="span" fontWeight="bold">
                    Địa Chỉ:
                  </Typography>
                  <Typography variant="body1" component="span" sx={{ ml: 1 }}>
                    Khu công nghệ cao- quận 9
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <LocalPhone sx={{ color: 'text.secondary', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle1" component="span" fontWeight="bold">
                    Điện thoại:
                  </Typography>
                  <Typography variant="body1" component="span" sx={{ ml: 1 }}>
                    0956497123
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <Email sx={{ color: 'text.secondary', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle1" component="span" fontWeight="bold">
                    Email:
                  </Typography>
                  <Typography variant="body1" component="span" sx={{ ml: 1 }}>
                    beautycomsmetics@gmail.vn
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <AccessTime sx={{ color: 'text.secondary', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle1" component="span" fontWeight="bold">
                    GIỜ MỞ CỬA:
                  </Typography>
                  <Typography variant="body1" component="p" sx={{ mt: 1 }}>
                    Từ 9:00 - 21:30 tất cả các ngày trong tuần (bao gồm cả các ngày lễ, ngày Tết).
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ mb: 3 }}>
                Gửi thắc mắc cho chúng tôi
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
                Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể.
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}><TextField fullWidth label="Tên của bạn" name="name" value={formData.name} onChange={handleChange} required variant="outlined" /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="Email của bạn" name="email" type="email" value={formData.email} onChange={handleChange} required variant="outlined" /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="Số điện thoại của bạn" name="phone" value={formData.phone} onChange={handleChange} required variant="outlined" /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="Nội dung" name="message" value={formData.message} onChange={handleChange} required multiline rows={4} variant="outlined" /></Grid>
                  <Grid item xs={12}><Button type="submit" variant="contained" color="primary" fullWidth size="large" startIcon={<Send />} sx={{ mt: 2 }}>Gửi cho chúng tôi</Button></Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default CustomerSupport;
