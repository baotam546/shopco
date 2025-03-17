import React, { useState } from 'react';
import { Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Typography, Container } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Info, Policy, Assignment, Help, Phone } from '@mui/icons-material';
import footerImage from '/images/footerSp.webp';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState('intro');

  const menuItems = [
    {
      title: "THÔNG TIN CÔNG TY",
      items: [
        { text: 'Giới thiệu', icon: <Info />, action: () => navigate('/intro'), active: false },
        { text: 'Chính sách bảo mật', icon: <Policy />, action: () => navigate('/policy'), active: false },
        { text: 'Điều khoản dịch vụ', icon: <Assignment />, action: () => navigate('/term'), active: false },
      ],
    },
    {
      title: "HỖ TRỢ KHÁCH HÀNG",
      items: [
        { text: 'Hướng dẫn mua hàng', icon: <Help />, action: () => navigate('/buy'), active: false },
        { text: 'Góp ý - Khiếu nại', icon: <Phone />, action: () => navigate('/complaint'), active: false },
        { text: 'Chính sách đổi trả', icon: <Assignment />, action: () => navigate('/return'), active: false },
      ],
    },
  ];

  const renderContent = () => {
    switch (selectedContent) {
      case 'intro':
        return (
          <Typography variant="body1" sx={{ mb: 2 }}>
            'Chăm sóc làn da không chỉ là một bước quan trọng trong quy trình làm đẹp, mà còn là một hành trình yêu thương bản thân. Tại BEAUTY COSMETICS, chúng tôi mang đến những sản phẩm skincare chất lượng cao như sữa rửa mặt, nước tẩy trang, serum, giúp bạn dưỡng da sạch sâu và khỏe mạnh từ bên trong.'
          </Typography>
        );
      case 'policy':
        return (
          <Typography variant="body1" sx={{ mb: 2 }}>
            'Với sứ mệnh mang lại vẻ đẹp tự nhiên và làn da sáng khỏe, chúng tôi cung cấp các sản phẩm skincare an toàn, hiệu quả từ các thương hiệu uy tín. Cam kết 100% giá trị thật – chất lượng thật, để bạn yên tâm trong mỗi lần sử dụng.'
          </Typography>
        );
      case 'term':
        return (
          <Typography variant="body1" sx={{ mb: 2 }}>
            'Khám phá bộ sản phẩm skincare đa dạng của chúng tôi, từ sữa rửa mặt nhẹ dịu, nước tẩy trang làm sạch sâu, đến serum dưỡng da chuyên sâu, giúp bạn chăm sóc làn da một cách hoàn hảo mỗi ngày. Chúng tôi cam kết mang lại làn da sáng khỏe, mềm mịn và đều màu chỉ sau một thời gian ngắn.'
          </Typography>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ bgcolor: "#f0f0f0", minHeight: "100vh", width:'99vw' }}>
      <Header />
      {/* <img src={footerImage} alt="Footer" style={{ width: '100%', height: 'auto' }} /> */}
      <Container maxWidth="lg" sx={{ my: 4, px: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: "#f5f5f5" }}>
              {menuItems.map((section) => (
                <Box key={section.title} sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                    {section.title}
                  </Typography>
                  <List>
                    {section.items.map((item) => (
                      <ListItem 
                        button 
                        key={item.text} 
                        onClick={() => {
                          item.action();
                          setSelectedContent(item.text === 'Giới thiệu' ? 'intro' : item.text === 'Chính sách bảo mật' ? 'policy' : item.text === 'Điều khoản dịch vụ' ? 'term' : 'otherContent');
                        }}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={0} sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                GIỚI THIỆU
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                'Chăm sóc làn da không chỉ là một bước quan trọng trong quy trình làm đẹp, mà còn là một hành trình yêu thương bản thân. Tại BEAUTY COSMETICS, chúng tôi mang đến những sản phẩm skincare chất lượng cao như sữa rửa mặt, nước tẩy trang, serum, giúp bạn dưỡng da sạch sâu và khỏe mạnh từ bên trong.'
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                'Với sứ mệnh mang lại vẻ đẹp tự nhiên và làn da sáng khỏe, chúng tôi cung cấp các sản phẩm skincare an toàn, hiệu quả từ các thương hiệu uy tín. Cam kết 100% giá trị thật – chất lượng thật, để bạn yên tâm trong mỗi lần sử dụng.'
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                'Khám phá bộ sản phẩm skincare đa dạng của chúng tôi, từ sữa rửa mặt nhẹ dịu, nước tẩy trang làm sạch sâu, đến serum dưỡng da chuyên sâu, giúp bạn chăm sóc làn da một cách hoàn hảo mỗi ngày. Chúng tôi cam kết mang lại làn da sáng khỏe, mềm mịn và đều màu chỉ sau một thời gian ngắn.'
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                'Tại BEAUTY COSMETICS, mỗi sản phẩm skincare đều được chọn lọc kỹ càng, đảm bảo chất lượng, không gây kích ứng và phù hợp với mọi loại da. Chúng tôi cam kết cung cấp những sản phẩm đáng tin cậy với mức giá hợp lý, giúp bạn có làn da như mơ mà không phải lo lắng về chất lượng.'
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                'Chúng tôi không chỉ bán mỹ phẩm, mà còn bán sự tự tin cho bạn. Mỗi sản phẩm là kết quả của nghiên cứu và cam kết về chất lượng, từ sữa rửa mặt làm sạch nhẹ nhàng đến serum dưỡng da cao cấp, tất cả đều mang đến hiệu quả lâu dài và giá trị thực sự cho làn da của bạn.'
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                'Chăm sóc sắc đẹp là hành trình dài, và chúng tôi đồng hành cùng bạn. Các sản phẩm skincare tại BEAUTY COSMETICS không chỉ giúp làm sạch và dưỡng ẩm, mà còn nuôi dưỡng làn da từ sâu bên trong, mang lại sự mềm mịn, sáng khỏe và đầy sức sống.'
              </Typography>

            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Intro;