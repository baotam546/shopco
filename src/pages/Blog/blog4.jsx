import { Box, Container, Typography, Paper, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useRef } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';

function Blog4() {
  useEffect(() => {
    // Cuộn lên đầu trang khi component được tải
    window.scrollTo(0, 0);
  }, []);

  // Tạo refs cho từng phần để điều hướng
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section4Ref = useRef(null);
  const section41Ref = useRef(null);
  const section42Ref = useRef(null);
  const section43Ref = useRef(null);
  const section44Ref = useRef(null);
  const section45Ref = useRef(null);
  const section46Ref = useRef(null);
  const section47Ref = useRef(null);
  const section48Ref = useRef(null);
  const section49Ref = useRef(null);
  const section410Ref = useRef(null);
  const section411Ref = useRef(null);
  const section412Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

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
            src="/images/diemdanh.png"
            alt="Điểm danh TOP 12+ Toner cho tuổi dậy thì an toàn, tốt nhất 2024"
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
              Điểm danh TOP 12+ Toner cho tuổi dậy thì an toàn, tốt nhất 2024
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
                  <ListItemText primary="1. Toner cho tuổi dậy thì là gì?" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section2Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="2. Hướng dẫn cách chọn toner cho tuổi dậy thì" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section4Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="3. Top 12+ toner cho tuổi dậy thì an toàn, hiệu quả (2024)" />
                </ListItem>
                
                <List dense sx={{ pl: 4 }}>
                  <ListItem button onClick={() => scrollToSection(section41Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.1. Toner tràm cúc GUO – Refresh Oil Control Toner cho tuổi dậy thì" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section42Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.2. Toner Skin1004 Madagascar Centella Toning Toner 210ml cho tuổi dậy thì" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section43Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.3. Toner Nature Republic Green Derma Mild Cica Big Toner 500ml cho tuổi dậy thì" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section44Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.4. Toner Muji Light Toning Water sáng da, mềm mịn cho tuổi dậy thì" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section45Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.5. Innisfree Bija Cica Skin Toner an toàn cho tuổi dậy thì" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section46Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.6. Green Tea Waterfull Toner cho tuổi dậy thì" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section47Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.7. Toner cho tuổi dậy thì Mentholatum Melano CC Rohto" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section48Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.8. Toner Kracie Hadabisei Facial Lotion Acne Care trị mụn cho da tuổi dậy thì" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section49Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.9. Thayers – Nước hoa hồng cho tuổi dậy thì" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section410Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.10. Toner bí đao cho tuổi dậy thì Cocoon Winter Melon" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section411Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.11. Toner Simple Soothing Facial không cồn an toàn cho tuổi dậy thì" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section412Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.12. COSRX AHA/BHA Clarifying Treatment Toner cho tuổi dậy thì" />
                  </ListItem>
                </List>
                
                <ListItem button onClick={() => scrollToSection(section5Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="4. Hướng dẫn sử dụng toner cho tuổi dậy thì" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section6Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="5. Một số lưu ý khi sử dụng toner cho tuổi dậy thì" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section7Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="6. Tổng kết" />
                </ListItem>
              </List>
            </Paper>
            
            {/* Nội dung bài viết */}
            <Typography variant="body1" paragraph>
              Tuổi dậy thì là độ tuổi mà làn da có nhiều sự thay đổi như nổi mụn nhiều hơn, da nhạy cảm dễ kích ứng hơn, nhưng cũng có trường hợp da trắng hơn và mịn màng hơn. Việc lựa chọn các sản phẩm chăm sóc da phù hợp ở tuổi dậy thì rất quan trọng, bởi nếu không chúng có thể để lại nhiều hậu quả cho một làn da khó điều trị về sau. Một câu hỏi mà GUO đã nhận được nhiều nhất từ các bạn ở độ tuổi này là "Tuổi dậy thì có nên sử dụng toner hay không? Nếu có thì đâu là những sản phẩm toner an toàn, hiệu quả cho tuổi dậy thì?" Để tìm kiếm câu trả lời, hãy cùng GUO theo dõi bài viết này nhé:
            </Typography>

            {/* Phần 1 */}
            <Box ref={section1Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                1. Toner cho tuổi dậy thì là gì?
              </Typography>
              <Typography variant="body1" paragraph>
                Toner là một sản phẩm chăm sóc da được sử dụng để làm dịu và cân bằng da. Nó thường được sử dụng sau khi rửa mặt và trước khi áp dụng các sản phẩm chăm sóc da khác như serum hoặc kem dưỡng. Toner có thể giúp làm sạch các tạp chất còn sót lại sau khi rửa mặt, cân bằng độ pH của da, và cung cấp độ ẩm cho da. Toner có thể được sử dụng cho mọi loại da, bao gồm cả da tuổi dậy thì. Đối với các sản phẩm toner cho tuổi dậy thì được thiết kế từ các thành phần cũng như công dụng chuyên biệt cho lứa tuổi này.
              </Typography>
            </Box>
            
            {/* Phần 2 */}
            <Box ref={section2Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                2. Hướng dẫn cách chọn toner cho tuổi dậy thì
              </Typography>
              <Typography variant="body1" paragraph>
                Mỗi loại da sẽ có đặc điểm và vấn đề riêng nên việc lựa chọn toner phù hợp là điều rất cần thiết. Lựa chọn toner cho tuổi dậy thì đúng cách sẽ giúp cho quá trình chăm da của bạn đạt kết quả tốt hơn. Dưới đây là gợi ý chọn toner cho từng loại da ở tuổi dậy thì mà GUO muốn chia sẻ:
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>▶︎ Đối với da dầu nhờn:</strong> Đối với loại da này, bạn nên chọn toner có khả năng kiểm soát dầu thừa trên mặt, từ đó sẽ hạn chế tình trạng lỗ chân lông bị tắc nghẽn, dễ hình thành mụn.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>▶︎ Đối với da khô:</strong> Toner cho da này nên chứa nhiều thành phần từ thiên nhiên giúp cấp nước, dưỡng ẩm sâu như Hyaluronic Acid và Ceramide.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>▶︎ Đối với da hỗn hợp:</strong> Da hỗn hợp là làn da có xu hướng dầu ở vùng chữ T trên mặt. Để giải quyết tình trạng này, bạn nên ưu tiên lựa chọn các dòng toner ít ẩm hơn.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>▶︎ Đối với da nhạy cảm:</strong> Ưu tiên chọn toner chứa thành phần tự nhiên, không cồn, không parabens, hương liệu hay các chất hóa học gây kích ứng đến da.
              </Typography>
            </Box>

            {/* Phần 4 */}
            <Box ref={section4Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                3. Top 12+ toner cho tuổi dậy thì an toàn, hiệu quả (2024)
              </Typography>
              
              <Box ref={section41Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.1. Toner tràm cúc GUO – Refresh Oil Control Toner cho tuổi dậy thì
                </Typography>
                <Typography variant="body1" paragraph>
                  Nhắc đến các dòng toner cho tuổi dậy thì, không thể nào không nhắc tới Refresh Oil Control Toner của nhà GUO. Đây là một sản phẩm toner với công dụng ngừa mụn hiệu quả, an toàn và thích hợp cho các làn da tuổi dậy thì. Toner được chiết xuất từ các thành phần hoàn toàn tự nhiên, lành tính như trà xanh, hoa cúc, lá ổi, hoa sen. Mang lại tác dụng vô cùng hiệu quả trong việc cấp ẩm mịn màng với da khô, kiểm soát dầu nhờn với da dầu, làm dịu da mụn và nhạy cảm và bảo vệ giảm kích ứng.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thành phần nổi bật:</strong>
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>✿ Nước cây trà chưng cất hữu cơ: nổi bật với đặc tính trị mụn và làm giảm các nốt mụn đỏ, sưng tấy. Thành phần này này hỗ trợ giảm mẩn đỏ và điều trị mụn nang, se khít lỗ chân lông.</Box>
                    <Box component="li" sx={{ mb: 1 }}>✿ Cúc La Mã & Hoa Cúc Calendula đóng vai trò cân bằng độ pH lý tưởng cho da, làm sạch và dịu da. Chúng cũng kích thích sản xuất collagen và bảo vệ da khỏi mụn viêm sưng.</Box>
                    <Box component="li" sx={{ mb: 1 }}>✿ Vitamin B5: dưỡng ẩm cho da, củng cố hàng rào bảo vệ da, tăng sản sinh collagen và elastin. Hỗ trợ phục hồi da, hỗ trợ điều trị mụn, ngăn ngừa sưng đỏ.</Box>
                  </Box>
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Công dụng:</strong>
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>♥ Duy trì độ pH lý tưởng là 5,5 cho làn da mịn màng, khỏe mạnh.</Box>
                    <Box component="li" sx={{ mb: 1 }}>♥ Kiểm soát sản xuất dầu trong 8 giờ, thúc đẩy làn da sạch sẽ và thoáng khí đồng thời cung cấp độ ẩm cho vẻ ngoài mịn màng và tươi mới.</Box>
                    <Box component="li" sx={{ mb: 1 }}>♥ Giảm viêm mụn, làm dịu và mát da, hỗ trợ ngăn ngừa mụn nang.</Box>
                    <Box component="li" sx={{ mb: 1 }}>♥ Hydrat, giữ ẩm và se khít lỗ chân lông cho làn da trẻ trung và rạng rỡ.</Box>
                    <Box component="li" sx={{ mb: 1 }}>♥ Chống kích ứng và làm dịu da.</Box>
                  </Box>
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thương hiệu:</strong> GUO
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Xuất xứ:</strong> Việt Nam
                </Typography>
              </Box>
              
              <Box ref={section42Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.2. Toner Skin1004 Madagascar Centella Toning Toner 210ml cho tuổi dậy thì
                </Typography>
                <Typography variant="body1" paragraph>
                  Toner Rau Má Skin1004 Madagascar Centella Toning Toner 210ml là toner được thiết kế dành riêng cho da mụn. Với công dụng giúp chống viêm, làm dịu nhanh những tổn thương do mụn để lại. Đây là sản phẩm toner lý tưởng dành cho tuổi dậy thì. Với thành phần chứa PHA là một loại acid tự nhiên có khả năng loại bỏ đi lớp tế bào chết, chống oxy hóa, kích thích tái tạo các tế bào da, centella toner giảm nếp nhăn và giúp da mặt khỏe khoắn, săn chắc hơn trông thấy.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thương hiệu:</strong> Skin1004
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Xuất xứ:</strong> Hàn Quốc
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Giá tham khảo:</strong> 480.000 VNĐ
                </Typography>
              </Box>
              
              <Box ref={section43Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.3. Toner Nature Republic Green Derma Mild Cica Big Toner 500ml cho tuổi dậy thì
                </Typography>
                <Typography variant="body1" paragraph>
                  Nước Cân Bằng Green Derma Mild Cica Big Toner 500ml là một sản phẩm đến từ thương hiệu Hàn Quốc nổi tiếng với khả năng phục hồi da cực kỳ tốt. Cấu tạo thành phần chứa nhiều thành phần thiên nhiên lành tính, hiệu quả cao cho da. Sản phẩm vô cùng dịu nhẹ và lành tính, phù hợp với các làn da tuổi dậy thì. Sản phẩm có chiết xuất Rau Má làm dịu da, giảm kích ứng, hỗ trợ phục hồi các hư tổn, chống oxy hóa cho da, nuôi dưỡng làn da khỏe mạnh hơn.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thương hiệu:</strong> Nature Republic
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Xuất xứ:</strong> Hàn Quốc
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Giá tham khảo:</strong> 264.000 VNĐ
                </Typography>
              </Box>
              
              <Box ref={section44Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.4. Toner Muji Light Toning Water sáng da, mềm mịn cho tuổi dậy thì
                </Typography>
                <Typography variant="body1" paragraph>
                  Toner Muji Light Toning Water thích hợp là một sản phẩm toner cho tuổi dậy thì với thành phần an toàn cũng như công dụng hiệu quả nó mang lại. Là thương hiệu đến từ Nhật Bản, Muji là một thương hiệu đình đám và bán chạy số 1 tại đây với các dòng sản phẩm lành tính, thành phần 100% tự nhiên giúp dưỡng da từ sâu bên trong một cách tối đa. Toner Muji có thành phần thuần tự nhiên, thân thiện với da. Nhờ đó, toner mang lại hiệu quả dưỡng da và cân bằng ẩm tuyệt vời, giúp da luôn căng mướt, mềm mịn suốt cả ngày dài.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thương hiệu:</strong> Muji
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Xuất xứ:</strong> Nhật Bản
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Giá tham khảo:</strong> 230.000 VNĐ
                </Typography>
              </Box>
              
              <Box ref={section45Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.5. Innisfree Bija Cica Skin Toner an toàn cho tuổi dậy thì
                </Typography>
                <Typography variant="body1" paragraph>
                  Innisfree Bija Cica Skin ra đời là sản phẩm Innisfree Bija Cica tập trung chữa trị vấn đề về mụn của da, đồng thời cấp nước giữ ẩm làn da mềm mại và khỏe mạnh. Toner được thiết kế phù hợp cho nhiều độ tuổi, đặc biệt với khả năng điều trị mụn lý thưởng cho làn da tuổi dậy thì. Với thành phần toner được chiết xuất từ tinh chất rau má và dầu Bija giúp cân bằng độ pH cho da, tẩy tế bào chết nhẹ nhàng, ngăn ngừa phát sinh mụn và bảo vệ da khỏe mạnh.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thương hiệu:</strong> Innisfree
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Xuất xứ:</strong> Hàn Quốc
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Giá tham khảo:</strong> 340.000 VNĐ
                </Typography>
              </Box>
              
              <Box ref={section46Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.6. Green Tea Waterfull Toner cho tuổi dậy thì
                </Typography>
                <Typography variant="body1" paragraph>
                  Green Tea Waterfull Toner được chiết xuất thiên nhiên từ lá trà xanh. Với công thức 5 không (không chứa các thành phần sau đây Paraben, Artificial Coloring, Mineral Oil, Benzophenone ,Talc). Với khả năng làm sạch sâu, cân bằng độ ẩm cho da, làm mát da, loại bỏ tạp bẩn còn sót lại trên da, giúp da thư giãn, tốt hơn cho cả da mụn. Đây là toner hoàn toàn thiên nhiên, hoàn toàn lành tính, thích hợp cho cả làn da nhạy cảm nhất (thiên dầu).
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thương hiệu:</strong> The Face Shop
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Xuất xứ:</strong> Hàn Quốc
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Giá tham khảo:</strong> 210.000 VNĐ
                </Typography>
              </Box>
              
              <Box ref={section47Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.7. Toner cho tuổi dậy thì Mentholatum Melano CC Rohto
                </Typography>
                <Typography variant="body1" paragraph>
                  Nước cân bằng Melano CC của Rohto đến từ Nhật Bản. Với bảng thành phần Vitamin C tự nhiên & an toàn cho da. có tác dụng dưỡng trắng da, điều trị nám, tàn nhang và làm mờ vết thâm, cho làn da sáng mịn hơn mỗi ngày. Bên cạnh đó, toner chứa thành phần chiết xuất từ nho, chanh, cam thảo giúp thu nhỏ lỗ chân lông đồng thời giữ ẩm, cung cấp nước cho làn da bạn mịn màng. Lấy đi các tế bào chết trên da, làm sạch triệt để và dưỡng trắng hoàn hảo nhất là những làn da bị cháy nắng.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thương hiệu:</strong> Rohto
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Xuất xứ:</strong> Nhật Bản
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Giá tham khảo:</strong> 290.000 VNĐ
                </Typography>
              </Box>
              
              <Box ref={section48Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.8. Toner Kracie Hadabisei Facial Lotion Acne Care trị mụn cho da tuổi dậy thì
                </Typography>
                <Typography variant="body1" paragraph>
                  Toner Kracie Hadabisei Facial Lotion Acne Care là toner trị mụn có xuất xứ từ Nhật Bản. Đây là toner được đánh giá cao trong việc điều trị mụn và làm mờ các vết thâm sau mụn. Sản phẩm hoàn toàn an toàn và thích hợp cho các làn da tuổi dậy thì. Với công thức bao gồm các hoạt chất kháng khuẩn, Vitamin C tinh khiết cùng chiết xuất Collagen, thực vật tự nhiên (hoa bia, hoa môi, trà ô long), chanh và kiwi, …. Toner mang lại hiệu quả tăng nhanh quá trình hồi phục của da, giúp làm mờ vết thâm sau khoảng một tuần.
                </Typography>
              </Box>
              
              <Box ref={section49Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.9. Thayers – Nước hoa hồng cho tuổi dậy thì
                </Typography>
                <Typography variant="body1" paragraph>
                  Thayers là thương hiệu có lịch sử lâu đời đến từ Mỹ. Nước hoa hồng Thayers dành cho tuổi dậy thì là dòng sản phẩm không chứa cồn, có công dụng làm se khít lỗ chân lông, cân bằng độ pH. Thayers được yêu thích bởi khả năng cấp ẩm, làm dịu da tức thì và hiệu quả. Đặc biệt, Thayers còn giúp ngăn ngừa mụn ẩn dưới da với thành phần lành tính từ nước cây phỉ và chiết xuất hoa hồng thiên nhiên, không cồn. Làn da tuổi dậy thì với những vấn đề như thiên dầu, thâm mụn, mụn trứng cá sẽ được cải thiện rõ rệt chỉ sau thời gian ngắn sử dụng.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thương hiệu:</strong> Thayers
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Xuất xứ:</strong> Mỹ
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Giá tham khảo:</strong> 350.000 VNĐ
                </Typography>
              </Box>
              
              <Box ref={section410Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.10. Toner bí đao cho tuổi dậy thì Cocoon Winter Melon
                </Typography>
                <Typography variant="body1" paragraph>
                  Nước Cân Bằng Bí Đao Cocoon Winter Melon Toner là sản phẩm nội địa Việt Nam với thành phần từ tinh chất bí đao, nhựa hương thảo và chanh dây có tác dụng làm sạch sâu, thanh lọc bã nhờn dưới da, đặc biệt phù hợp cho da dầu ở tuổi dậy thì. Toner bí đao được chiết xuất từ bí đao là thành phần tự nhiên với đặc tính làm mát, thanh lọc và giảm dầu. Nhìn chung, toner bí đao Cocoon sở hữu những thành phần dịu nhẹ, cân bằng, và làm dịu, không chứa cồn và hương liệu, rất thích hợp cho làn da tuổi dậy thì nổi mụn, dễ kích ứng.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thương hiệu:</strong> Cocoon
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Xuất xứ:</strong> Việt Nam
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Giá tham khảo:</strong> 180.000 VNĐ
                </Typography>
              </Box>
              
              <Box ref={section411Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.11. Toner Simple Soothing Facial không cồn an toàn cho tuổi dậy thì
                </Typography>
                <Typography variant="body1" paragraph>
                  Toner Simple Soothing Facial Toner là sản phẩm toner dịu nhẹ, không chứa cồn, đa công dụng dành cho da nhạy cảm và thiên dầu ở tuổi dậy thì. Thành phần không cồn, paraben, không gây kích ứng, không làm nghẹt lỗ chân lông. Chứa hamamelis là dạng vitamin B5, allantoin và chiết xuất hoa cúc. Tác dụng làm dịu mát da tức thì, loại bỏ dầu thừa, ngăn bụi bẩn, bã nhờn tắc nghẽn lỗ chân lông, tẩy da chết nhẹ nhàng, ngăn ngừa mụn. Đặc biệt thành phần lành tính, dịu nhẹ không gây kích ứng da thích hợp cho mọi loại da, kể cả da mụn và nhạy cảm, không gây khô căng cho da.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thương hiệu:</strong> Simple
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Xuất xứ:</strong> Anh
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Giá tham khảo:</strong> 160.000 VNĐ
                </Typography>
              </Box>
              
              <Box ref={section412Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.12. COSRX AHA/BHA Clarifying Treatment Toner cho tuổi dậy thì
                </Typography>
                <Typography variant="body1" paragraph>
                  COSRX AHA/BHA Clarifying Treatment Toner là sản phẩm toner có chứa AHA và BHA nhẹ, thích hợp làm bước tẩy tế bào chết hóa học hàng ngày cho làn da tuổi dậy thì. Toner có công dụng tẩy tế bào chết từ sâu bên trong da để làm thông thoáng và giải phóng các lỗ chân lông bị tắc. AHA/BHA Clarifying Treatment Toner còn giúp bạn cấp ẩm và tăng cường hàng rào bảo vệ da, an toàn cho mọi loại da. Kết cấu lỏng, thẩm thấu nhanh vào da. Toner có thành phần lành tính, phù hợp cho mọi loại da, đặc biệt là da dầu mụn và da có lỗ chân lông to. Đây cũng là sản phẩm giúp da sáng mịn hơn và cải thiện tông màu da sau một thời gian sử dụng.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Thương hiệu:</strong> COSRX
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Xuất xứ:</strong> Hàn Quốc
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>▶︎ Giá tham khảo:</strong> 270.000 VNĐ
                </Typography>
              </Box>
            </Box>

            {/* Phần 5 */}
            <Box ref={section5Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                4. Hướng dẫn sử dụng toner cho tuổi dậy thì
              </Typography>
              <Typography variant="body1" paragraph>
                Để sử dụng toner hiệu quả, bạn cần làm theo các bước sau:
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Bước 1:</strong> Rửa mặt sạch và lau khô da.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Bước 2:</strong> Lấy một lượng toner phù hợp (khoảng 1-2 ml) vào lòng bàn tay.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Bước 3:</strong> Vắt toner lên ngón tay và vẩy đều lên da.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Bước 4:</strong> Vẩy toner lên toàn bộ da, đặc biệt là vùng da dầu và vùng da nhạy cảm.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Bước 5:</strong> Để toner khô hoàn toàn trước khi áp dụng các sản phẩm chăm sóc da khác.
              </Typography>
            </Box>

            {/* Phần 6 */}
            <Box ref={section6Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                5. Một số lưu ý khi sử dụng toner cho tuổi dậy thì
              </Typography>
              <Typography variant="body1" paragraph>
                - Không sử dụng toner quá nhiều, điều đó có thể khiến da trở nên khô hơn.
              </Typography>
              <Typography variant="body1" paragraph>
                - Không sử dụng toner quá thường xuyên, điều đó có thể khiến da trở nên phát dầu hơn.
              </Typography>
              <Typography variant="body1" paragraph>
                - Không sử dụng toner trực tiếp vào mắt, điều đó có thể gây kích ứng da.
              </Typography>
              <Typography variant="body1" paragraph>
                - Không sử dụng toner khi da bị viêm hoặc nổi mụn, điều đó có thể làm tình trạng da trở nên tồi tệ hơn.
              </Typography>
            </Box>

            {/* Phần 7 */}
            <Box ref={section7Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                6. Tổng kết
              </Typography>
              <Typography variant="body1" paragraph>
                Vậy là GUO đã giới thiệu cho bạn top 12+ toner cho tuổi dậy thì an toàn, hiệu quả hiện nay. Mong rằng thông tin mà chúng mình mang đến sẽ giúp bạn dễ dàng hơn trong việc lựa chọn được toner phù hợp, chăm sóc làn da tuổi dậy thì hiệu quả nhất. Hãy nhớ rằng, việc chọn đúng sản phẩm toner phù hợp với loại da của bạn sẽ giúp cải thiện làn da đáng kể. Đừng quên kết hợp toner với các bước skincare cơ bản khác để có làn da khỏe mạnh, rạng rỡ nhé!
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Blog4;

