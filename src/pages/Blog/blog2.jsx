import { Box, Container, Typography, Paper, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useRef } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';

function Blog2() {
  useEffect(() => {
    // Cuộn lên đầu trang khi component được tải
    window.scrollTo(0, 0);
  }, []);

  // Tạo refs cho từng phần để điều hướng
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section21Ref = useRef(null);
  const section22Ref = useRef(null);
  const section23Ref = useRef(null);
  const section24Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  // Hàm cuộn đến phần được chọn
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ bgcolor: "#f0f0f0", minHeight: "100vh", width:'99vw' }}>
      <Header />
      <Box sx={{ width: '100%' }}>
        {/* Phần ảnh bìa */}
        <Box 
          sx={{ 
            width: '100%', 
            height: 'auto',
            maxHeight: '60vh',
            display: 'flex',
            justifyContent: 'center',
            mb: 4
          }}
        >
          <Box
            component="img"
            src="/images/giaidap.webp"
            alt="Giải đáp: Chỉ Số Bảo Vệ Của Kem Chống Nắng Bao Nhiêu Là Tốt?"
            sx={{
              width: '100%',
              maxWidth: '1200px',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </Box>

        {/* Phần nội dung */}
        <Container 
          maxWidth="md" 
          sx={{ 
            px: { xs: 2, sm: 3, md: 4 } 
          }}
        >
          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 2, sm: 3, md: 4 }, 
              mb: 6,
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                textAlign: 'center',
                color: '#059669',
                background: 'linear-gradient(to right, #059669, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0px 1px 2px rgba(0,0,0,0.1)',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
              }}
            >
              Giải đáp: Chỉ Số Bảo Vệ Của Kem Chống Nắng Bao Nhiêu Là Tốt?
            </Typography>
            
            {/* Phần mục lục */}
            <Paper 
              elevation={1} 
              sx={{ 
                p: 3, 
                mb: 4, 
                borderRadius: 2,
                bgcolor: '#f5f5f5'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Thông tin bài viết
              </Typography>
              
              <List dense>
                <ListItem button onClick={() => scrollToSection(section1Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="1. Chỉ số chống nắng là gì?" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section2Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="2. Các loại chỉ số chống nắng thường gặp" />
                </ListItem>
                
                <List dense sx={{ pl: 4 }}>
                  <ListItem button onClick={() => scrollToSection(section21Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="2.1. Chỉ số kem chống nắng SPF" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section22Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="2.2. Chỉ số chống nắng UPF" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section23Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="2.3. Chỉ số chống nắng PA" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section24Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="2.4. Chỉ số kem chống nắng PPD" />
                  </ListItem>
                </List>
                
                <ListItem button onClick={() => scrollToSection(section3Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="3. Cách đọc chỉ số chống nắng" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section4Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="4. Chỉ số bảo vệ của kem chống nắng bao nhiêu là tốt?" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section5Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="5. Kem chống nắng nào đáp ứng tốt các chỉ số trên?" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section6Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="6. Tổng kết" />
                </ListItem>
              </List>
            </Paper>
            
            {/* Nội dung bài viết */}
            <Typography variant="body1" paragraph>
              Để sử dụng kem chống nắng hiệu quả, bên cạnh các thành phần thì chỉ số chống nắng cũng là yếu tố quan trọng không kém cạnh. Nếu chọn chỉ số kem chống nắng không phù hợp, sản phẩm có thể phản tác dụng và khiến làn da của bạn trở nên nhạy cảm, dễ bị kích ứng, tổn thương hơn. Vậy chỉ số bảo vệ của kem chống nắng bao nhiêu là tốt? Câu trả lời sẽ được tiết lộ trong bài viết này, cùng theo dõi nhé!
            </Typography>

            {/* Phần 1 */}
            <Box ref={section1Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                1. Chỉ số chống nắng là gì?
              </Typography>
              <Typography variant="body1" paragraph>
                Chỉ số chống nắng là định mức đo lường khả năng chống lại các tia UVA, UVB được dùng trong kem chống nắng. Chỉ số này được tính theo số giờ và tỷ lệ phần trăm chống tia UV khi apply kem chống nắng trên da. Hiện nay, có 4 chỉ số chính thường được sử dụng trên kem chống nắng là SPF, UPF, PPD và PA.
              </Typography>
            </Box>
            
            {/* Phần 2 */}
            <Box ref={section2Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                2. Các loại chỉ số chống nắng thường gặp
              </Typography>
              
              <Box ref={section21Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  2.1. Chỉ số kem chống nắng SPF
                </Typography>
                <Typography variant="body1" paragraph>
                  SPF – Sun Protection Factor là chỉ số định mức đo lường khả năng chống nắng, bảo vệ da khỏi tia UVB của kem chống nắng. Chỉ số này đo lường khoảng thời gian mà da của một người bắt đầu xuất hiện các dấu hiệu sạm đi nếu không sử dụng kem chống nắng.
                </Typography>
                <Typography variant="body1" paragraph>
                  Hiện nay, chỉ số SPF trong kem chống nắng thấp nhất là 15 và cao nhất là 100. 1 SPF tương đương bảo vệ da và hạn chế tác hại của tia UVB trong 10 phút.
                </Typography>
              </Box>
              
              <Box ref={section22Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  2.2. Chỉ số chống nắng UPF
                </Typography>
                <Typography variant="body1" paragraph>
                  UPF – Ultraviolet protective factor là chỉ số bảo vệ da khỏi tác hại của tia tử ngoại, thường có trong các sản phẩm may mặc như quần áo, khẩu trang, mũ, găng tay,… Chỉ số này thể hiện khả năng bảo vệ da khỏi tia cực tím xuyên thông qua các loại vải khác nhau.
                </Typography>
                <Typography variant="body1" paragraph>
                  Ví dụ:
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>UPF 50 có nghĩa là chỉ có 1/50 tia UV có thể xuyên qua vải, 98% tia UV bị chặn lại.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Chỉ số UPF càng cao, khả năng bảo vệ da khỏi tia UV càng tốt.</Box>
                    <Box component="li" sx={{ mb: 1 }}>UPF không liên quan đến khả năng bảo vệ da khỏi tia UVB, chỉ đánh giá khả năng bảo vệ da khỏi tia UVA.</Box>
                  </Box>
                </Typography>
              </Box>
              
              <Box ref={section23Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  2.3. Chỉ số chống nắng PA
                </Typography>
                <Typography variant="body1" paragraph>
                  PA – Protection Grade of UVA là chỉ số để đo lường khả năng bảo vệ da khỏi tia UVA được Hiệp Hội Mỹ Phẩm Nhật Bản công bố. Khác với các chỉ số chống nắng khác được thể hiện bằng số, PA sẽ thể hiện kèm với dấu "+", càng nhiều dấu "+" thì mức độ bảo vệ da khỏi tia UVA càng cao.
                </Typography>
              </Box>
              
              <Box ref={section24Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  2.4. Chỉ số kem chống nắng PPD
                </Typography>
                <Typography variant="body1" paragraph>
                  Chỉ số PPD – Persistent pigment darkening để đo lường sự tạo nên các sắc tố trên da sau mỗi 2 giờ tiếp xúc với ánh nắng. Chỉ số PPD được sử dụng phổ biến ở cả Châu Âu và Châu Á, tương tự như PA được dùng để đo mức độ phơi nhiễm UVA. Chỉ số PPD càng cao thì khả năng bảo vệ da khỏi tác hại của tia UVA càng tốt.
                </Typography>
              </Box>
            </Box>

            {/* Phần 3 */}
            <Box ref={section3Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                3. Cách đọc chỉ số chống nắng
              </Typography>
              <Typography variant="body1" paragraph>
                Thông thường, các sản phẩm có khả năng chống nắng trên thị trường sẽ ghi 2 chỉ số là SPF và PA. Với SPF, có 2 cách hiểu phổ biến:
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Theo % chống lại tia UV:</strong> Ở điều kiện hoàn hảo thì kem chống nắng có SPF 15 sẽ ngăn chặn được khoảng 93% tác hại từ tia UVB, SPF 30 sẽ tương đương 96,7%, SPF 50 là khoảng 98%. Tuy vậy, con số này chỉ mang tính tương đối và có thể giảm dần theo thời gian sử dụng.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Theo thời gian chống lại tia UVB:</strong> Cách tính lấy chỉ số SPF nhân 10 sẽ ra thời gian bảo vệ da khỏi tác hại của tia UV (đơn vị: phút). Ví dụ, kem chống nắng có chỉ số SPF 30 thì thời gian bảo vệ da khỏi tia UVB tương đương là 300 phút.
              </Typography>
              <Typography variant="body1" paragraph>
                Trong khi đó, chỉ số PA sẽ được phân thành các cấp độ như sau:
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>PA+: Khả năng chống lại tia UVA ở mức 40 – 50%</Box>
                  <Box component="li" sx={{ mb: 1 }}>PA++: Khả năng chống lại tia UVA ở mức 60-70%</Box>
                  <Box component="li" sx={{ mb: 1 }}>PA+++: Khả năng chống tia UVA lên đến 90%</Box>
                  <Box component="li" sx={{ mb: 1 }}>PA++++: Khả năng chống tia UVA tốt >95%</Box>
                </Box>
              </Typography>
            </Box>

            {/* Phần 4 */}
            <Box ref={section4Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                4. Chỉ số bảo vệ của kem chống nắng bao nhiêu là tốt?
              </Typography>
              <Typography variant="body1" paragraph>
                Nhiều người mắc phải sai lầm trong việc chọn mua kem chống nắng, nghĩ rằng sản phẩm có chỉ số chống nắng càng cao thì càng tốt. Nhưng thực tế chỉ đúng một nửa, chỉ số SPF càng cao thì khả năng bảo vệ da khỏi tác hại của ánh nắng mặt trời càng lâu. Tuy vậy, thời gian chống nắng của kem chống nắng SPF 100 cũng không cao hơn gấp đôi so với loại SPF 50. Đồng thời, khi SPF càng cao thì hoạt chất chống nắng trong sản phẩm càng nhiều, kem sẽ lưu trên da càng lâu, dễ gây bít lỗ chân lông và làm da bị tổn thương, từ đó nhanh chóng xuất hiện các dấu hiệu lão hóa.
              </Typography>
              <Typography variant="body1" paragraph>
                Tương tự, chỉ số PA+++ tương đương khả năng chống tia UVA 90%, nhưng PA++++ thì chỉ tăng thêm 5% chống lại UVA. Nghĩa là, dù các chỉ số chống nắng tăng lên nhiều nhưng hiệu quả chống nắng thực tế không tăng tương đương. Một sản phẩm chống nắng được đánh giá tốt khi đạt tỷ lệ bảo vệ da giữa UVA và UVB là 1:1/3
              </Typography>
              <Typography variant="body1" paragraph>
                Theo các chuyên gia da liễu, bạn nên chọn kem chống nắng cho mặt và cho cơ thể có chỉ số từ SPF 30 đến SPF 60 và PA+++. Những sản phẩm có chỉ số chống nắng SPF nhỏ hơn 30 sẽ không mang lại hiệu quả chống nắng như mong đợi đối với thời tiết của Việt Nam. Còn các chỉ số SPF cao đến rất cao (>60 – 100) thì chỉ nên sử dụng ở những vùng da đang điều trị nám hay dị ứng ánh nắng.
              </Typography>
              <Typography variant="body1" paragraph>
                Một số trường hợp tình trạng da bị mụn sưng, viêm hoặc da quá nhạy cảm thì bạn nên dùng kem chống nắng có chỉ số SPF từ 15 – 30 để tránh bị kích ứng.
              </Typography>
            </Box>

            {/* Phần 5 */}
            <Box ref={section5Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                5. Kem chống nắng nào đáp ứng tốt các chỉ số trên?
              </Typography>
              <Typography variant="body1" paragraph>
                Kem Chống Nắng Multi Protection Sun Cream SPF 50+ PA+++ là sản phẩm đến từ thương hiệu GUO Mỹ phẩm xanh sạch. Kem là giải pháp bảo vệ da tối ưu trước các tác hại của tia UVA, UVB, HEV (ánh sáng xanh) và tia hồng ngoại. Kết cấu dạng sữa mỏng nhẹ cùng các hạt phấn siêu mịn, thẩm thấu nhanh, không gây bí bách, nặng da hay nhờn rít.
              </Typography>
              <Typography variant="body1" paragraph>
                Kem Chống Nắng Đa Tầng GUO còn hỗ trợ kiềm dầu hiệu quả, duy trì làn da láng mịn, khô thoáng trong nhiều giờ liền. Điểm nổi bật của sản phẩm còn nằm ở khả năng chống lão hóa, nâng tone tự nhiên. Kem Chống Nắng GUO chứa công thức dịu nhẹ, cam kết không cồn, paraben, hương liệu, dầu khoáng nên an toàn và phù hợp cho mọi làn da, kể cả da nhạy cảm.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Thành phần nổi bật:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>Zinc Oxide, Titanium Dioxide (nano), Tinosorb S: Chống được tia UVAI, UVAII, UVB.</Box>
                  <Box component="li" sx={{ mb: 1 }}>Lactobacillus (lợi khuẩn): Bảo vệ da trước tác hại từ môi trường; cân bằng hệ vi sinh tự nhiên cho da khoẻ mạnh hơn.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Ưu điểm:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>Cung cấp màng lọc chống nắng phổ rộng chống lại các tia UVA, UVB và ánh sáng xanh.</Box>
                  <Box component="li" sx={{ mb: 1 }}>Là dòng kem chống nắng vật lý lai hóa học giúp chống nắng hiệu quả trong nhiều giờ liền, kháng nước và mồ hôi tốt.</Box>
                  <Box component="li" sx={{ mb: 1 }}>Kết cấu dạng sữa siêu mịn, thẩm thấu nhanh, kiểm soát dầu nhờn tốt cho da luôn thoáng mịn.</Box>
                  <Box component="li" sx={{ mb: 1 }}>Kem chống nắng giúp nâng tone tự nhiên, có thể thay thế lớp lót make up.</Box>
                  <Box component="li" sx={{ mb: 1 }}>Bổ sung các dưỡng chất có trong vi tảo lục, sữa ong chúa,… giúp chống lão hóa, dưỡng da trắng sáng.</Box>
                  <Box component="li" sx={{ mb: 1 }}>Đạt tiêu chí 5 không: "KHÔNG CỒN – KHÔNG HƯƠNG LIỆU – KHÔNG MÀU – KHÔNG DẦU KHOÁNG – KHÔNG PARABEN", dịu nhẹ và an toàn với mọi loại da.</Box>
                </Box>
              </Typography>
            </Box>

            {/* Phần 6 - Tổng kết */}
            <Box ref={section6Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                6. Tổng kết
              </Typography>
              <Typography variant="body1" paragraph>
                Vậy là GUO đã giải đáp tất tần tật những thắc mắc xoay quanh chỉ số bảo vệ của kem chống nắng bao nhiêu là tốt. Mong rằng thông tin mà chúng mình mang đến sẽ giúp bạn dễ dàng hơn trong việc lựa chọn được kem chống nắng phù hợp, bảo vệ da tốt nhất. Một lưu ý nhỏ rằng dù đã sử dụng kem chống nắng thì bạn cũng đừng xem nhẹ các vật dụng chống nắng như mũ, áo khoác hay kính râm nhé. Chúc bạn có được làn da khỏe mạnh, rạng rỡ!
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Blog2;

