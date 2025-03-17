import { Box, Container, Typography, Paper, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useRef } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';

function Blog5() {
  useEffect(() => {
    // Cuộn lên đầu trang khi component được tải
    window.scrollTo(0, 0);
  }, []);

  // Tạo refs cho từng phần để điều hướng
  const section1Ref = useRef(null);
  const section11Ref = useRef(null);
  const section12Ref = useRef(null);
  const section13Ref = useRef(null);
  const section14Ref = useRef(null);
  const section15Ref = useRef(null);
  const section16Ref = useRef(null);
  const section17Ref = useRef(null);
  const section18Ref = useRef(null);
  const section19Ref = useRef(null);
  const section110Ref = useRef(null);
  const section2Ref = useRef(null);
  const section21Ref = useRef(null);
  const section22Ref = useRef(null);
  const section23Ref = useRef(null);
  const section24Ref = useRef(null);
  const section3Ref = useRef(null);

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
            src="/images/9nguyennhan.webp"
            alt="9 Nguyên Nhân Khiến Da Bị Mụn Dai Dẳng Và Cách Đối Phó"
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
              9 Nguyên Nhân Khiến Da Bị Mụn Dai Dẳng Và Cách Đối Phó
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
                  <ListItemText primary="1. 9 Nguyên Nhân Khiến Da Bị Mụn Dai Dẳng" />
                </ListItem>
                
                <List dense sx={{ pl: 4 }}>
                  <ListItem button onClick={() => scrollToSection(section11Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.1. Rối Loạn Nội Tiết" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section12Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.2. Chăm Sóc Da Không Đúng Cách" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section13Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.3. Chế Độ Ăn Uống" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section14Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.4. Căng Thẳng" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section15Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.5. Di Truyền" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section16Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.6. Thiếu Ngủ" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section17Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.7. Vi Khuẩn Propionibacterium Acnes" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section18Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.8. Môi Trường Ô Nhiễm" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section19Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.9. Sử Dụng Thuốc" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section110Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.10. Một Số Lý Do Khác Khiến Mụn Kéo Dài Dai Dẳng" />
                  </ListItem>
                </List>
                
                <ListItem button onClick={() => scrollToSection(section2Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="2. 4 Cách Đối Phó Với Tình Trạng Da Mụn Dai Dẳng" />
                </ListItem>
                
                <List dense sx={{ pl: 4 }}>
                  <ListItem button onClick={() => scrollToSection(section21Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="2.1. Làm Sạch Da Đúng Cách" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section22Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="2.2. Chọn Sản Phẩm Chăm Sóc Da Phù Hợp" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section23Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="2.3. Điều Chỉnh Chế Độ Ăn Uống, Sinh Hoạt" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section24Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="2.4. Hạn Chế Tác Động Cơ Học Đến Da" />
                  </ListItem>
                </List>
                
                <ListItem button onClick={() => scrollToSection(section3Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="3. Tổng kết" />
                </ListItem>
              </List>
            </Paper>
            
            {/* Nội dung bài viết */}
            <Typography variant="body1" paragraph>
              Mụn là vấn đề da liễu phổ biến và khó chịu, gây ảnh hưởng lớn đến thẩm mỹ và tâm lý của nhiều người. Hiểu rõ nguyên nhân khiến da bị mụn dai dẳng là bước quan trọng để tìm ra giải pháp hiệu quả. Dưới đây là 9 nguyên nhân khiến da bị mụn dai dẳng và cách đối phó với tình trạng da mụn kéo dài, đừng bỏ lỡ nhé!
            </Typography>

            {/* Phần 1 */}
            <Box ref={section1Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                1. 9 Nguyên Nhân Khiến Da Bị Mụn Dai Dẳng
              </Typography>
              
              <Box ref={section11Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.1. Rối Loạn Nội Tiết
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Hormones:</strong> Sự thay đổi nội tiết tố, đặc biệt là androgen, có thể kích thích tuyến bã nhờn hoạt động mạnh mẽ hơn, dẫn đến tắc nghẽn lỗ chân lông và hình thành mụn.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Giai đoạn tuổi dậy thì, chu kỳ kinh nguyệt, mang thai và căng thẳng:</strong> Các giai đoạn này có thể làm tăng sản xuất dầu và gây ra mụn dai dẳng.
                </Typography>
              </Box>
              
              <Box ref={section12Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.2. Chăm Sóc Da Không Đúng Cách
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Sử dụng sản phẩm không phù hợp:</strong> Việc sử dụng mỹ phẩm không phù hợp với loại da, hoặc sản phẩm chứa các thành phần gây kích ứng có thể làm tình trạng mụn tồi tệ hơn.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Rửa mặt quá nhiều hoặc quá ít:</strong> Cả hai thói quen này đều có thể gây ra vấn đề. Rửa mặt quá nhiều có thể làm mất đi lớp dầu tự nhiên, trong khi rửa mặt quá ít có thể dẫn đến tích tụ bụi bẩn và dầu.
                </Typography>
              </Box>
              
              <Box ref={section13Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.3. Chế Độ Ăn Uống
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Thực phẩm có chỉ số glycemic cao:</strong> Các thực phẩm này, như bánh kẹo, nước ngọt và các sản phẩm từ bột mì tinh chế, có thể làm tăng mức insulin và kích thích sản xuất dầu.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Sản phẩm từ sữa:</strong> Một số nghiên cứu cho thấy rằng các sản phẩm từ sữa có thể liên quan đến việc tăng mụn ở một số người.
                </Typography>
              </Box>
              
              <Box ref={section14Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.4. Căng Thẳng
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Tăng cortisol:</strong> Căng thẳng làm tăng hormone cortisol, dẫn đến việc tăng sản xuất dầu và bùng phát mụn.
                </Typography>
              </Box>
              
              <Box ref={section15Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.5. Di Truyền
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Yếu tố di truyền:</strong> Nếu cha mẹ bạn từng bị mụn nặng, bạn cũng có nguy cơ cao hơn bị mụn dai dẳng.
                </Typography>
              </Box>
              
              <Box ref={section16Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.6. Thiếu Ngủ
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Giảm khả năng phục hồi da:</strong> Thiếu ngủ làm giảm khả năng phục hồi và tái tạo da, làm cho mụn khó lành hơn và dễ tái phát.
                </Typography>
              </Box>
              
              <Box ref={section17Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.7. Vi Khuẩn Propionibacterium Acnes
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Sự phát triển của vi khuẩn:</strong> Vi khuẩn Propionibacterium acnes trong lỗ chân lông có thể gây viêm và hình thành mụn.
                </Typography>
              </Box>
              
              <Box ref={section18Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.8. Môi Trường Ô Nhiễm
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Tiếp xúc với chất ô nhiễm:</strong> Môi trường ô nhiễm có thể làm tắc nghẽn lỗ chân lông và dẫn đến mụn.
                </Typography>
              </Box>
              
              <Box ref={section19Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.9. Sử Dụng Thuốc
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Một số loại thuốc:</strong> Các loại thuốc như corticosteroid, lithium, và một số thuốc chống trầm cảm có thể gây mụn.
                </Typography>
              </Box>
              
              <Box ref={section110Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.10. Một Số Lý Do Khác Khiến Mụn Kéo Dài Dai Dẳng
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Dụng Cụ Trang Điểm Không Sạch Sẽ:</strong> Dụng cụ trang điểm như cọ, mút nếu không được làm sạch đúng cách có thể trở thành nơi sinh sôi của vi khuẩn, gây nhiễm khuẩn da và mụn.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Không Tẩy Trang Đúng Cách:</strong> Việc không tẩy trang hoặc tẩy trang không sạch sẽ gây tắc nghẽn lỗ chân lông do tồn dư mỹ phẩm và bụi bẩn, dẫn đến mụn.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Tiếp Xúc Thường Xuyên Với Tay Bẩn:</strong> Thói quen chạm tay lên mặt thường xuyên có thể đưa vi khuẩn và bụi bẩn từ tay lên da, gây ra mụn.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Không Uống Đủ Nước:</strong> Da thiếu nước có thể trở nên khô và dễ kích ứng, dẫn đến việc sản xuất dầu nhiều hơn và gây mụn.
                </Typography>
              </Box>
            </Box>

            {/* Phần 2 */}
            <Box ref={section2Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                2. 4 Cách Đối Phó Với Tình Trạng Da Mụn Dai Dẳng
              </Typography>
              
              <Box ref={section21Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  2.1. Làm Sạch Da Đúng Cách
                </Typography>
                <Typography variant="body1" paragraph>
                  Làn da mụn cần các loại sữa rửa mặt dịu nhẹ, phù hợp với nhu cầu làn da để tránh tình trạng nhờn rít sau sử dụng, hạn chế viêm mụn trứng cá.
                </Typography>
                <Typography variant="body1" paragraph>
                  Chú ý làm sạch da sau khi đổ nhiều dầu, mồ hôi. Theo lời khuyên của các chuyên da, tiết mồ hôi dễ sẽ tạo điều kiện thuận lợi cho vi khuẩn gây mụn phát triển mạnh mẽ. Vì vậy, bạn cần vệ sinh da đúng cách, tránh để lỗ chân lông bị bít tắc vi khuẩn tích tụ và gây mụn ngày càng nhiều.
                </Typography>
                <Typography variant="body1" paragraph>
                  Ngoài ra, nếu gặp phải tình trạng mụn lưng dai dẳng, hãy thử chọn các loại sữa tắm có thành phần tẩy da chết AHA/BHA để làm sạch sâu, loại bỏ bã nhờn, bụi bẩn gây bít tắc nang lông.
                </Typography>
              </Box>
              
              <Box ref={section22Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  2.2. Chọn Sản Phẩm Chăm Sóc Da Phù Hợp
                </Typography>
                <Typography variant="body1" paragraph>
                  Da mụn thường đi kèm với hiện tượng đổ dầu nhiều, bác sĩ da liễu khuyên bạn nên lựa chọn các sản phẩm chăm da lành tính, không chứa dầu khoáng, không có thành phần gây bít tắc lỗ chân lông để hạn chế bùng mụn. Ưu tiên sử dụng mỹ phẩm có kết cấu mỏng nhẹ, thẩm thấu nhanh, không gây nhờn rít khi sử dụng.
                </Typography>
                <Typography variant="body1" paragraph>
                  Các sản phẩm chứa chiết xuất vitamin A như retinoids có thể được sử dụng để thông thoáng lỗ chân lông, ngăn ngừa mụn. Tuy nhiên, hoạt chất này có thể gây ra một số tác dụng phụ như khiến da kích ứng, bong tróc… Do đó, tốt nhất bạn nên tham khảo ý kiến của các chuyên gia, bác sĩ trước khi sử dụng.
                </Typography>
              </Box>
              
              <Box ref={section23Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  2.3. Điều Chỉnh Chế Độ Ăn Uống, Sinh Hoạt
                </Typography>
                <Typography variant="body1" paragraph>
                  Cần tránh tiêu thụ các loại thực phẩm cay nóng, chiên rán nhiều dầu mỡ, đồ ngọt,… vì chúng dễ khiến tình trạng mụn trở nên tồi tệ hơn. Thay vào đó, hãy ăn nhiều chất xơ như rau xanh, ngủ đủ giấc và uống đủ nước… để giúp cơ thể khỏe mạnh, từ đó giúp làn da khỏe đẹp từ bên trong.
                </Typography>
              </Box>
              
              <Box ref={section24Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  2.4. Hạn Chế Tác Động Cơ Học Đến Da
                </Typography>
                <Typography variant="body1" paragraph>
                  Hạn chế thói quen nặn mụn tại nhà không đúng cách vì dễ làm mụn lây lan sang những vị trí khác hoặc tái đi tái lại ở những vùng như cằm, viền hàm. Nếu tình trạng mụn trứng cá trở nên trầm trọng, cách tốt nhất là bạn đi thăm khám bác sĩ chuyên gia khoa liễu để được kê đơn một số loại thuốc giúp điều trị mụn hiệu quả.
                </Typography>
              </Box>
            </Box>

            {/* Phần 3 - Tổng kết */}
            <Box ref={section3Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                3. Tổng kết
              </Typography>
              <Typography variant="body1" paragraph>
                Để điều trị mụn hiệu quả, cần xác định đúng nguyên nhân và có biện pháp điều trị phù hợp. Điều này có thể bao gồm thay đổi thói quen chăm sóc da, điều chỉnh chế độ ăn uống, giảm căng thẳng, và trong một số trường hợp, cần có sự tư vấn từ bác sĩ chuyên khoa da liễu để tìm ra phương pháp điều trị thích hợp nhất.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Blog5;

