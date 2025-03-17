import React from 'react';
import { Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Typography, Container } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Info, Policy, Assignment, Help, Phone } from '@mui/icons-material';
import footerImage from '/images/footerSp.webp';
import { useNavigate } from 'react-router-dom';

const Buy = () => {
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
                HƯỚNG DẪN MUA HÀNG
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Chào mừng bạn đến với BEAUTY COSMETICS!!! Để giúp bạn có trải nghiệm mua sắm dễ dàng và thuận tiện, dưới đây là các bước hướng dẫn chi tiết để thực hiện một đơn hàng trên website của chúng tôi.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                1. Truy Cập Website
                Truy cập vào website BEAUTY COSMETICS thông qua trình duyệt web của bạn.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                2. Chọn Sản Phẩm
                Tìm kiếm sản phẩm: Bạn có thể duyệt qua các danh mục sản phẩm trên trang chủ hoặc sử dụng chức năng tìm kiếm để tìm sản phẩm cụ thể như sữa rửa mặt, serum, nước tẩy trang, v.v.
                Xem chi tiết sản phẩm: Nhấn vào sản phẩm bạn quan tâm để xem thông tin chi tiết, giá cả, thành phần, hướng dẫn sử dụng và các đánh giá từ khách hàng khác.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                3. Thêm Sản Phẩm Vào Giỏ Hàng
                Sau khi chọn được sản phẩm phù hợp, bạn có thể điều chỉnh số lượng và nhấn vào nút "Thêm vào giỏ hàng".
                Bạn có thể tiếp tục mua sắm thêm các sản phẩm khác hoặc kiểm tra giỏ hàng bằng cách nhấn vào biểu tượng giỏ hàng ở góc trên bên phải màn hình.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                4. Kiểm Tra Giỏ Hàng
                Sau khi hoàn tất việc chọn sản phẩm, nhấn vào giỏ hàng để kiểm tra lại các sản phẩm bạn đã chọn.
                Kiểm tra lại số lượng, màu sắc và giá trị của đơn hàng.
                Nếu bạn muốn thay đổi sản phẩm hoặc số lượng, bạn có thể thực hiện các thay đổi ngay tại đây.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                5. Thanh Toán
                Điền thông tin giao hàng: Cung cấp đầy đủ thông tin như tên, địa chỉ nhận hàng, số điện thoại và email để chúng tôi có thể giao hàng chính xác.
                Kiểm tra lại đơn hàng: Trước khi thanh toán, bạn có thể kiểm tra lại toàn bộ thông tin đơn hàng, bao gồm sản phẩm, phí vận chuyển và tổng giá trị đơn hàng.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                6. Xác Nhận Đơn Hàng
                Sau khi hoàn tất việc điền thông tin thanh toán và chọn phương thức giao hàng, nhấn "Xác nhận đơn hàng" để hoàn tất quy trình mua sắm.
                Bạn sẽ nhận được một email xác nhận đơn hàng từ chúng tôi, trong đó có thông tin chi tiết về đơn hàng và tình trạng xử lý.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                7. Giao Hàng
                Sau khi đơn hàng được xử lý và xác nhận, chúng tôi sẽ gửi sản phẩm đến địa chỉ bạn đã cung cấp. Thời gian giao hàng sẽ tùy thuộc vào phương thức vận chuyển và khu vực giao hàng.
                Bạn sẽ nhận được thông báo khi đơn hàng đã được gửi đi và có thể theo dõi tình trạng đơn hàng qua email hoặc SMS.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                8. Nhận Hàng và Kiểm Tra
                Khi nhận hàng, bạn vui lòng kiểm tra kỹ sản phẩm và thông tin đơn hàng. Nếu có bất kỳ vấn đề nào về sản phẩm hoặc đơn hàng, hãy liên hệ ngay với chúng tôi để được hỗ trợ.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Buy;