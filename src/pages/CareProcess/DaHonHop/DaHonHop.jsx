import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer/Footer';
import './DaHonHop.css';

const DaHonHop = () => {
    const [products, setProducts] = useState([]);
    const [showRoutine, setShowRoutine] = useState(true);
    const navigate = useNavigate();

    const handleFindProducts = () => {
        const productItems = [
            { id: 9, title: "Sữa rửa mặt:", name: "Gel Rửa Mặt La Roche-Posay Dành Cho Da Dầu, Nhạy Cảm 400ml" },
            { id: 19, title: "Toner:", name: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml Madagascar Centella Toning Toner" },
            { id: 13, title: "Đặc trị:", name: "Gel Tẩy Tế Bào Chết Caryophy Ngăn Ngừa Mụn 250ml Smart Peeling Gel" },
            { id: 57, title: "Kem mắt:", name: "Kem Dưỡng Mắt Ngừa Lão Hóa, Giảm Quầng Thâm 30g" },
            { id: 81, title: "Kem dưỡng ẩm:", name: "Kem Dưỡng La Roche-Posay Giúp Phục Hồi Da Đa Công Dụng 40ml" },
            { id: 76, title: "Kem chống nắng:", name: "Kem Chống Nắng La Roche-Posay Kiểm Soát Dầu SPF50+ 50ml" },
            { id: 75, title: "Tẩy trang:", name: "Nước Tẩy Trang Bioderma Dành Cho Da Dầu & Hỗn Hợp 500ml" },
            { id: 13, title: "Tẩy tế bào chết:", name: "Gel Tẩy Tế Bào Chết Caryophy Ngăn Ngừa Mụn 250ml Smart Peeling Gel" },
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
                            src="/images/dahonhop.jpg" 
                            alt="Da Hỗn Hợp" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Grid>
                    
                    {/* Grid cho nội dung */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom sx={{ color: '#ffbb02', fontWeight: 'bold', textAlign: 'center' }} className="highlight-yellow">
                        🍀 Da hỗn hợp – Kiểm soát dầu, dưỡng ẩm vùng khô 🍀
                        </Typography>

                        {showRoutine ? (
                            <>
                        <Typography variant="body1" paragraph sx={{ color: '#ffbb02', fontWeight: 'bold'  }} className="list-black">
                            🔹 Đặc điểm:
                            <ul className="list-black">
                                <li>Vùng chữ T (trán, mũi, cằm) dầu, nhưng hai bên má lại khô.</li>
                                <li>Dễ bị bít tắc lỗ chân lông ở vùng dầu, bong tróc ở vùng khô.</li>
                                <li>Cần chăm sóc theo từng vùng da riêng biệt.</li>
                            </ul>
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#ffbb02', fontWeight: 'bold'  }} className="highlight-yellow">
                            ✨ Buổi sáng: Cân bằng da hoàn hảo
                            <ol className="list-black">
                                <li>Sữa rửa mặt – Nhẹ nhàng, không gây khô.</li>
                                <li>Toner – Dưỡng ẩm vùng khô, kiềm dầu vùng chữ T.</li>
                                <li>Đặc trị – Niacinamide giúp kiểm soát dầu.</li>
                                <li>Serum – Cấp ẩm nhưng không gây nhờn dính.</li>
                                <li>Kem mắt – Giữ vùng mắt căng mịn.</li>
                                <li>Kem dưỡng ẩm – Gel cho vùng dầu, kem cho vùng khô.</li>
                                <li>Kem chống nắng – Kiểm soát dầu, thấm nhanh.</li>
                            </ol>
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#ffbb02', fontWeight: 'bold'  }} className="highlight-yellow">
                            🌙 Buổi tối: Dưỡng da từng vùng thông minh
                            <ol className="list-black">
                                <li>Tẩy trang – Loại bỏ bụi bẩn, dầu thừa.</li>
                                <li>Sữa rửa mặt – Sạch sâu nhưng không khô căng.</li>
                                <li>Toner – Cân bằng dầu và độ ẩm.</li>
                                <li>Tẩy tế bào chết (BHA, AHA) – 2 lần/tuần.</li>
                                <li>Đặc trị – Trị dầu vùng chữ T, dưỡng ẩm vùng má.</li>
                                <li>Serum – Giúp da đều màu, khỏe mạnh.</li>
                                <li>Kem mắt – Ngăn quầng thâm, lão hóa.</li>
                                <li>8.	Kem dưỡng ẩm/dầu dưỡng – Dưỡng sâu vùng khô.</li>
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

export default DaHonHop;
