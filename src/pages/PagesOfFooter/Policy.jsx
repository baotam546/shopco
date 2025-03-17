import React from 'react';
import { Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Typography, Container } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Info, Policy as PolicyIcon, Assignment, Help, Phone } from '@mui/icons-material';
import footerImage from '/images/footerSp.webp';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "THÔNG TIN CÔNG TY",
      items: [
        { text: 'Giới thiệu', icon: <Info />, action: () => navigate('/intro'), active: false },
        { text: 'Chính sách bảo mật', icon: <PolicyIcon />, action: () => navigate('/policy'), active: false },
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
                CHÍNH SÁCH BẢO MẬT
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Chúng tôi BEAUTY COSMETICS, cam kết bảo vệ thông tin cá nhân của bạn. Chính sách bảo mật này sẽ giúp bạn hiểu rõ cách chúng tôi thu thập, sử dụng và bảo vệ thông tin khi bạn truy cập vào website của chúng tôi. Bạn có thể yên tâm rằng mọi thông tin cá nhân của bạn sẽ được bảo vệ an toàn và chỉ sử dụng cho các mục đích hợp pháp.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                1. Thu Thập Thông Tin Cá Nhân
                Khi bạn sử dụng dịch vụ của chúng tôi, chúng tôi có thể thu thập thông tin cá nhân từ bạn bao gồm nhưng không giới hạn: tên, địa chỉ email, số điện thoại, địa chỉ giao hàng và các thông tin liên quan đến việc thanh toán. Mọi thông tin thu thập được sẽ được sử dụng chỉ để phục vụ việc xử lý đơn hàng và hỗ trợ khách hàng.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                2. Mục Đích Sử Dụng Thông Tin
                Chúng tôi sử dụng thông tin của bạn để:
                <li> Xử lý đơn hàng và giao hàng chính xác.</li>
                <li> Liên lạc với bạn về đơn hàng, các chương trình khuyến mãi hoặc thông báo quan trọng.</li>
                <li> Cải thiện dịch vụ khách hàng và trải nghiệm mua sắm của bạn trên website.</li>
                <li> Gửi thông tin về các sản phẩm mới, chương trình ưu đãi hoặc các khuyến mãi đặc biệt (nếu bạn đồng ý nhận thông tin).</li>
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                3. Bảo Vệ Thông Tin Cá Nhân
                Chúng tôi sử dụng các biện pháp bảo mật hiện đại để bảo vệ thông tin cá nhân của bạn khỏi việc truy cập trái phép, sử dụng hoặc tiết lộ thông tin. Các giao dịch thanh toán sẽ được mã hóa và bảo mật theo tiêu chuẩn công nghệ cao.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                4. Chia Sẻ Thông Tin
                Chúng tôi cam kết không chia sẻ thông tin cá nhân của bạn với bất kỳ bên thứ ba nào, ngoại trừ khi cần thiết để hoàn thành giao dịch (ví dụ: chia sẻ với đơn vị vận chuyển để giao hàng). Các đối tác của chúng tôi cũng cam kết bảo mật thông tin khách hàng.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                5. Quyền Của Bạn
                Bạn có quyền yêu cầu truy cập và chỉnh sửa thông tin cá nhân của mình. Nếu bạn không muốn nhận thông tin khuyến mãi, bạn có thể chọn hủy đăng ký nhận email hoặc thông báo từ chúng tôi bất kỳ lúc nào.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                6. Liên Hệ
                Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này hoặc muốn yêu cầu chỉnh sửa thông tin cá nhân, bạn có thể vào phần tài khoản của mình và chỉnh sửa.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default PrivacyPolicy;