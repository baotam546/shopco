import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import backgroundImage from '../assets/img/bg.png';

const Banner = () => {
  return (
    <Box 
      sx={{
        textAlign: 'left', 
        py: 5, 
        bgcolor: '#f5f5f5', 
        width: '100%', 
        height: "600px", 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
      }}
    >
      <Typography variant="h2" fontWeight="bold" style={{padding:50, width:"35%", color:"black"}}>TÌM SẢN PHẨM PHÙ HỢP VỚI PHONG CÁCH CỦA BẠN</Typography>
      <Typography variant="body1" color="textSecondary" style={{paddingLeft:50, width:"35%", color:"#000000", fontFamily:"Satoshi"}}>
      Khám phá bộ sưu tập mỹ phẩm đa dạng của chúng tôi, được chế tác tỉ mỉ để tôn vinh vẻ đẹp tự nhiên và phong cách cá nhân của bạn.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} style={{borderRadius:50, backgroundColor:"black", marginLeft: 100, paddingLeft:30, paddingRight:30, paddingTop:15, paddingBottom: 15}}>Mua ngay</Button>
      <Grid container spacing={2} style={{paddingLeft:50, width:"35%", color:"#000000", fontFamily:"Satoshi"}} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold">200+</Typography>
          <Typography variant="body1" color="textSecondary">Thương hiệu quốc tế</Typography>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold">1,000+</Typography>
          <Typography variant="body1" color="textSecondary">Sản phẩm chất lượng cao</Typography>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold">30,000+</Typography>
          <Typography variant="body1" color="textSecondary">Khách hàng hài lòng</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
