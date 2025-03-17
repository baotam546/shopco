import { Box, Container, Typography, Paper, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useRef } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';

function Blog3() {
  useEffect(() => {
    // Cuộn lên đầu trang khi component được tải
    window.scrollTo(0, 0);
  }, []);

  // Tạo refs cho từng phần để điều hướng
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section51Ref = useRef(null);
  const section52Ref = useRef(null);
  const section53Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);
  const section10Ref = useRef(null);

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
            src="/images/reviewtop3.png"
            alt="[Review] TOP 3+ Sữa rửa mặt Simple dịu nhẹ có làm sạch tốt không?"
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
              [Review] TOP 3+ Sữa rửa mặt Simple dịu nhẹ có làm sạch tốt không?
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
                  <ListItemText primary="1. Đôi nét về thương hiệu Simple" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section2Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="2. Sữa rửa mặt Simple có tác dụng gì?" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section3Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="3. Sữa rửa mặt Simple có tốt không?" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section4Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="4. Sữa rửa mặt Simple dành cho da nào?" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section5Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="5. Top 3+ Sữa rửa mặt simple giá tốt, chính hãng được tin dùng nhiều hiện nay" />
                </ListItem>
                
                <List dense sx={{ pl: 4 }}>
                  <ListItem button onClick={() => scrollToSection(section51Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="5.1. Sữa rửa mặt Simple Refreshing Facial Wash Gel" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section52Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="5.2. Sữa rửa mặt Simple Moisturising Facial Wash" />
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection(section53Ref)} sx={{ color: '#0ea5e9' }}>
                    <ListItemText primary="5.3. Sữa rửa mặt Simple Purifying Gel Wash" />
                  </ListItem>
                </List>
                
                <ListItem button onClick={() => scrollToSection(section6Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="6. Phân biệt sữa rửa mặt Simple thật – giả" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section7Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="7. Mua sữa rửa mặt Simple chính hãng ở đâu?" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section8Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="8. Sữa rửa mặt Simple giá bao nhiêu?" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section9Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="9. Cảm nhận của khách hàng về sữa rửa mặt Simple" />
                </ListItem>
                
                <ListItem button onClick={() => scrollToSection(section10Ref)} sx={{ color: '#0ea5e9' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="10. Kết luận" />
                </ListItem>
              </List>
            </Paper>
            
            {/* Nội dung bài viết */}
            <Typography variant="body1" paragraph>
              Có khá nhiều lời khen và lời phê bình về các sản phẩm làm sạch da của Simple, hôm nay hãy cùng mình tìm hiểu và phân tích một cách chi tiết nhất để làm rõ những nhận xét khách quan nhất về 3 dòng sữa rửa mặt Simple đang được các bạn quan tâm nhất hiện nay:
            </Typography>

            {/* Phần 1 */}
            <Box ref={section1Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                1. Đôi nét về thương hiệu Simple
              </Typography>
              <Typography variant="body1" paragraph>
                Thương hiệu Simple ra đời vào năm 1960 tại Anh, là một thương hiệu mỹ phẩm bình dân tiên phong trong việc sử dụng nguyên liệu xanh, sạch, không chứa chất gây kích ứng da. Cái tên "Simple" có nghĩa là "đơn giản", đơn giản từ thành phần, công thức mang lại sự an toàn, lành tính cho mọi làn da.
              </Typography>
              <Typography variant="body1" paragraph>
                Sau hơn rất nhiều năm có mặt trong ngành mỹ phẩm, Simple luôn nắm bắt được tâm lý, nhu cầu khách hàng và không ngừng cải tiến về chất lượng cũng như mẫu mã đáp ứng đúng mong mỏi của người tiêu dùng. Hiện nay, Simple đã có mặt hầu hết các nước trên thế giới như Mỹ, Anh, Đức, Pháp, Canada, Việt Nam,…với giá thành rẻ, thành phần an toàn và công thức hiệu quả.
              </Typography>
            </Box>
            
            {/* Phần 2 */}
            <Box ref={section2Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                2. Sữa rửa mặt Simple có tác dụng gì?
              </Typography>
              <Typography variant="body1" paragraph>
                Công dụng của sữa rửa mặt Simple chính là làm sạch giúp loại bỏ đi lớp bụi bẩn, dầu thừa, tạp chất trên da hiệu quả. Bên cạnh đó, hầu hết các sản phẩm sữa rửa mặt từ nhà Simple đều hỗ trợ giữ cân bằng độ pH cho làn da sau khi dùng sản phẩm, không gây khô da căng da. Khi da được làm sạch các lỗ chân lông được thông thoáng không bị bít tắc bởi tình trạng tiết dầu trên da. Từ đó, giúp da ngăn ngừa mụn cám, mụn đầu trắng, và các loại mụn khác hình thành.
              </Typography>
              <Typography variant="body1" paragraph>
                Tùy vào từng loại mà sản phẩm có những công dụng cụ thể khác nhau đáp ứng được nhiều nhu cầu của khách hàng, Simple có đủ các sản phẩm cho từng loại da, nhưng ở thị trường Việt Nam có 3 loại chính và được tin dùng khá nhiều.
              </Typography>
            </Box>

            {/* Phần 3 */}
            <Box ref={section3Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                3. Sữa rửa mặt Simple có tốt không?
              </Typography>
              <Typography variant="body1" paragraph>
                Về thành phần, sữa rửa mặt nhà Simple hầu hết đều chứa các thành phần như Vitamin E, Pro vitamin B5, các loại vitamin và Propylene Glycol. Đây là các thành phần lành tính và an toàn cho da giúp da được khôi phục lớp màng bảo vệ, giữ ẩm cho da rất tốt.
              </Typography>
              <Typography variant="body1" paragraph>
                Tuy nhiên ở một số dòng sữa rửa mặt nhà Simple có chứa chất tạo bọt Sodium Lauryl Sulfate, đây là chất hoạt động bề mặt giúp làm giảm sức căng bề mặt da và tạo bọt giúp da được làm sạch tốt hơn có mặt trong rất nhiều các loại sữa rửa mặt nhưng nếu sử dụng với hàm lượng nhiều sẽ gây khô da, bong tróc da với làn da nhạy cảm. Một số nhà nghiên cứu cho rằng, sử dụng chất tạo bọt SLS lâu ngày sẽ gây ảnh hưởng đến da và kích ứng mắt, vì thế chúng ta không nên quá lạm dụng. Nhưng đối với các sản phẩm rửa mặt của nhà Simple đã được cân nhắc liều lượng hợp lí vì thế sẽ không gây ra kích ứng cho da.
              </Typography>
            </Box>

            {/* Phần 4 */}
            <Box ref={section4Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                4. Sữa rửa mặt Simple dành cho da nào?
              </Typography>
              <Typography variant="body1" paragraph>
                Simple có rất nhiều các dòng sữa rửa mặt dành cho từng loại da. Đối với từng thị trường sẽ có những sản phẩm khác nhau, ví dụ như sữa rửa mặt Simple ở Anh sẽ khác Simple ở Mỹ hay ở Việt Nam, tuy nhiên thành phần và hiệu quả vẫn giống nhau hoặc có thêm các dòng khác phục vụ riêng cho thị trường đó. Ở Việt Nam, có 3 dòng sữa rửa mặt nhà Simple được sử dụng rộng rãi và được tin dùng nhiều, hãy cùng mình tìm hiểu đây là 3 dòng sữa rửa mặt nào, dành cho loại da nào, và có thật sự tốt như lời đồn không?
              </Typography>
            </Box>

            {/* Phần 5 */}
            <Box ref={section5Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                5. Top 3+ Sữa rửa mặt simple giá tốt, chính hãng được tin dùng nhiều hiện nay
              </Typography>
              
              <Box ref={section51Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  5.1. Sữa rửa mặt Simple Refreshing Facial Wash Gel
                </Typography>
                <Typography variant="body1" paragraph>
                  Đây là dòng gel rửa mặt dịu nhẹ Simple Refreshing Facial Wash không chứa cồn, không chứa xà phòng hay các chất tạo mùi, tạo màu gây kích ứng cho da, phù hợp cho làn da nhạy cảm.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Thành phần:</strong> Nước, Cocamidopropyl Betaine, Propylene glycol, Hydroxypropyl methyl cellulose, Panthenol, Tocopheryl Acetate, Pantolactone, Sodium hydroxide, Disodium EDTA, Sodium Hydroxymethylglycinate
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Thành phần nổi bật:</strong>
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>Cocamidopropyl Betaine là một axit béo, một chất hoạt động bề mặt giúp làm sạch da lấy đi các tế bào bụi bẩn, dầu thừa trên da.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Tocopheryl Acetate là một dạng của Vitamin E chính vì thế có khả năng khôi phục các tế bào da bị tổn thương và chống oxy hóa rất tốt cho da.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Pro Vitamin B5 có tác dụng hồi phục hàng rào bảo vệ da giúp da luôn được dưỡng ẩm bảo vệ da khỏi các tác hại của môi trường bên ngoài.</Box>
                  </Box>
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Ưu điểm:</strong>
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>Không chứa cồn, xà phòng, chất tạo màu, hương liệu và các chất gây kích ứng cho làn da, an toàn cho da nhạy cảm.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Độ pH lý tưởng</Box>
                    <Box component="li" sx={{ mb: 1 }}>Bảng thành phần đúng như tên gọi của thương hiệu rất đơn giản và lành tính.</Box>
                  </Box>
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Nhược điểm:</strong>
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>Bởi vì bảng thành phần của sản phẩm chứa những sản phẩm làm sạch dịu nhẹ và đơn giản nên khả năng làm sạch sâu làn da của sản phẩm chưa được đánh giá cao.</Box>
                  </Box>
                </Typography>
              </Box>
              
              <Box ref={section52Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  5.2. Sữa rửa mặt Simple Moisturising Facial Wash
                </Typography>
                <Typography variant="body1" paragraph>
                  Đây là dòng sữa rửa mặt dưỡng ẩm Moisturising Facial Wash của nhà Simple dành cho các nàng da khô cần cấp ẩm không chứa chất tạo màu, không hương liệu phù hợp cho những cô nàng dị ứng mùi hương.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Bảng thành phần:</strong> Nước, Sodium Laureth Sulfate, Decyl Glucoside, Cocamidopropyl Betaine, Glycerin, PEG-55 Propylene Glycol Oleate, Propylene glycol, PEG-7 Glyceryl Cocoate, Sodium chloride, Panthenol, Tocopheryl Acetate, Bisabolol, Pantolactone, Dầu Hoa Cúc (Anthemis Nobilis), Dầu Hoa Mỏ Hạc (Pelargonium Graveolens), Glycol Distearate, Cocamide MEA, Laureth-10, Dipropylene Glycol, Polyquaternium-39, Disodium EDTA, Citric acid, Sodium Hydroxymethylglycinate, Methylparaben, Benzoic acid.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Thành phần nổi bật:</strong>
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>Pro-Vitamin B5 có vai trò như một chất dưỡng ẩm, hoạt động bằng cách hút và giữ nước giúp cho làn da luôn ngậm nước sản phẩm phù hợp với các nàng da khô, đồng thời có khả năng chữa lành các tổn thương do mụn gây ra và tăng cường hàng rào bảo vệ cho làn da của bạn.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Vitamin E giúp da chống oxy hóa ngăn chặn quá trình tác động của các yếu tố gây hại bên ngoài và dưỡng ẩm, khôi phục da.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Bisabolol có chiết xuất từ hoa cúc với công dụng chống oxy hóa, chống nhiễm trùng da có tác dụng hiệu quả trong việc điều trị mụn. Đồng thời giúp ức chế sản sinh melanin</Box>
                    <Box component="li" sx={{ mb: 1 }}>Sodium Laureth Sulfate (SLS) là một chất hoạt động bề mặt phổ biến trong các sản phẩm làm sạch da giúp tạo bọt và làm sạch làn da. Có khá nhiều tranh cãi xung quanh việc sử dụng SLS để làm sạch da, tuy nhiên với liều lượng cho phép thì sản phẩm vẫn nằm trong mức an toàn để sử dụng.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Paraben là một chất bảo quản giúp sản phẩm có thời gian sử dụng lâu hơn, sản phẩm được nghiên cứu và sử dụng hàm lượng ở mức cho phép nên không gây hại cho sức khỏe người dùng.</Box>
                  </Box>
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Ưu điểm:</strong>
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>Sữa rửa mặt có khả năng làm sạch làn da một cách hiệu quả nhưng không gây khô da và kích ứng nhờ các thành phần dưỡng ẩm lành tính.</Box>
                  </Box>
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Nhược điểm:</strong>
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>Sản phẩm có chứa SLS và paraben không phù hợp với làn da nhạy cảm hoặc da dễ kích ứng.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Sản phẩm không phù hợp với các nàng da dầu hoặc thiên dầu vì chứa nhiều thành phần dưỡng ẩm dễ gây bít tắc lỗ chân lông.</Box>
                  </Box>
                </Typography>
              </Box>
              
              <Box ref={section53Ref} sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                  5.3. Sữa rửa mặt Simple Purifying Gel Wash
                </Typography>
                <Typography variant="body1" paragraph>
                  Đây là dòng sữa rửa mặt khá mới có khả năng kiềm dầu hỗ trợ ngăn ngừa mụn hiệu quả cho làn da đến từ nhà Simple. Sữa rửa mặt Simple Purifying Gel Wash không chứa cồn phù hợp với cả làn da mụn nhạy cảm.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Thành phần:</strong> Aqua, Hamamelis Virginiana Leaf Water, Cocamidopropyl Betaine, Glycerin, Sodium Laureth Sulfate, PEG-7 Glyceryl Cocoate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Benzophenone-4, Citric Acid, Hydrated Silica, Hydroxypropyl Cyclodextrin, Iodopropynyl Butylcarbamate, Niacinamide, Panthenol, Pantolactone, Phenoxyethanol, Potassium Sorbate, Sodium Benzoate, Sodium Chloride, Sodium Hydroxide, Thymus Vulgaris Flower/Leaf Extract, Xanthan Gum, Zinc PCA
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Thành phần nổi bật:</strong>
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>5% Chiết xuất lá cây phỉ giúp chống viêm mụn , phục hồi và làm dịu vùng da nhạy cảm tổn thương do mụn, giúp làm sạch và thu nhỏ lỗ chân lông.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Zinc PCA là thành phần nổi tiếng trong các sản phẩm giảm mụn và hiệu quả trong việc làm sạch da tiết nhiều nhờn giúp làn da thông thoáng và sạch mịn.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Glycerin có mặt trong các sản phẩm giúp dưỡng ẩm hút ẩm giữ ẩm cho làn da, giúp da chống lại tác nhân bên ngoài.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Pro Vitamin B5 có trong sữa rửa mặt giúp dưỡng ẩm và phục hồi tổn thương trên da do mụn và các yếu tố môi trường.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Niacinamide tăng cường hàng rào bảo vệ da, chống oxy hóa tốt và giảm các triệu chứng kích ứng da.</Box>
                  </Box>
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Ưu điểm:</strong>
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>Sản phẩm có chứa hạt scrub giúp làm sạch da, detox làn da mang lại sự sạch thoáng</Box>
                    <Box component="li" sx={{ mb: 1 }}>Dạng gel giúp làm sạch nhẹ nhàng trên da mà không gây tổn thương.</Box>
                  </Box>
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>♦ Nhược điểm:</strong>
                </Typography>
                <Typography variant="body1" component="div">
                  <Box component="ul" sx={{ pl: 4 }}>
                    <Box component="li" sx={{ mb: 1 }}>Vì là kết cấu có hạt scrub nên hãy cân nhắc đối với làn da mụn dễ bị vỡ và khiến tình trạng mụn viêm nhiễm.</Box>
                    <Box component="li" sx={{ mb: 1 }}>Mùi hương có thể gây khó chịu với một số bạn.</Box>
                  </Box>
                </Typography>
              </Box>
            </Box>

            {/* Phần 6 */}
            <Box ref={section6Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                6. Phân biệt sữa rửa mặt Simple thật – giả
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>✔ Qua bao bì sản phẩm</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                Các sữa rửa mặt chính hãng của Simple thường in bao bì, chữ sắc nét không có hiện tượng chữ bị lem hay in méo. Với các dòng sữa rửa mặt làm giả chữ in thường bị mờ và không đều màu thương bị gồ ghề không bằng phẳng như sản phẩm thật.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>✔ Qua kết cấu của sữa rửa mặt</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                Simple thường có dạng gel hoặc cream và dễ tán và khi nghiêng bàn tay sản phẩm sẽ hơi chảy. Không giống các sản phẩm giả sẽ khá đặc hoặc quá lỏng khó tạo bọt hay căng rít.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>✔ Qua mã vạch</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                Bạn có thể dùng điện thoại để check mã vạch của sản phẩm tuy nhiên hiện nay các sản phẩm làm giả khá tính vi và các app quét mã vạch thì chưa thực sự được tối ưu hóa chính vì vậy, cách an toàn nhất để mua sản phẩm chính hãng là tìm một cửa hàng uy tín để mua sản phẩm.
              </Typography>
            </Box>

            {/* Phần 7 */}
            <Box ref={section7Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                7. Mua sữa rửa mặt Simple chính hãng ở đâu?
              </Typography>
              <Typography variant="body1" paragraph>
                Simple là một dòng sữa rửa mặt nổi tiếng chính vì vậy bạn có thể mua sản phẩm ở nhiều cửa hàng nhưng cũng rất dễ mua phải hàng giả, hàng kém chất lượng. Chúng ta có thể mua ở:
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>Các cửa hàng mỹ phẩm nổi tiếng: Watson, Hasaki, Guardian, Medicare,…</Box>
                  <Box component="li" sx={{ mb: 1 }}>Các cửa hàng tiện lợi: Circle K, 7 Eleven, GS25,..</Box>
                  <Box component="li" sx={{ mb: 1 }}>Các siêu thị lớn: Lotte, Coopmart, Kmart, K-market,…</Box>
                  <Box component="li" sx={{ mb: 1 }}>Các tiệm thuốc uy tín: Pharmacity, Long Châu,…</Box>
                  <Box component="li" sx={{ mb: 1 }}>Các kênh thương mại điện tử: Shopee, Lazada, Tiki. Tuy nhiên để đảm bảo thì nên chọn các kênh bán hàng chính hãng của các trang để đảm bảo an toàn.</Box>
                </Box>
              </Typography>
            </Box>

            {/* Phần 8 */}
            <Box ref={section8Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                8. Sữa rửa mặt Simple giá bao nhiêu?
              </Typography>
              <Typography variant="body1" paragraph>
                Sữa rửa mặt Simple được phân phối trên toàn Quốc từ nền tảng online đến offline để khách hàng dễ dàng tiếp cận. Giá thành của sản phẩm ở các điểm bán khác nhau cũng có sự chênh lệch nhất định bởi nhiều yếu tố. Dưới đây là bảng giá mới nhất của sản phẩm được cập nhật trên website của Simple tại Việt Nam:
              </Typography>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 4 }}>
                  <Box component="li" sx={{ mb: 1 }}>Sữa rửa mặt Simple Refreshing Facial Wash Gel 150ml: 132.000 VNĐ</Box>
                  <Box component="li" sx={{ mb: 1 }}>Sữa rửa mặt Moisturising Facial Wash Simple 150ml: 132.000 VNĐ</Box>
                  <Box component="li" sx={{ mb: 1 }}>Sữa rửa mặt Purifying Gel Wash Simple 150ml: 132.000 VNĐ</Box>
                </Box>
              </Typography>
            </Box>

            {/* Phần 9 */}
            <Box ref={section9Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                9. Cảm nhận của khách hàng về sữa rửa mặt Simple
              </Typography>
              <Typography variant="body1" paragraph>
                Khách hàng Phượng Bùi đã đánh giá 5 sao cho sản phẩm Simple Refresh Facial Wash: "Mình xài em này phải hơn 6 tháng luôn ý, mình mua từ tháng 3 hay 5 gì đó nhưng mới hết vừa rồi. Hồi mình bị kích ứng xài em này khá ok. Da mình là đã hhtd lúc đầu chưa quen cảm giác nó không sạch lắm nhưng lâu dần thì thấy rửa khá ổn, nhưng em này mình thấy chỉ nên xài buổi sáng và trưa (nếu cần thiết) chứ sau một ngày dài thì em này không kĩ cho lắm. Nói chung với mức giá đó thì nên chọn simple là ok nhất vì vừa lành tính, dịu nhẹ mà không gây kích ứng hay lo ngại về thành phần."
              </Typography>
              <Typography variant="body1" paragraph>
                Khách hàng Đỗ Hân đánh giá 5 sao cho Sữa rửa mặt nhà Simple Refresh Facial Wash: "Đánh giá cao về dòng sữa rửa mặt mình sử dụng lần này, không gây khô da"
              </Typography>
            </Box>

            {/* Phần 10 */}
            <Box ref={section10Ref} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" sx={{ color: '#0ea5e9', fontWeight: 'bold', mb: 2 }}>
                10. Kết luận
              </Typography>
              <Typography variant="body1" paragraph>
                Hy vọng bài viết trên giúp các bạn có thêm thông tin hữu ích về các dòng sữa rửa mặt Simple. Mỗi sản phẩm đều có ưu và nhược điểm riêng chúng ta nên cân nhắc để lựa chọn các sản phẩm phù hợp với làn da của mình. Nếu bạn sở hữu làn da dễ nhạy cảm và kích ứng thì chúng ta vẫn nên ưu tiên các dòng sản phẩm đến từ thiên nhiên lành tính để hạn chế thấp nhất sự kích ứng và bảo vệ an toàn cho làn da của mình. Cảm ơn các bạn đã theo dõi bài viết. Chúc các bạn nhanh chóng có được làn da như mong muốn!
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Blog3;

