import { Box, Container, Grid, Link, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#eaeaea", py: 4, borderTop: "1px solid #ccc", width: '100%', margin: 0 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Cột 1: Logo & Thông tin liên hệ */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <img
                src="/images/logo.png"
                alt="BEAUTY COSMETICS"
                style={{ width: 55, height: 55, marginRight: 10 }}
              />
              <Typography variant="h6" fontWeight="bold" color="#000">
                BEAUTY COSMETICS
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOnIcon sx={{ mr: 1, color: "#000" }} />
              <Typography variant="body2" color="#000">
                Khu công nghệ cao - quận 9
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon sx={{ mr: 1, color: "#000" }} />
              <Typography variant="body2" color="#000">
                0956497123
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <EmailIcon sx={{ mr: 1, color: "#000" }} />
              <Typography variant="body2" color="#000">
                beautycosmetics@gmail.vn
              </Typography>
            </Box>
          </Grid>

          {/* Cột 2: Hỗ trợ khách hàng */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2} color="#000">
              HỖ TRỢ KHÁCH HÀNG
            </Typography>
            <Link href="/buy" underline="hover" color="#000" display="block" sx={{ mb: 1 }}>
              Hướng dẫn mua hàng
            </Link>
            <Link href="/complaint" underline="hover" color="#000" display="block" sx={{ mb: 1 }}>
              Góp ý - Khiếu nại
            </Link>
            <Link href="/return" underline="hover" color="#000" display="block">
              Chính sách đổi trả
            </Link>
          </Grid>

          {/* Cột 3: Thông tin công ty */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2} color="#000">
              THÔNG TIN CÔNG TY
            </Typography>
            <Link href="/intro" underline="hover" color="#000" display="block" sx={{ mb: 1 }}>
              Giới thiệu
            </Link>
            <Link href="/policy" underline="hover" color="#000" display="block" sx={{ mb: 1 }}>
              Chính sách bảo mật
            </Link>
            <Link href="/term" underline="hover" color="#000" display="block">
              Điều khoản dịch vụ
            </Link>
          </Grid>

          {/* Cột 4: Giờ mở cửa */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2} color="#000">
              GIỜ MỞ CỬA
            </Typography>
            <Typography variant="body2" color="#000">
              Từ <strong>9:00 - 21:30</strong> tất cả các ngày trong tuần (bao gồm cả ngày lễ, ngày Tết).
            </Typography>
          </Grid>
        </Grid>

        {/* Chứng nhận Bộ Công Thương & Giới thiệu Beauty.vn */}
        <Box mt={4} display="flex" justifyContent="center" alignItems="center" flexDirection="row">
          <Box mr={20}>
            <img
              src="/images/chungnhan.png"
              alt="Chứng nhận Bộ Công Thương"
              style={{ width: 190 }}
            />
          </Box>
          <Typography variant="h6" sx={{ maxWidth: 800, textAlign: "left", color: "#000", ml: -10 }}>
            Beauty.vn – thiên đường mỹ phẩm chính hãng với mức giá tốt nhất, nơi sắc đẹp và chất lượng luôn song hành. 
            Chúng tôi cam kết mang đến những sản phẩm an toàn, nguồn gốc rõ ràng, cùng dịch vụ tận tâm. Với phương châm 
            <strong> "Chất lượng thật - Giá trị thật"</strong>, Beauty.vn không ngừng nỗ lực nâng cao chất lượng sản phẩm 
            và dịch vụ, giúp khách hàng yên tâm trải nghiệm mua sắm trọn vẹn, tiện lợi và hài lòng nhất.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

