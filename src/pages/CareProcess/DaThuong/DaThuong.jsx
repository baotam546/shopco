
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer/Footer';
import './DaThuong.css';

const DaThuong = () => {
     const [products, setProducts] = useState([]);
    const [showRoutine, setShowRoutine] = useState(true);
    const navigate = useNavigate();

    const handleFindProducts = () => {
        const productItems = [
            { id: 6, title: "Sữa rửa mặt:", name: "Sữa Rửa Mặt CeraVe Sạch Sâu Cho Da Thường Đến Da Dầu 473ml" },
            { id: 17, title: "Toner:", name: "Nước Hoa Hồng Simple Làm Dịu Da & Cấp Ẩm 200ml Kind to Skin Soothing Facial Toner" },
            { id: 13, title: "Đặc trị:", name: "Gel Tẩy Tế Bào Chết Caryophy Ngăn Ngừa Mụn 250ml Smart Peeling Gel" },
            { id: 57, title: "Kem mắt:", name: "Kem Dưỡng Mắt Ngừa Lão Hóa, Giảm Quầng Thâm 30g" },
            { id: 79, title: "Kem dưỡng ẩm:", name: "Kem Dưỡng Ẩm Neutrogena Cấp Nước Cho Da Dầu 50g" },
            { id: 76, title: "Kem chống nắng:", name: "Kem Chống Nắng La Roche-Posay Kiểm Soát Dầu SPF50+ 50ml" },
            { id: 90, title: "Tẩy trang:", name: "Nước Tẩy Trang Bioderma Dành Cho Da Dầu & Hỗn Hợp 500ml" },
            { id: 15, title: "Tẩy tế bào chết:", name: "Tẩy Tế Bào Chết Rosette Cho Mọi Loại Da 120g Gommage Gentle Peeling Gel" },
            { id: 91, title: "Serum:", name: "Serum Skin1004 Rau Má Làm Dịu & Hỗ Trợ Phục Hồi Da 100ml" },
        ];

        setProducts(productItems);
        setShowRoutine(false); // Ẩn quy trình ngay lập tức
        sessionStorage.setItem('showProducts', 'true'); // Lưu trạng thái hiển thị sản phẩm
    };

    const handleShowRoutine = () => {
        setShowRoutine(true); // Hiển thị lại quy trình
        setProducts([]); // Xóa danh sách sản phẩm
        sessionStorage.removeItem('showProducts'); // Xóa trạng thái
    };

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`); // Chuyển hướng đến trang chi tiết sản phẩm
    };

    useEffect(() => {
        const showProducts = sessionStorage.getItem('showProducts');
        if (showProducts === 'true') {
            handleFindProducts(); // Gọi hàm để cập nhật danh sách sản phẩm
        }

        // Xóa trạng thái khi component unmount
        return () => {
            sessionStorage.removeItem('showProducts');
        };
    }, []);

    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1, py: 4, bgcolor: '#f5f5f5', width: "99vw", overflowX: "hidden" }}>
                <Grid container spacing={2}>
                    {/* Grid cho hình ảnh */}
                    <Grid item xs={12} md={6}>
                        <img 
                            src="/images/dathuong.webp" 
                            alt="Da Thường" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Grid>
                    
                    {/* Grid cho nội dung */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom sx={{ color: '#ffbb02', fontWeight: 'bold', textAlign: 'center' }} className="highlight-yellow">
                        🌸 Da thường – Duy trì sự cân bằng tự nhiên 🌸
                        </Typography>

                        {showRoutine ? (
                            <>

                        <Typography variant="body1" paragraph sx={{ color: '#ffbb02', fontWeight: 'bold'  }} className="list-black">
                            🔹 Đặc điểm:
                            <ul className="list-black">
                                <li>Không quá khô, không quá dầu, kết cấu da mịn màng.</li>
                                <li>Ít mụn, ít nhạy cảm, dễ thích nghi với nhiều loại mỹ phẩm.</li>
                                <li>Chỉ cần duy trì độ ẩm và bảo vệ da hằng ngày.</li>
                            </ul>
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#ffbb02', fontWeight: 'bold'  }} className="highlight-yellow">
                            ✨ Buổi sáng: Da căng bóng, rạng rỡ cả ngày
                            <ol className="list-black">
                                <li>Sữa rửa mặt – Nhẹ nhàng, không gây kích ứng. </li>
                                <li>Toner – Cấp ẩm và cân bằng pH.</li>
                                <li>Đặc trị – Vitamin C giúp sáng da.</li>
                                <li>Serum – Dưỡng ẩm, giúp da đàn hồi.</li>
                                <li>Kem mắt – Dưỡng ẩm, giảm thâm quầng mắt.</li>
                                <li>Kem dưỡng ẩm – Giữ da mềm mịn, đủ ẩm.</li>
                                <li>Kem chống nắng – Bảo vệ khỏi tia UV.</li>
                            </ol>
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#ffbb02', fontWeight: 'bold'  }} className="highlight-yellow">
                            🌙 Buổi tối: Nuôi dưỡng làn da từ bên trong
                            <ol className="list-black">
                                <li>Tẩy trang – Loại bỏ bụi bẩn, dầu thừa.</li>
                                <li>Sữa rửa mặt – Làm sạch mà không làm khô.</li>
                                <li>Toner – Giúp hấp thụ dưỡng chất tốt hơn.</li>
                                <li>Tẩy tế bào chết (BHA, AHA) – 2 lần/tuần.</li>
                                <li>Đặc trị – Retinol giúp trẻ hóa làn da.</li>
                                <li>Serum – Cung cấp độ ẩm, phục hồi da.</li>
                                <li>Kem mắt – Ngăn ngừa lão hóa.</li>
                                <li>Kem dưỡng ẩm – Giữ da căng bóng suốt đêm.</li>
                            </ol>
                        </Typography>
                        </>
                        ) : (
                            <Typography variant="body1" paragraph sx={{ color: '#ffbb02', fontWeight: 'bold' }} className="list-black">
                                {products.map((product) => (
                                    <div key={product.id} className="product-item" onClick={() => handleProductClick(product.id)}>
                                        <span className="product-title">{product.title}</span> <span className="product-name">{product.name}</span>
                                    </div>
                                ))}
                            </Typography>
                        )}
                        
                        <Button 
                            variant="contained" 
                            sx={{ bgcolor: '#ffbb02', color: 'white', mt: 2 }}
                            onClick={showRoutine ? handleFindProducts : handleShowRoutine}
                        >
                            {showRoutine ? "Tìm Sản Phẩm Phù Hợp" : "Xem Quy Trình"}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default DaThuong;
