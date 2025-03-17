import React from 'react';
import { Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Typography, Container } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Info, Policy, Assignment, Help, Phone } from '@mui/icons-material';
import footerImage from '/images/footerSp.webp';
import { useNavigate } from 'react-router-dom';

const Return = () => {
  const navigate = useNavigate();

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
                      <ListItem button key={item.text} onClick={item.action}>
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
                CHÍNH SÁCH ĐỔI TRẢ
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Chúng tôi cam kết cung cấp sản phẩm chất lượng và dịch vụ tốt nhất cho khách hàng. Nếu bạn không hài lòng với sản phẩm đã mua, bạn có thể yêu cầu đổi trả trong vòng 30 ngày kể từ ngày nhận hàng.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 1 }}>
                1. Điều kiện đổi trả:
              </Typography>
              <ul>
                <li>Sản phẩm còn nguyên tem, mác và chưa qua sử dụng.</li>
                <li>Hóa đơn mua hàng còn giữ lại.</li>
              </ul>
              
              <Typography variant="body1" sx={{ mb: 1, mt: 2 }}>
                2. Quy trình đổi trả:
              </Typography>
              <ul>
                <li>Liên hệ với bộ phận chăm sóc khách hàng qua số điện thoại hoặc email.</li>
                <li>Gửi sản phẩm về địa chỉ của chúng tôi kèm theo hóa đơn.</li>
                <li>Chúng tôi sẽ kiểm tra và xác nhận tình trạng sản phẩm.</li>
                <li>Tiến hành hoàn tiền hoặc đổi sản phẩm mới theo yêu cầu của bạn.</li>
              </ul>
              
              <Typography variant="body1" sx={{ mb: 1, mt: 2 }}>
                3. Thời gian xử lý:
              </Typography>
              <ul>
                <li>Thời gian xử lý yêu cầu đổi trả là từ 5-7 ngày làm việc.</li>
                <li>Chúng tôi sẽ thông báo cho bạn qua email hoặc điện thoại khi yêu cầu của bạn được xử lý.</li>
              </ul>
              
              <Typography variant="body1" sx={{ mb: 1, mt: 2 }}>
                4. Lưu ý:
              </Typography>
              <ul>
                <li>Chúng tôi không chấp nhận đổi trả đối với sản phẩm đã qua sử dụng hoặc không còn nguyên vẹn.</li>
                <li>Chi phí vận chuyển cho việc đổi trả sẽ do khách hàng chịu trách nhiệm.</li>
              </ul>
              
              <Typography variant="body1" sx={{ mb: 1, mt: 2 }}>
                5. Chính sách hoàn tiền:
              </Typography>
              <ul>
                <li>Hoàn tiền sẽ được thực hiện qua phương thức thanh toán ban đầu.</li>
                <li>Thời gian hoàn tiền có thể mất từ 5-10 ngày làm việc tùy thuộc vào ngân hàng.</li>
              </ul>
              
              <Typography variant="body1" sx={{ mb: 1, mt: 2 }}>
                6. Đối với sản phẩm lỗi:
              </Typography>
              <ul>
                <li>Chúng tôi sẽ chịu trách nhiệm hoàn toàn cho các sản phẩm bị lỗi do nhà sản xuất.</li>
                <li>Khách hàng có thể yêu cầu đổi sản phẩm mới hoặc hoàn tiền.</li>
              </ul>
              
              <Typography variant="body1" sx={{ mb: 1, mt: 2 }}>
                7. Đối với sản phẩm không đúng mô tả:
              </Typography>
              <ul>
                <li>Khách hàng có quyền yêu cầu đổi sản phẩm hoặc hoàn tiền nếu sản phẩm không đúng với mô tả trên website.</li>
              </ul>
              
              <Typography variant="body1" sx={{ mb: 1, mt: 2 }}>
                8. Thông tin liên hệ:
              </Typography>
              <ul>
                <li>Để biết thêm thông tin chi tiết về chính sách đổi trả, vui lòng liên hệ với chúng tôi qua số điện thoại hoặc email.</li>
              </ul>
              
              <Typography variant="body1" sx={{ mb: 1, mt: 2 }}>
                9. Thay đổi chính sách:
              </Typography>
              <ul>
                <li>Chúng tôi có quyền thay đổi chính sách đổi trả mà không cần thông báo trước.</li>
              </ul>
              
              <Typography variant="body1" sx={{ mb: 1, mt: 2 }}>
                10. Cam kết của chúng tôi:
              </Typography>
              <ul>
                <li>Chúng tôi cam kết mang đến sự hài lòng cho khách hàng và sẽ nỗ lực hết mình để giải quyết mọi vấn đề phát sinh.</li>
              </ul>
              
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Return;