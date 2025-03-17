import { Box, Container, Typography, Paper, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useRef } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';

function Blog1() {
  useEffect(() => {
    // Cuộn lên đầu trang khi component được tải
    window.scrollTo(0, 0);
  }, []);

  // Tạo refs cho từng phần để điều hướng
  const section1Ref = useRef(null);
  const section11Ref = useRef(null);
  const section12Ref = useRef(null);
  const section13Ref = useRef(null);
  const section2Ref = useRef(null);
  const section21Ref = useRef(null);
  const section22Ref = useRef(null);
  const section3Ref = useRef(null);
  const section31Ref = useRef(null);
  const section32Ref = useRef(null);
  const section4Ref = useRef(null);
  const section41Ref = useRef(null);
  const section42Ref = useRef(null);
  const section5Ref = useRef(null);

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
            src="/images/bikip.webp"
            alt="Bí kíp chăm da dầu mụn nhạy cảm"
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
              Bí Kíp Chăm Da Dầu Mụn Nhạy Cảm Chuẩn Khoa Học (2024)
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
                  <ListItemText primary="1. Nguyên nhân, đặc điểm và cách chăm sóc da dầu" />
                </ListItem>
                
                <List dense sx={{ pl: 4 }}>
                  <ListItem button onClick={() => scrollToSection(section11Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.1. Nguyên nhân da đổ dầu" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section12Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.2. Đặc điểm da dầu" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section13Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="1.3. Cách chăm sóc làn da dầu" />
                  </ListItem>
                </List>
                
                <ListItem button onClick={() => scrollToSection(section2Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="2. Phân loại da dầu, mụn và cách chăm sóc" />
                </ListItem>
                
                <List dense sx={{ pl: 4 }}>
                  <ListItem button onClick={() => scrollToSection(section21Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="2.1. Phân loại da dầu mụn" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section22Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="2.2. Cách chăm sóc da dầu mụn" />
                  </ListItem>
                </List>
                
                <ListItem button onClick={() => scrollToSection(section3Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="3. Nguyên nhân và chăm da dầu mụn nhạy cảm" />
                </ListItem>
                
                <List dense sx={{ pl: 4 }}>
                  <ListItem button onClick={() => scrollToSection(section31Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.1. Nguyên nhân dẫn đến làn da nhạy cảm" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section32Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="3.2. Cách giải quyết" />
                  </ListItem>
                </List>
                
                <ListItem button onClick={() => scrollToSection(section4Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="4. Thâm mụn" />
                </ListItem>
                
                <List dense sx={{ pl: 4 }}>
                  <ListItem button onClick={() => scrollToSection(section41Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="4.1. Nguyên nhân gây thâm mụn" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section42Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="4.2. Cách giải quyết thâm mụn" />
                  </ListItem>
                </List>
                
                <ListItem button onClick={() => scrollToSection(section5Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="5. Tổng kết" />
                </ListItem>
              </List>
            </Paper>
            
            {/* Nội dung bài viết */}
            <Typography variant="body1" paragraph>
              Da dầu mụn nhạy cảm là một trong những làn da "đỏng đảnh" khó chiều và cần một chế độ chăm sóc đặc biệt. Để làm được điều đó hiệu quả, bạn cần hiểu rõ về nguyên nhân và đặc điểm làn da này. Nếu bạn đang gặp khó khăn trong việc chăm da dầu mụn nhạy cảm thì bài viết sau của GUO sẽ hướng dẫn chi tiết các bước skincare đơn giản mà hiệu quả nhất. Đừng bỏ lỡ nhé!
            </Typography>

            {/* Phần 1 */}
            <Box ref={section1Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                1. Nguyên nhân, đặc điểm và cách chăm sóc da dầu
              </Typography>
              
              <Box ref={section11Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.1. Nguyên nhân da đổ dầu
                </Typography>
                <Typography variant="body1" paragraph>
                  Da dầu là loại da phổ biến của người châu Á. Nguyên nhân chủ yếu khiến da đổ dầu là do di truyền, khí hậu nóng ẩm, sự thay đổi hoocmon như dậy thì hay mang thai…
                </Typography>
              </Box>
              
              <Box ref={section12Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.2. Đặc điểm da dầu
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>Da mặt nhìn bóng nhờn, do việc hoạt động quá mức của các tuyến bã gây nên.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Lỗ chân lông của bạn sẽ to ra, rõ hơn ở vùng chữ T (mũi, cằm và trán)</Box>
                    <Box component="li" sx={{ mb: 1 }}>Dễ bị nổi mụn viêm do bã nhờn được tiết ra quá mức, làm tắc nghẽn lỗ chân lông.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Da xuất hiện mụn đầu đen được tạo ra bởi bã nhờn dư thừa ở đáy nang lông của da.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Da của bạn luôn cảm thấy nhờn rít</Box>
                    <Box component="li" sx={{ mb: 1 }}>Da có xu hướng xuống tông và xỉn màu khi về chiều</Box>
                    <Box component="li" sx={{ mb: 1 }}>Lúc nổi mụn cũng khó trị khỏi hơn một số nền da khác (vì bã nhờn, da chết, dầu thừa vốn là điều kiện lí tưởng để vi khuẩn P.Acnes phát triển).</Box>
                  </Box>
                </Typography>
              </Box>
              
              <Box ref={section13Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  1.3. Cách chăm sóc làn da dầu
                </Typography>
                <Typography variant="body1" paragraph>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>1. Làm sạch tốt</Typography>
                  <Typography variant="body1" paragraph>
                    – Dù có dùng kem chống nắng hay không bạn đều cần làm sạch da thật kĩ, nhất là khi có make up. Nguyên nhân là lượng dầu, lượng chất dơ, cặn kem chống nắng và make up đọng lại trên da kết hợp cùng vi khuẩn rất dễ gây mụn.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    – Bên cạnh đó, double cleansing (tẩy trang + sữa rửa mặt) hay triple cleansing (tẩy trang dầu + tẩy trang nước + sữa rửa mặt) là vô cùng cần thiết để đảm bảo nang lông được sạch sâu. Chất lượng sản phẩm khi tẩy trang cũng rất quan trọng để vừa làm sạch tốt mà không gây hại đến hàng rào bảo vệ da.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    + Với sữa rửa mặt, bạn nên ưu tiên loại làm sạch tốt nhưng dịu nhẹ, pH càng gần với pH tự nhiên của da càng tốt.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    + Với nước tẩy trang, dầu tẩy trang ngoài làm sạch tốt thì ưu tiên sản phẩm có thành phần dưỡng ẩm để da không bị khô căng sau khi dùng.
                  </Typography>
                  
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, mt: 2 }}>2. Kiểm soát lượng dầu trên da</Typography>
                  <Typography variant="body1" paragraph>
                    – Trước tiên bạn cần nắm rõ là da nhiều dầu không thể chuyển sang hết dầu hay từ da dầu sang da thường, da khô chỉ nhờ skincare, mà thực chất mỹ phẩm chỉ giúp da đỡ tiết dầu ồ ạt và cung cấp đủ ẩm. Nhiều bạn hay hiểu lầm da dầu không cần dưỡng ẩm vì đã thừa ẩm, sợ bí bách nổi mụn. Nhưng không, da dầu vẫn cần dưỡng ẩm vì khi da đủ ẩm sẽ hạn chế tiết dầu hơn đó.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    – Khi dưỡng ẩm với toner, thay vì các loại có kết cấu sánh đặc, bạn có thể thay bằng toner dạng lỏng có thành phần cấp nước tốt như HA, Glycerin,…
                  </Typography>
                  <Typography variant="body1" paragraph>
                    – Khi dùng kem dưỡng cho da mụn, bạn hãy ưu tiên loại có nền kem gốc nước để dễ thấm, dễ ráo và không chứa thành phần dễ gây bí tắc nang lông như silicone không bay hơi, dầu khoáng, các loại bơ đậm đặc,… Tốt hơn nên chứa thành phần hỗ trợ kiểm soát dầu như Niacinamide.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    – Chống nắng dạng sữa là chân ái với da dầu vì kết cấu dễ thấm, finish cũng dễ ráo hơn, có thêm khả năng kháng nước tốt, không bị tiết dầu nhiều là hợp lý cho da thiên dầu rồi.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    ⇒ Nhìn chung da thiên dầu khi skincare thì điều cần chú trọng nhất vẫn là "Dầu". Bạn chỉ cần đảm bảo làm sạch tốt và kiểm soát được lượng dầu là da cải thiện hơn rồi đó.
                  </Typography>
                </Typography>
              </Box>
            </Box>

            {/* Phần 2 */}
            <Box ref={section2Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                2. Phân loại da dầu, mụn và cách chăm sóc
              </Typography>
              <Typography variant="body1" paragraph>
                Đôi khi, dù đã cố gắng làm sạch tốt nhưng do cơ địa hoặc thói quen sinh hoạt chưa lành mạnh sẽ dẫn đến bít tắc nang lông gây nên vấn đề tiếp theo chính là mụn.
              </Typography>
              
              <Box ref={section21Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  2.1. Phân loại da dầu mụn
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>
                      <strong>Da dầu mụn viêm:</strong> Mụn viêm có biểu hiện sưng đỏ, có thể kèm theo mủ, gây đau nhức khó chịu gây ảnh hưởng đến bề ngoài và chất lượng cuộc sống, vì vậy giải quyết mụn viêm thường cấp thiết.
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <strong>Da dầu mụn không viêm:</strong> Mụn không viêm thường khó nhìn thấy bằng mắt thường vì chúng không gây viêm sưng to, sờ vào thấy cộm hoặc nhìn nghiêng da sẽ lộ sần. Mụn không viêm ít cấp thiết hơn mụn viêm vì chưa trực tiếp ảnh hưởng đến quá trình sinh hoạt nhưng không loại bỏ sớm và đúng cách sẽ nằm đó dai dẳng, đôi khi do tác động sẽ chuyển sưng lên thành mụn viêm.
                    </Box>
                  </Box>
                </Typography>
              </Box>
              
              <Box ref={section22Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  2.2. Cách chăm sóc da dầu mụn
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>– Đối với mụn viêm:</strong> Một số thành phần chấm mụn bạn thường gặp trên thị trường để giải quyết mụn viêm sưng là Sulfur, Tràm trà, BPO, BHA, Nhóm Retinoids,… Em serum chấm mụn nhà GUO thì kết hợp cả Sulfur giúp giảm dầu nhờn, giảm đỏ, làm dịu cho nốt mụn và AHA – BHA để cải thiện bí tắc nang lông cho vùng da quanh nốt mụn nữa. Bạn có thể dùng cả sáng, tối hoặc nhiều lần hơn trong ngày để mụn mau xẹp và giảm viêm.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>– Đối với mụn không viêm:</strong> mụn ẩn phần lớn nổi lên là do nang lông bị bí tắc bởi dầu thừa, da chết, muốn cải thiện sẽ cần tẩy da chết để "dọn dẹp" và làm sạch hết chỗ cặn dư đó. Tẩy da chết GUO chứa 3% AHA giúp tẩy da chết bề mặt, 1%BHA giúp tẩy da chết sâu hơn trong nang lông, kết hợp lại thì da giảm bớt tình trạng bí tắc và hỗ trợ đẩy nhân mụn lên bề mặt để mình dễ xử lý hơn.
                </Typography>
                <Typography variant="body1" paragraph>
                  Vậy với da dầu – mụn ngoài làm sạch và kiểm soát dầu tốt, bạn cần thêm serum trị mụn và tẩy da chết để xử lí mụn viêm và mụn không viêm. Bên cạnh đó, hãy kết hợp cùng lối sống lành mạnh, ăn uống hạn chế thực phẩm nhiều đường để giảm phản ứng viêm cho da nữa.
                </Typography>
              </Box>
            </Box>

            {/* Phần 3 */}
            <Box ref={section3Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                3. Nguyên nhân và chăm da dầu mụn nhạy cảm
              </Typography>
              
              <Box ref={section31Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.1. Nguyên nhân dẫn đến làn da nhạy cảm
                </Typography>
                <Typography variant="body1" paragraph>
                  Da nhạy cảm có khả năng do bẩm sinh, cơ địa như bao loại da khác. Hoặc da nhạy cảm do tác động bên ngoài như overtreatment, chăm da sai cách, sống ở nơi ô nhiễm lâu ngày,… Trường hợp này nếu không để ý thì ít bạn nhận ra, có nhận ra cũng không rõ nguyên nhân vì cứ tưởng da bẩm sinh nhạy cảm rồi nên chăm da cũng sai cách.
                </Typography>
              </Box>
              
              <Box ref={section32Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  3.2. Cách giải quyết
                </Typography>
                <Typography variant="body1" paragraph>
                  Với da nhạy cảm, điều tiên quyết nhất là sản phẩm phải dịu nhẹ, lành tính và có khả năng phục hồi cho da khỏe dần lên.
                </Typography>
                
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>1. Sản phẩm dịu nhẹ, lành tính</Typography>
                <Typography variant="body1" paragraph>
                  – Với sản phẩm làm sạch, hãy ưu tiên loại không chứa xà phòng như SLSs, thay bằng chất hoạt động bề mặt nhẹ nhàng an toàn cho hàng rào bảo vệ da. Riêng sữa rửa mặt thì độ pH càng gần pH tự nhiên của da càng tốt, khoảng 5 – 5.5.
                </Typography>
                <Typography variant="body1" paragraph>
                  – Với sản phẩm treatment, bạn cần chọn sản phẩm có nồng độ thấp khi mới bắt đầu, dùng ở tần suất thưa thớt để da làm quen rồi mới tăng nồng độ.
                </Typography>
                <Typography variant="body1" paragraph>
                  – Với sản phẩm chứa dầu khoáng, silicone, chiết xuất thực vật dễ gây kích ứng như nhóm cam chanh cũng cần hạn chế, tốt hơn là tránh luôn để hạn chế khả năng kích ứng thêm cho da.
                </Typography>
                <Typography variant="body1" paragraph>
                  – Bạn nào có thói quen dùng máy rửa mặt để làm sạch sâu nhớ kiểm tra lại loại lông cọ của máy đã đủ mềm và an toàn cho da chưa, tần suất dùng nên hạn chế lại tránh làm sạch quá mức. Còn da nhiều mụn viêm sưng quá thì mình tạm ngưng lại đến khi đỡ mụn cho đỡ đau nhức.
                </Typography>
                
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, mt: 2 }}>2. Sản phẩm có khả năng phục hồi</Typography>
                <Typography variant="body1" paragraph>
                  – Lúc da quá nhiều mụn ẩn, mụn viêm sưng mình cần tập trung giảm mụn trước. Khi da đã đỡ được kha khá mụn thì đã đến lúc thích hợp hơn cho phục hồi. Lúc này bạn nên chuyển từ kem dưỡng thông thường sang kem dưỡng có thành phần phục hồi tốt hơn như Peptide, Chiết xuất tơ tằm – nhưng vẫn phải có kết cấu vừa phải, đừng quá dày bí để tránh tắc nang lông gây mụn trở lại.
                </Typography>
                <Typography variant="body1" paragraph>
                  – Ngoài ra, bạn có thể bổ sung dòng chuyên phục hồi cho các bước skincare khác. GUO có sẵn nước tẩy trang làm dịu chứa Vitamin B5, Allantoin êm da, kem chống nắng chứa lợi khuẩn nuôi dưỡng hàng rào bảo vệ da khỏe mạnh cho các bạn thoải mái lựa chọn.
                </Typography>
                <Typography variant="body1" paragraph>
                  => Tóm lại, da dầu – mụn – nhạy cảm vẫn cần được làm sạch sâu, kiểm soát dầu, giảm mụn như da dầu hoặc dầu – mụn, khác ở chỗ các sản phẩm khi dùng cần độ dịu nhẹ và lành tính cao hơn kèm theo khả năng phục hồi tốt nha.
                </Typography>
              </Box>
            </Box>

            {/* Phần 4 */}
            <Box ref={section4Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                4. Thâm mụn
              </Typography>
              <Typography variant="body1" paragraph>
                Tưởng hết mụn là xong nhưng mà không, còn phải dọn dẹp mớ vết thâm – hậu quả mà mụn để lại, có khi tốn nhiều thời gian hơn trị mụn nữa.
              </Typography>
              
              <Box ref={section41Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  4.1. Nguyên nhân gây thâm mụn
                </Typography>
                <Typography variant="body1" paragraph>
                  Thâm mụn thường dễ nhận ra ở 2 loại: Thâm đỏ và thâm đen, đến từ nhiều nguyên nhân khác nhau như
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ol" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>Nốt mụn khiến vùng da xung quanh bị tổn thương, sau khi mụn xẹp hoặc đã lấy nhân mụn ra sẽ để lại vết thâm.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Do tác động vật lí mạnh bạo khi cậy mụn, lấy nhân mụn sai cách, thao tác đè nặn, cào vào da gây tổn thương, đôi khi là nhiễm trùng nên càng dễ để lại vết thâm.</Box>
                  </Box>
                </Typography>
                <Typography variant="body1" paragraph>
                  => Để thâm mụn nhanh khỏi hay thậm chí là giảm khả năng hình thành từ sớm sẽ cần sản phẩm có khả năng Giảm thâm và Gom cồi.
                </Typography>
              </Box>
              
              <Box ref={section42Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  4.2. Cách giải quyết thâm mụn
                </Typography>
                <Typography variant="body1" paragraph>
                  Ở bước Làm sạch, dưỡng ẩm, chống nắng, bạn vẫn có thể áp dụng chu trình chăm sóc da Dầu – mụn – nhạy cảm, đó là chú trọng làm sạch sâu, kiểm soát dầu bằng sản phẩm lành tính rồi linh hoạt thêm 1 vài sản phẩm như sau:
                </Typography>
                
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>1. Sản phẩm giúp mờ thâm</Typography>
                <Typography variant="body1" paragraph>
                  – Tại bước serum và kem dưỡng, sản phẩm có thành phần giảm thâm và làm đều màu da an toàn, không gây bào mòn có chứa Niacinamide, Vitamin C, Arbutin, Resveratrol,… là lựa chọn thích hợp cho giai đoạn này.
                </Typography>
                <Typography variant="body1" paragraph>
                  + Với những bạn có da thiên dầu, GUO gợi ý bạn combo serum dưỡng trắng và kem dưỡng trà nghệ gốc nước để mờ thâm mụn mà vẫn không bị bí bách.
                </Typography>
                <Typography variant="body1" paragraph>
                  + Với những bạn có da thiên khô, GUO gợi ý bạn combo serum dưỡng trắng và kem dưỡng trắng vi tảo gốc dầu để mờ thâm mụn mà da vẫn đủ ẩm.
                </Typography>
                <Typography variant="body1" paragraph>
                  – Dùng chống nắng đầy đủ giúp thâm mụn mau lành, mau nhạt màu hơn là bước vô cùng quan trọng nhưng ít khi được nhắc tới. Khi da đã đỡ mụn rồi bạn hãy nhớ dùng chống nắng thường xuyên để bảo vệ da tốt hơn. Và nếu có ý định lấy nhân mụn ở spa thì bạn nên chọn ở những địa chỉ uy tín, tay nghề kĩ thuật viên cao để hạn chế tối đa thâm mụn sau này.
                </Typography>
                
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, mt: 2 }}>2. Sản phẩm giúp gom cồi</Typography>
                <Typography variant="body1" paragraph>
                  Thay vì để mụn bị thâm rồi mới cuống cuồng dùng sản phẩm, bạn vẫn hạn chế được khả năng thâm mụn từ sớm bằng nhiều cách khác nhau.
                </Typography>
                <Typography variant="body1" paragraph>
                  – Với mụn viêm sưng, thay vì để ổ viêm sưng to, lan rộng, bạn có thể dùng chấm mụn từ sớm để hỗ trợ gom cồi, làm dịu nốt mụn và vùng da xung quanh. Đến khi cồi mụn già lấy ra cũng dễ, ít gây tổn thương thì thâm mụn cũng nhẹ và nhanh lành.
                </Typography>
                <Typography variant="body1" paragraph>
                  – Với mụn ẩn, mấy em tẩy da chết ngoài làm thoáng nang lông còn hỗ trợ đẩy cồi mụn lên, đến khi ra spa lấy nhân mụn cũng không cần đè gây xước da mà vẫn lấy mụn ra dễ dàng, vùng thâm mụn để lại nhỏ và mờ hơn hẳn.
                </Typography>
                <Typography variant="body1" paragraph>
                  => Để giảm thâm sau mụn, lưu ý dùng skincare có thành phần mờ thâm, sáng da an toàn, lành tính, nếu ngừa thâm được từ sớm thì càng tốt nhé.
                </Typography>
              </Box>
            </Box>

            {/* Phần 5 - Tổng kết */}
            <Box ref={section5Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                5. Tổng kết
              </Typography>
            <Typography variant="body1" paragraph>
                Nhìn chung làn da dầu – mụn – nhạy cảm có nhiều vấn đề cần lưu ý nên mới cần cả 1 chu trình hoàn chỉnh mới cải thiện. Với các bước skincare cho da dầu mụn nhạy cảm mà GUO đã hướng dẫn ở trên, chắc chắn việc chăm sóc làn da dầu mụn nhạy cảm không còn là việc quá khó khăn với bạn. Việc còn lại, bạn hãy kiên trì áp dụng và lựa chọn sản phẩm an toàn, phù hợp với da, đảm bảo làn da bạn sẽ khỏe mạnh, sáng đẹp và sạch mụn theo từng ngày đấy!
            </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Blog1;
