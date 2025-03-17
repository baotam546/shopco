import React from 'react';
import { Box, Typography, Grid, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import './Blog.css';

// Danh sách các bài viết
const blogPosts = [
  { 
    id: 1, 
    title: "Bí Kíp Chăm Da Dầu Mụn Nhạy Cảm Chuẩn Khoa Học (2024)", 
    image: "/images/bikip.webp",
    summary: "Da dầu mụn nhạy cảm là một trong những làn da \"đỏng đảnh\" khó chiều..."
  },
  { 
    id: 2, 
    title: "Giải đáp: Chỉ Số Bảo Vệ Của Kem Chống Nắng Bao Nhiêu Là Tốt?", 
    image: "/images/giaidap.webp",
    summary: "Để sử dụng kem chống nắng hiệu quả, bên cạnh các thành phần thì chỉ số chống nắng cũng là yếu tố quan trọng..."
  },
  { 
    id: 3, 
    title: "[Review] TOP 3+ Sữa rửa mặt Simple dịu nhẹ có làm sạch tốt không?", 
    image: "/images/reviewtop3.png",
    summary: "Có khá nhiều lời khen và lời phê bình về các sản phẩm..."
  },
  { 
    id: 4, 
    title: "Điểm danh TOP 12+ Toner cho tuổi dậy thì an toàn, tốt nhất 2024", 
    image: "/images/diemdanh.png",
    summary: "Tuổi dậy thì là độ tuổi mà làn da có nhiều sự thay đổi như nổi mụn nhiều hơn..."
  },
  { 
    id: 5, 
    title: "9 Nguyên Nhân Khiến Da Bị Mụn Dai Dẳng, Trị Mụn Hoài Không Hết", 
    image: "/images/9nguyennhan.webp",
    summary: "Mụn là vấn đề da liễu phổ biến và khó chịu, gây ảnh hưởng lớn đến thẩm mỹ..."
  },
  { 
    id: 6, 
    title: "Top 7+ Tẩy tế bào chết vật lý sạch sâu, làm đều màu da (2024)", 
    image: "/images/Top 7+.webp",
    summary: "Đối với những người mới bắt đầu, việc khám phá thế giới phức tạp của làm đẹp..."
  }
];

export default function BlogPage() {
  const navigate = useNavigate();
  
  const handleBlogClick = (blogId) => {
    navigate(`/blog${blogId}`);
  };

  return (
    <>
    <Box sx={{ bgcolor: "#c2d3a0", minHeight: "100vh", width:'99vw' }}>
      <Header />
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Box 
          sx={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            p: { xs: 2, sm: 4 },
            my: 4
          }}
        >
          <Box
            sx={{
              p: { xs: 2, sm: 4 },
              textAlign: "center",
              borderRadius: "20px",
              width: "100%",
              backgroundColor: "#F5F5F5",
              boxShadow: 2,
            }}
          >
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              gutterBottom
              sx={{ 
                mb: { xs: 3, sm: 4 },
                fontSize: { xs: "1.5rem", sm: "2rem" },
                color: "#2e7d32"
              }}
            >
              CẨM NANG CHĂM SÓC DA
            </Typography>
            <Grid 
              container 
              spacing={3}
              sx={{ 
                alignItems: "stretch", 
                justifyContent: "center" 
              }}
            >
              {blogPosts.map((post) => (
                <Grid 
                  key={post.id} 
                  item 
                  xs={12} 
                  sm={6}
                  md={4}
                  sx={{ 
                    display: "flex"
                  }}
                >
                  <Box 
                    className="blog-box"
                    onClick={() => handleBlogClick(post.id)}
                    sx={{ 
                      position: "relative", 
                      width: "100%",
                      borderRadius: "8px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      bgcolor: "white",
                      boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)"
                      }
                    }}
                  >
                    <Box
                      sx={{
                        height: "200px",
                        overflow: "hidden"
                      }}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{ 
                          width: "100%", 
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                    </Box>
                    <Box sx={{ p: 2, flexGrow: 1 }}>
                      <Typography 
                        variant="h6" 
                        fontWeight="bold" 
                        gutterBottom
                        sx={{
                          minHeight: "60px",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}
                      >
                        {post.summary}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
    </>
  );
}