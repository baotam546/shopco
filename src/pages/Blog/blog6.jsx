import { Box, Container, Typography, Paper, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useRef } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';

function Blog6() {
  useEffect(() => {
    // Cuộn lên đầu trang khi component được tải
    window.scrollTo(0, 0);
  }, []);

  // Tạo refs cho từng phần để điều hướng
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section31Ref = useRef(null);
  const section32Ref = useRef(null);
  const section4Ref = useRef(null);
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
            src="/images/Top 7+.webp"
            alt="Top 7 Sản Phẩm Tẩy Tế Bào Chết Vật Lý Dành Cho Người Mới Bắt Đầu"
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
              Top 7 Sản Phẩm Tẩy Tế Bào Chết Vật Lý Dành Cho Người Mới Bắt Đầu
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
                  <ListItemText primary="1. Tẩy tế bào chết vật lý là gì?" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section2Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="2. Phương pháp tẩy tế bào chết vật lý phù hợp với làn da nào?" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section3Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="3. 2 Loại tẩy da chết vật lý phổ biến hiện nay" />
                </ListItem>
                
                <List dense sx={{ pl: 4 }}>
                  <ListItem button onClick={() => scrollToSection(section31Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.1. Tẩy tế bào chết vật lý dạng hạt SCRUB" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section32Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.2. Tẩy tế bào chết vật lý dạng Peeling Gel" />
                  </ListItem>
                </List>
                
                <ListItem button onClick={() => scrollToSection(section4Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="4. REVIEW 7 sản phẩm tẩy tế bào chết vật lý làm sạch sâu, đều màu da (2024)" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section5Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="5. Các bước tẩy tế bào chết vật lý đúng và hiệu quả" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section6Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="6. Một số lưu ý khi tẩy da chết vật lý mà bạn cần biết" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section7Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="7. Tổng kết" />
                </ListItem>
              </List>
            </Paper>
            
            {/* Nội dung bài viết */}
            <Typography variant="body1" paragraph>
              Đối với những người mới bắt đầu, việc khám phá thế giới phức tạp của làm đẹp có thể trở nên mơ hồ và đầy thách thức. Tuy nhiên, với sự hiểu biết cơ bản và các hướng dẫn đúng đắn, việc tẩy tế bào chết vật lý có thể trở thành một phần dễ dàng và hấp dẫn trong quy trình chăm sóc da hàng ngày.
            </Typography>
            <Typography variant="body1" paragraph>
              Trong bài viết này, hãy cùng GUO tìm hiểu về Top 7 sản phẩm Tẩy Tế Bào Chết Vật Lý dành cho những bạn mới bắt đầu. Đây không chỉ đơn thuần là một bước trong chăm sóc da, mà còn là một cơ hội để bạn tạo nên sự kết nối với làn da của mình và tạo nên nền tảng cho quy trình làm đẹp hoàn hảo hơn đấy nhé!
            </Typography>

            {/* Phần 1 */}
            <Box ref={section1Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                1. Tẩy tế bào chết vật lý là gì?
              </Typography>
              <Typography variant="body1" paragraph>
                Một phương pháp khác để tẩy tế bào da chết khá phổ biến là tẩy tế bào chết vật lý hay còn gọi là tẩy tế bào chết cơ học. Đây là cách loại bỏ tế bào chết trên da bằng cách ma sát, sau đó các tế bào chết sẽ bị cuốn trôi mà ít đem lại kích ứng da.
              </Typography>
              <Typography variant="body1" paragraph>
                Có 2 dạng tẩy tế bào chết phương pháp vật lý là dùng hạt (hay còn gọi là scrub) và dùng gel (hay còn gọi là peeling gel). Nhìn chung tẩy da chết vật lý là loại tẩy tế bào chết có chứa những hạt mịn, khi kết hợp cùng một vài động tác massage nhẹ nhàng trên da chúng sẽ có tác dụng loại bỏ các lớp tế bào da chết trên cùng của bề mặt da.
              </Typography>
            </Box>
            
            {/* Phần 2 */}
            <Box ref={section2Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                2. Phương pháp tẩy tế bào chết vật lý phù hợp với làn da nào?
              </Typography>
              <Typography variant="body1" paragraph>
                Phương pháp tái tạo da bằng cách tẩy tế bào chết hóa học hay vật lý đều có ưu và nhược điểm riêng. Do các tính chất riêng biệt của 2 phương pháp, bạn cũng nên cân nhắc và lựa chọn phương pháp tẩy tế bào chết phù hợp với loại da, tình trạng da và nhu cầu của bản thân.
              </Typography>
              <Typography variant="body1" paragraph>
                Tẩy tế bào da chết vật lý phù hợp nhất với da toàn thân, bàn chân, đầu gối, khuỷu tay,… Đây là những vùng da ít bị ảnh hưởng bởi tác động mạng như chà xát lâu. Tuy nhiên, để tẩy tế bào chết vật lý cho các vùng da nhạy cảm khác như da mặt, bạn nên ưu tiên các sản phẩm có tính dịu nhẹ.
              </Typography>
              <Typography variant="body1" paragraph>
                Nếu bạn sở hữu làn da thường, da dầu tới da hỗn hợp thiên dầu, bạn cũng nên sử dụng các sản phẩm tẩy da chết vật lý. Lưu ý, không áp dụng tẩy tế bào chết bằng cách thức vật lý khi đang trong tình trạng bị mụn trứng cá và khi da đang bị tổn thương. Khi chà xát quá mạnh lên làn da đang bị tổn thương sẽ có thể gây trầm trọng hơn các tình trạng viêm nhiễm.
              </Typography>
            </Box>

            {/* Phần 3 */}
            <Box ref={section3Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                3. 2 Loại tẩy da chết vật lý phổ biến hiện nay
              </Typography>
              
              <Box ref={section31Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.1. Tẩy tế bào chết vật lý dạng hạt SCRUB
                </Typography>
                <Typography variant="body1" paragraph>
                  Tẩy tế bào chết dạng hạt scrub thường chứa một số thành phần thô từ thiên nhiên như các loại hạt, thân hoặc lá đã được nghiền nhỏ. Massage các hạt này không chỉ giúp làm sạch mà còn giúp kích thích lưu thông tuần hoàn máu, đem lại làn da săn chắc và mịn màng ngay sau đó.
                </Typography>
                <Typography variant="body1" paragraph>
                  Tẩy tế bào chết dạng scrub sẽ phù hợp cho những bạn da dầu, với lỗ chân lông to. Da nhạy cảm cũng có thể sử dụng được, nhưng cần lưu ý chọn thành phần có kết cấu hạt nhỏ, chất kem mịn hoặc gel. Tuy nhiên cũng không nên chà sát lâu và nhiều lần do sẽ có cảm giác hơi đau nhẹ, các hạt nhỏ với góc sắc có thể gây xước da.
                </Typography>
              </Box>
              
              <Box ref={section32Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.2. Tẩy tế bào chết vật lý dạng Peeling Gel
                </Typography>
                <Typography variant="body1" paragraph>
                  Peeling gel là dạng gel lỏng khi massage trên da sẽ nhanh chóng kết vón lại thành những vụn nhỏ. Tẩy tế bào chết dạng Gel dùng phản ứng giữa các sợi Polymer trong sản phẩm và dầu (bã nhờn trên da), vón lại thành các cục nhỏ.
                </Typography>
                <Typography variant="body1" paragraph>
                  Khi massage theo hướng lăn tròn các sản phẩm dạng này lên bề mặt da đồng thời lấy đi dầu thừa trong lỗ chân lông. Nhờ vậy mà sau khi tẩy da chết, bạn sẽ thấy da mượt và sáng sủa hơn hẳn. Peeling Gel làm sạch nhẹ nhàng, êm ái, không gây xước bề mặt da như scrub. Chính vì vậy đây là dạng tẩy tế bào chết Peeling Gel này sẽ phù hợp với làn da nhạy cảm, da kích ứng hoặc bị mụn.
                </Typography>
              </Box>
            </Box>

            {/* Phần 4 - Review 7 sản phẩm */}
            <Box ref={section4Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                4. REVIEW 7 sản phẩm tẩy tế bào chết vật lý làm sạch sâu, đều màu da (2024)
              </Typography>
              
              <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                Tẩy da chết vật lý dạng hạt xương rồng Huxley Scrub Mask
              </Typography>
              <Typography variant="body1" paragraph>
                Nhờ vào công thức độc quyền thuần chiết xuất xương rồng hữu cơ, đồng thời được tạo ra bởi quy trình khép kín và nguyên liệu an toàn, lành tính. Từ đó sản phẩm tẩy tế bào chết Huxley mang đến cho người dùng làn da tươi tắn, mịn màng chinh phục được ngay cả những khách hàng khó tính nhất.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Thành phần chính:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♣ Chiết xuất chính từ cây xương rồng và tinh dầu xương rồng giúp tẩy da chết, loại bỏ lớp sừng già cỗi. Tinh dầu hạt xương rồng giúp dưỡng ẩm tối ưu, chống oxy hoá</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Rong biển và dưa chuột giúp cấp và giữ ẩm cho làn da. Và chiết xuất quả mướp mịn giúp tăng thêm lượng nước cho da. Đồng thời giúp khóa ẩm.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Bột vỏ óc chó cũng góp phần làm cho các tế bào chết được loại bỏ nhanh hơn. Nhưng vẫn giữ được cảm giác mềm mịn và dịu nhẹ đối với da sau quá trình làm sạch.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Ưu điểm</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♥ Tuýp nhỏ rất tiện dụng để mua test thử hoặc mang đi du lịch. Khả năng làm sạch da, tẩy tế bào chết xuất sắc</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Do có thành phần xương rồng và nha đam nên mang lại cảm giác thanh mát da sau khi tẩy tế bào chết cho da.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Da sau khi sử dụng sẽ có hiệu ứng trắng sáng tức thì. Tất nhiên, hiệu ứng lâu dài thì cần sử dụng đều đặn và thường xuyên</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Huxley Scrub Mask sử dụng được đối với mọi loại da và tính trạng da khác nhau, thoải mái cho chị em an tâm sử dụng.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Giá thành:</strong> 93.000 VNĐ/120g
              </Typography>
              
              <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2, mt: 4 }}>
                Rosette Peeling Gel tẩy tế bào chết vật lý cho da dầu mụn
              </Typography>
              <Typography variant="body1" paragraph>
                Các sản phẩm của Rosette hướng đến phân khúc bình dân nên em Rosette Peeling Gel cũng đi kèm mức giá siêu "mềm mại" nhưng vẫn được đánh giá cao về chất lượng nhờ quy trình sản xuất nghiêm ngặt.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Thành phần nổi bật:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♣ Chiết xuất sữa đậu nành (Soy Milk Extract) có thể làm da mềm mịn, phục hồi và nhanh chóng tái sinh tế bào da mới, tránh tình trạng khô căng hay bong tróc.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ AHA được chiết xuất từ trái cây tạo có khả năng loại bỏ bụi bẩn, làm mờ các vết thâm sạm và làm đều màu da. Đồng thời, giúp loại bỏ mụn thâm, mụn đầu đen, trả lại làn da mịn màng và rạng rỡ.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Allantoin có công dụng làm trắng, đều màu da hiệu quả.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Chiết xuất lá trà giúp tẩy da chết nhẹ nhàng và tăng độ đàn hồi cho da.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Ưu điểm</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♥ Với chiết xuất từ axit trái cây, sản phẩm nhanh chóng lấy đi các vảy sừng cứng mà không gây trầy xước, làm mềm da, góp phần giúp da ẩm và giữ lớp trang điểm bền đẹp hơn.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Làm sạch sâu bên trong lỗ chân lông, giảm bớt mụn cám, mụn đầu đen, trả lại làn da sáng và mịn màng.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Giúp da hấp thụ tốt hơn các dưỡng chất từ kem dưỡng da, các sản phẩm chăm sóc da ở các bước sau.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Phù hợp cho cả phần da ngực, đầu gối, gót chân… Các tình trạng như bít tắc lỗ chân lông, mụn đầu đen, nhiều bã nhờn và da tối màu sẽ được cải thiện đáng kể.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Bổ sung các dưỡng chất tốt, tái tạo tế bào da mới, se khít lỗ chân lông và giảm thiểu các nếp nhăn.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Mùi hương dễ chịu, tạo cảm giác thư giãn và thích thú khi sử dụng.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Rosette Peeling Gel phù hợp với làn da dầu và da hỗn hợp thiên dầu. Ngoài ra, em này cũng phù hợp với da khô, hỗn hợp thiên khô, da thường và da nhạy cảm.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Giá thành:</strong> 150.000 VNĐ/ 120g
              </Typography>
              
              <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2, mt: 4 }}>
                Tẩy da chết vật lý Natural Aqua Gel
              </Typography>
              <Typography variant="body1" paragraph>
                Tẩy da chết Natural Aqua Gel là sản phẩm của thương hiệu đình đám Cure đến từ xứ sở mặt trời mọc. Đây là một sản phẩm được khách hàng yêu thích tại thị trường mỹ phẩm Nhật Bản.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Thành phần nổi bật:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♣ Nước tinh khiết là thành phần vô cùng quan trọng trong bảng thành phần của tẩy da chết Cure Natural Aqua Gel, chiếm tới 91% trong thành phần sản phẩm.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Bên cạnh đó, còn có chứa Glycerin, một hoạt chất cần thiết để giữ độ ẩm cho da. Nhờ thành phần này mà tẩy da chết Cure không gây khô da sau khi sử dụng.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Dicocodimonium chloride và steartrimonium có trong bảng thành phần là chất liên kết khiến lớp gel vón cục và loại bỏ những tế bào chết trên da hiệu quả mà không gây hại đến làn da của bạn.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Chiết xuất lô hội, bạch quả, lá hương thảo giúp cấp ẩm, kháng khuẩn, ngăn ngừa tàn nhang và giúp tái tạo làn da hiệu quả.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Ưu điểm</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♥ Sản phẩm được chiết xuất từ các thành phần tự nhiên và sạch, đảm bảo an toàn và dịu nhẹ đối với mọi làn da.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Có thể sử dụng được cho da nhạy cảm và bà bầu. Không chứa chất tạo màu, tạo mùi, không cồn hóa học ảnh hưởng đến sức khỏe.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Loại bỏ nhẹ nhàng lớp da chết, bụi bẩn và mồ hôi mà không làm mỏng da hay khô rát. Da sáng mịn hơn sau một thời gian sử dụng và không gây ra mụn.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Sản phẩm tẩy tế bào chết Cure Natural Aqua Gel phù hợp với tất cả các loại da mặt, đặc biệt kể cả với những bạn có làn da nhạy cảm.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Giá thành:</strong> 580.000 VNĐ/250g
              </Typography>

              <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2, mt: 4 }}>
                Tẩy da chết vật lý Cocoon 150ml cho da mặt
              </Typography>
              <Typography variant="body1" paragraph>
                Cocoon là thương hiệu Organic bởi các sản phẩm được làm từ nguyên liệu thiên nhiên như cà phê, bí đao, dừa, oliu,… đây là những nguyên liệu phổ biến tại Việt Nam.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Thành phần chính:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♣ 100% cà phê nguyên chất xay nhuyễn được sàng lọc giúp tẩy sạch lớp da chết một cách nhẹ nhàng mà không hề làm rát hay kích ứng da. Ngoài ra cafein là một chất có tác dụng chống oxy hóa rất mạnh, có khả năng làm mờ vết thâm, đều màu da, dưỡng sáng da tự nhiên.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Bơ ca cao Tiền Giang chứa khoảng 50-60% các loại axit béo, vitamin E và các vitamin nhóm B có khả năng giữ ẩm cao, làm cho làn da của bạn mềm mại, căng bóng và giúp cải thiện những vùng da bị chai sần.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Dầu hoa rum chứa hơn 80% omega 6 rất phù hợp cho việc phục hồi và cân bằng hàng rào tự nhiên của da, giúp da mượt màng mà khỏe mạnh hơn.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Vitamin E lấy hoàn toàn từ dầu đậu nành không biến đổi gen (Non-GMO) mang lại rất nhiều tác dụng tốt: chống oxy hóa, chống lão hóa và giúp da tránh được những tác nhân xấu từ bên ngoài như tia UV, khói bụi.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Sản phẩm tẩy da chết vật lý mặt Cocoon cam kết không chứa cồn, sulfate, dầu khoáng, paraben, vi hạt nhựa và tuyệt đối không thử nghiệm trên động vật.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Ưu điểm</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♥ Tẩy sạch hoàn toàn lớp da chết trên mặt. Mang lại làn da mềm mượt, mịn màng. Giúp làn da dần trở nên sáng mịn và đều màu</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Cấp ẩm cho da, không gây khô da sau khi sử dụng</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Hỗ trợ làm chậm quá trình lão hóa, tăng khả năng đàn hồi cho da</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Sản phẩm tẩy da chết vật lý Cocoon cà phê có thể sử dụng cho nhiều loại da kể cả da nhạy cảm.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Giá thành:</strong> 165.000 VNĐ/150ml
              </Typography>

              <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2, mt: 4 }}>
                Tẩy da chết vật lý ngăn ngừa mụn Eucerin Pro Acne Scrub
              </Typography>
              <Typography variant="body1" paragraph>
                Eucerin là một thương hiệu mỹ phẩm đến từ Đức, mang đến các giải pháp chuyên nghiệp, hỗ trợ các vấn đề liên quan đến da như mụn, kích ứng, làm sáng, trị thâm. Một trong những sản phẩm nổi bật và được tin dùng là kem tẩy tế bào chết Eucerin.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Thành phần nổi bật:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♣ Các vi hạt Pro-refining tác động trực tiếp đến nang lông để thông thoáng lỗ chân lông, giảm tình trạng mụn đầu đen và vết thâm do mụn để lại.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Axit Lactic (AHA có nguồn gốc từ sữa) giúp tác động lên bề mặt da, lấy đi những tế bào chết và loại bỏ lớp da sừng và giúp làm đều màu da, sáng da.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Các hạt Scrub lấy đi các tế bào chết ở trên da nhưng không làm trầy xước da bởi các hạt này có kích thước siêu nhỏ, chúng chỉ làm bong lớp sừng da chết để từ đó loại bỏ chúng khỏi bề mặt.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Ưu điểm</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♥ Lấy đi những tạp chất, cặn trang điểm, bụi bẩn và bã nhờn dư thừa ở trên da. Giúp loại bỏ những tế bào da cũ, bong tróc và cằn cỗi.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Không chứa dầu, không gây kích ứng da khi sử dụng</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Thành phần Lactic Acid giúp làm sạch dịu nhẹ, giảm các tác nhân gây mụn đầu trắng và mụn đầu đen.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Phù hợp cho những cô nàng có làn da nhờn, mụn</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Tẩy sạch sâu, loại bỏ lớp tế bào chết, bã nhờn mà không gây khô da. Giúp lỗ chân lông thông thoáng và sạch sẽ, hạn chế sự phát triển của những vi khuẩn gây mụn.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Nuôi dưỡng làn da từ sâu bên trong để giúp da luôn căng mướt và sáng khỏe. Bổ sung độ ẩm và trả lại làn da mềm mại, mịn màng tự nhiên.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Đây chính là sự lựa chọn hoàn hảo dành cho da mặt và toàn thân thuộc da nhạy cảm, da dầu, da mụn, da khô, da hỗn hợp</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Giá thành:</strong> 389.000 VNĐ/100ml
              </Typography>

              <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2, mt: 4 }}>
                Tẩy tế bào chết Clinique 7 Day Scrub Cream Rinse-Off Formula
              </Typography>
              <Typography variant="body1" paragraph>
                Clinique là thương hiệu thuộc tập đoàn dược mỹ phẩm đình đám Estee Lauder nổi tiếng với những dòng sản phẩm đa dạng với những công thức hiệu quả giúp giải quyết các vấn đề về da cũng như thử nghiệm lâm sàng không gây dị ứng hay có tác dụng phụ. Tẩy Tế Bào Chết Clinique 7 Day ngay từ nhừng ngày đầu tiên xuất hiện đã rất được ưa chuộng tại Việt Nam.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Thành phần nổi bật:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♣ Bisabolol là hoạt chất tự nhiên được tìm thấy trong thành phần hoa cúc, có cơ chế hoạt động như một chất chống oxy hóa, góp phần giữ cho làn da mịn màng, trắng sáng, giảm thiểu nếp nhăn và sẹo do mụn để lại.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Sản phẩm phù hợp với mọi loại da, đặc biệt là da dầu và da hỗn hợp Silica vi thể được xem là một dạng cấu trúc quý và cao cấp, giúp cải thiện bề mặt và giảm nếp nhăn rõ rệt trên da</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Cocos Nucifera Oil (Coconut Oil) ngăn ngừa các dấu hiệu lão hóa, bảo vệ da trước các vấn đề môi trường và tuổi tác.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Glyceryl Stearate giúp cho da mềm mịn, không gây bí bách hay bít tắc lỗ chân lông.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Ưu điểm nổi bật:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♥ Không chứa Parabens, Sulfates và Phthalates. An toàn cho cả những làn da nhạy cảm, dễ bị kích ứng.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Thúc đẩy quá trình tạo tế bào da mới. Giảm nếp nhăn và ngăn ngừa dấu hiệu lão hóa trên da. Giải quyết tình trạng bọng dưới mắt.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Giúp làn da được nghỉ ngơi, thư giãn làm cho các bước chăm sóc da tiếp theo hiệu quả hơn.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Giá thành:</strong> 250.000 VNĐ/30ml
              </Typography>

              <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2, mt: 4 }}>
                Tẩy tế bào chết da La Roche-Posay Ultra Fine Scrub Sensitive Skin
              </Typography>
              <Typography variant="body1" paragraph>
                La Roche-Posay Ultra Fine Scrub với công thức dịu nhẹ, an toàn cho làn da sẽ nhẹ nhàng loại bỏ lớp da chết trên bề mặt da, đồng thời hỗ trợ cải thiện sắc tố da, mang đến cho người dùng làn da mềm mượt và trắng sáng.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Thành phần chính:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♣ Nước khoáng nóng La Roche-Posay được biết đến với khả năng làm dịu và giảm kích ứng cho da nhạy cảm. Nó có thể giúp giảm tình trạng kích ứng do tẩy da chết.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Hạt nhựa Polyethylene là hạt mịn được sử dụng trong sản phẩm để tẩy đi lớp tế bào da chết và bụi bẩn ở bề mặt da.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Glycerin giữ nước tự nhiên, giúp cung cấp độ ẩm cho da và giữ cho da không bị khô sau khi tẩy da chết. Kết hợp với</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Panthenol (Pro-Vitamin B5) cung cấp độ ẩm cho da và giúp làm dịu tình trạng da kích ứng.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♣ Muối natri giúp tẩy da chết bằng cách loại bỏ tế bào da chết ở bề mặt da.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Ưu điểm nổi bật:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>♥ Chất kem màu trắng đục, gồm nhiều hạt nhỏ giúp tẩy đi dạ chết hiệu quả mà vẫn rất êm dịu khi massage lên da mặt.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Kháng khuẩn, chống viêm, bảo vệ da hiệu quả.</Box>
                  <Box component="li" sx={{ mb: 1 }}>♥ Cung cấp độ ẩm cho làn da ẩm mượt, không bị khô căng.</Box>
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Giá thành:</strong> 450.000 VNĐ/ 50ml
              </Typography>
            </Box>

            {/* Phần 5 */}
            <Box ref={section5Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                5. Các bước tẩy tế bào chết vật lý đúng và hiệu quả
              </Typography>
              <Typography variant="body1" paragraph>
                Tẩy da chết nói chung và tẩy da chết vật lý nói riêng cần có những quy trình thực hiện và chăm sóc da đúng cách để tránh tình trạng hư da. Các quy trình tẩy tế bào chết vật lý có thể chia thành các bước nhỏ sau:
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>➤ Bước 1:</strong> Tẩy trang sạch và rửa lại mặt với sữa rửa mặt. Sau đó, lau khô mặt bằng khăn.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>➤ Bước 2:</strong> Cho một lượng nhỏ sản phẩm ra tay chà nhẹ trước khi đưa lên mặt massage nhẹ nhàng. Trong vài phút, các tế bào chết sẽ bong ra. Bạn cũng nên tuân theo hướng dẫn trên sản phẩm, dùng áp lực nhẹ nhàng và các động tác mát-xa nhẹ để không gây tổn thương da.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>➤ Bước 3:</strong> Rửa sạch da mặt lại bằng nước. Tần suất tẩy da chết vật lý nên sử dụng 2 lần/tuần.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>➤ Bước 4:</strong> Sau khi tẩy tế bào chết bằng phương pháp vật lý, nên sử dụng dưỡng ẩm để cung cấp độ ẩm cho da. Điều này giúp da trở nên mềm mịn và hạn chế tình trạng da khô.
              </Typography>
            </Box>

            {/* Phần 6 */}
            <Box ref={section6Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                6. Một số lưu ý khi tẩy da chết vật lý mà bạn cần biết
              </Typography>
              <Typography variant="body1" paragraph>
                – Việc sử dụng áp lực quá mạnh hoặc các công cụ tẩy tế bào chết không thích hợp có thể gây tổn thương da. Điều này có thể dẫn đến việc da trở nên kích ứng, đỏ rát hoặc thậm chí là tác động tiêu cực lâu dài đến cấu trúc da.
              </Typography>
              <Typography variant="body1" paragraph>
                – Ngoài ra, đối với làn da có vấn đề mụn, việc sử dụng sản phẩm tẩy tế bào chết không đúng cách có thể làm tăng nguy cơ tổn thương da và gây kích ứng, gây thêm vấn đề mụn.
              </Typography>
              <Typography variant="body1" paragraph>
                – Việc sử dụng sản phẩm tẩy tế bào chết bằng phương pháp vật lý quá thường xuyên hoặc không đều đặn có thể gây kích ứng da. Da cần thời gian để tự phục hồi, do đó, việc thực hiện tẩy tế bào chết quá đặc biệt không phù hợp.
              </Typography>
              <Typography variant="body1" paragraph>
                – Đặc biệt, nếu như bạn có mong muốn điều trị từ sâu bên trong da thì tẩy da chết vật lý không đủ mạnh để xử lý các vấn đề da nghiêm trọng hơn như vết thâm, sẹo hay nếp nhăn. Trong những tình huống như vậy, bạn có thể cần tới các phương pháp tẩy tế bào chết khác hoặc tư vấn từ chuyên gia da liễu.
              </Typography>
            </Box>

            {/* Phần 7 - Tổng kết */}
            <Box ref={section7Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                7. Tổng kết
              </Typography>
              <Typography variant="body1" paragraph>
                Đối với những người mới bắt đầu, việc tiếp cận với việc tẩy tế bào chết vật lý có thể mang đến sự phân vân và lo lắng. Hãy luôn nhớ rằng quá trình chăm sóc da là một hành trình dần dần hiểu biết về cơ cấu và nhu cầu của làn da. Với sự tỉ mỉ và kiên nhẫn, bạn sẽ có khả năng điều chỉnh phương pháp tẩy tế bào chết phù hợp với da của bạn và tận hưởng sự cải thiện rõ rệt về làn da. Hy vọng bài viết đã đem đến cho bạn nhiều thông tin hữu ích và giúp bạn chọn được sản phẩm phù hợp cho làn da nhé!
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Blog6;

