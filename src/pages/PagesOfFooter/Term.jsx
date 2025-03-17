import React from 'react';
import { Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Typography, Container } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Info, Policy, Assignment, Help, Phone } from '@mui/icons-material';
import footerImage from '/images/footerSp.webp';
import { useNavigate } from 'react-router-dom';

const Term = () => {
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
                ĐIỀU KHOẢN DỊCH VỤ
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Chào mừng bạn đến với BEAUTY COSMETICS. Chúng tôi luôn lắng nghe và đánh giá cao mọi ý kiến, góp ý cũng như khiếu nại từ khách hàng để cải thiện sản phẩm và dịch vụ của mình. Vui lòng đọc kỹ các điều khoản dưới đây khi bạn muốn gửi phản hồi hoặc khiếu nại.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                1. Chấp Nhận Điều Khoản Góp Ý - Khiếu Nại
                Khi sử dụng dịch vụ Góp Ý - Khiếu Nại trên website của chúng tôi, bạn đồng ý với các điều khoản này. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng dịch vụ này.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                2. Quy Trình Gửi Góp Ý - Khiếu Nại
                Khi bạn gửi phản hồi, góp ý hoặc khiếu nại, vui lòng cung cấp thông tin chính xác và đầy đủ về sự việc, bao gồm các thông tin như tên, email, mô tả chi tiết về vấn đề. Chúng tôi cam kết sẽ xử lý thông tin của bạn trong thời gian sớm nhất có thể.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                3. Thời Gian Phản Hồi
                Chúng tôi cam kết phản hồi mọi phản hồi và khiếu nại trong vòng 5-7 ngày làm việc. Trong trường hợp có vấn đề phức tạp, thời gian giải quyết có thể dài hơn và chúng tôi sẽ thông báo rõ ràng đến bạn.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                4. Loại Phản Hồi
                Khi gửi góp ý hoặc khiếu nại, bạn cần chọn đúng loại phản hồi:
                Góp ý: Đề xuất ý tưởng cải thiện sản phẩm hoặc dịch vụ.
                Khiếu nại: Phản ánh sự không hài lòng về sản phẩm, dịch vụ hoặc giao hàng.
                Khác: Các vấn đề khác liên quan đến trải nghiệm sử dụng dịch vụ của chúng tôi.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                5. Xử Lý Khiếu Nại
                Trong trường hợp khiếu nại về sản phẩm lỗi, sản phẩm không đúng với mô tả hoặc dịch vụ không đạt yêu cầu, chúng tôi cam kết giải quyết theo chính sách hoàn trả và đổi hàng của BEAUTY COSMETICS. Đối với các khiếu nại về giao hàng muộn hoặc dịch vụ kém, chúng tôi sẽ xem xét và đưa ra các biện pháp khắc phục phù hợp.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                6. Chính Sách Bảo Mật Thông Tin
                Mọi thông tin mà bạn cung cấp trong quá trình gửi phản hồi, góp ý hoặc khiếu nại sẽ được bảo mật tuyệt đối và chỉ sử dụng để giải quyết vấn đề mà bạn gặp phải. Chúng tôi cam kết không chia sẻ thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào, trừ khi có yêu cầu pháp lý.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                7. Không Chấp Nhận Các Phản Hồi Xúc Phạm
                Chúng tôi không chấp nhận bất kỳ phản hồi nào có nội dung xúc phạm, lăng mạ, đe dọa hoặc vi phạm pháp luật. Mọi phản hồi không tuân thủ quy định sẽ bị từ chối và có thể dẫn đến việc khóa tài khoản của bạn trên website.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                8. Giới Hạn Trách Nhiệm
                Chúng tôi sẽ nỗ lực hết mình để giải quyết mọi khiếu nại và góp ý trong thời gian nhanh nhất. Tuy nhiên, trong một số trường hợp, chúng tôi không chịu trách nhiệm đối với các thiệt hại phát sinh ngoài tầm kiểm soát, bao gồm nhưng không giới hạn ở các vấn đề về giao hàng từ đối tác vận chuyển hoặc lỗi kỹ thuật ngoài ý muốn.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                9. Cập Nhật Điều Khoản Góp Ý - Khiếu Nại
                Chúng tôi có quyền cập nhật hoặc thay đổi các điều khoản về Góp Ý - Khiếu Nại này bất kỳ lúc nào mà không cần thông báo trước. Mọi thay đổi sẽ có hiệu lực ngay khi được đăng tải trên website. Bạn có trách nhiệm kiểm tra thường xuyên để nắm bắt các điều chỉnh.
              </Typography>
 {/* Render the selected content */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Term;