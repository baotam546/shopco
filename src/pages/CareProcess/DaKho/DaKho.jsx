
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer/Footer';
import './DaKho.css';

const DaKho = () => {
    const [products, setProducts] = useState([]);
    const [showRoutine, setShowRoutine] = useState(true);
    const navigate = useNavigate();

    const handleFindProducts = () => {
        const productItems = [
            { id: 8, title: "Sữa rửa mặt:", name: "Sữa Rửa Mặt Cetaphil Dịu Lành Cho Da Nhạy Cảm 500ml" },
            { id: 38, title: "Toner:", name: "Dung Dịch Hada Labo Dưỡng Ẩm Tối Ưu Da Thường, Khô 170ml" },
            { id: 16, title: "Đặc trị:", name: "Combo Cocoon Nước Cân Bằng Sen Hậu Giang 310ml + Nước Tẩy Trang Bí Đao 500ml" },
            { id: 55, title: "Kem mắt:", name: "Kem Dưỡng Mắt Giảm Nếp Nhăn, Ngăn Lão Hóa" },
            { id: 38, title: "Kem dưỡng ẩm:", name: "Dung Dịch Hada Labo Dưỡng Ẩm Tối Ưu Da Thường, Khô 170ml" },
            { id: 54, title: "Kem chống nắng:", name: "Kem Chống Nắng Phổ Rộng Bảo Vệ Toàn Diện" },
            { id: 4, title: "Tẩy trang:", name: "Nước Tẩy Trang Simple Sạch Sâu, Cấp Ẩm Đa Tầng 400ml" },
            { id: 26, title: "Tẩy tế bào chết:", name: "Dung Dịch Tẩy Da Chết Paula’s Choice 2% BHA 30ml Skin Perfecting 2% BHA Liquid" },
            { id: 14, title: "Serum:", name: "Serum So'Natural Tái Tạo Da Sinh Học, Mờ Thâm Sáng Da 35ml" },
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
                            src="/images/dakho.jpg" 
                            alt="Da Khô" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Grid>
                    
                    {/* Grid cho nội dung */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom sx={{ color: '#ffbb02', fontWeight: 'bold', textAlign: 'center' }} className="highlight-yellow">
                        💧 Da khô – Cấp ẩm chuyên sâu, ngăn ngừa lão hóa 💧
                        </Typography>

                        {showRoutine ? (
                            <>

                        <Typography variant="body1" paragraph sx={{ color: '#ffbb02', fontWeight: 'bold'  }} className="list-black">
                            🔹 Đặc điểm:
                            <ul className="list-black">
                                <li>Luôn cảm thấy căng, khô ráp, dễ bong tróc.</li>
                                <li>Lỗ chân lông nhỏ, ít dầu nhưng dễ xuất hiện nếp nhăn.</li>
                                <li>Da thiếu sức sống, dễ bị kích ứng khi thời tiết thay đổi.</li>
                            </ul>
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#ffbb02', fontWeight: 'bold'  }} className="highlight-yellow">
                            ✨ Buổi sáng: Da mềm mịn, tràn đầy sức sống
                            <ol className="list-black">
                                <li>Sữa rửa mặt – Dịu nhẹ, không làm mất độ ẩm tự nhiên.</li>
                                <li>Toner – Cấp nước sâu với Hyaluronic Acid.</li>
                                <li>Đặc trị – Vitamin C giúp da sáng khỏe.</li>
                                <li>Serum – Dưỡng ẩm mạnh với Hyaluronic Acid, Peptide.</li>
                                <li>Kem mắt – Ngăn ngừa nếp nhăn, chống lão hóa.</li>
                                <li>Kem dưỡng ẩm – Dưỡng sâu giúp da căng mọng.</li>
                                <li>Kem chống nắng – Dưỡng ẩm, bảo vệ da khỏi tia UV.</li>
                            </ol>
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#ffbb02', fontWeight: 'bold'  }} className="highlight-yellow">
                            🌙 Buổi tối: Phục hồi, tái tạo da
                            <ol className="list-black">
                                <li>Tẩy trang – Làm sạch nhưng không gây khô.</li>
                                <li>Sữa rửa mặt – Nhẹ nhàng, không gây kích ứng.</li>
                                <li>Toner – Dưỡng ẩm, giúp hấp thụ dưỡng chất tốt hơn.</li>
                                <li>Tẩy tế bào chết (BHA, AHA) – Làm mềm da (2 lần/tuần).</li>
                                <li>Đặc trị – Retinol giúp chống lão hóa.</li>
                                <li>Serum – Dưỡng ẩm sâu, phục hồi làn da.</li>
                                <li>Kem mắt – Dưỡng ẩm, giảm quầng thâm.</li>
                                <li>Kem dưỡng ẩm – Dưỡng sâu, khóa ẩm suốt đêm.</li>
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
export default DaKho;
