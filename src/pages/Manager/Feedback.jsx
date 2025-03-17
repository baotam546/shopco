import { useState, useEffect, useMemo } from 'react';
import { FaFilter, FaFileExport, FaPlus } from 'react-icons/fa';
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem, Pagination, CircularProgress } from '@mui/material';
import './Manager.css';
import { useNavigate } from 'react-router-dom';
import reviewService from '../../apis/reviewService';
import userService from '../../apis/userService';
import productService from '../../apis/productService';

const Feedback = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('feedback');
  const [reviews, setReviews] = useState([]);
  const [originalReviews, setOriginalReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCount, setFilteredCount] = useState(0);
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const [selectedRating, setSelectedRating] = useState('');
  const [userNames, setUserNames] = useState({});
  const [productNames, setProductNames] = useState({});
  
  // Phân trang
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const sidebarItems = [
    { id: 'revenue', name: 'Doanh thu', icon: '📊' },
    { id: 'staff', name: 'Nhân viên', icon: '👤' },
    { id: 'viewOrder', name: 'Đơn hàng', icon: '📋' },
    { id: 'product', name: 'Sản phẩm', icon: '📦' },
    { id: 'viewCustomer', name: 'Hồ sơ khách hàng', icon: '📝' },
    { id: 'viewSupport', name: 'Đơn hỗ trợ', icon: '📫' },
    { id: 'voucher', name: 'Vouchers', icon: '🎫' },
    { id: 'feedback', name: 'Feedback', icon: '📢' },
  ];

  // Lấy danh sách đánh giá
  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await reviewService.getAllReviews();
      console.log('Reviews response:', response);
      
      const processedReviews = response.map(review => ({
        reviewId: review.reviewId,
        userId: review.userId,
        productId: review.productId,
        rating: review.rating,
        reviewComment: review.reviewComment,
        reviewDate: new Date(review.reviewDate).toLocaleDateString('vi-VN')
      }));
      
      setReviews(processedReviews);
      setOriginalReviews(processedReviews);
      // Fetch user names and product names
      await Promise.all([
        fetchUserNames(processedReviews),
        fetchProductNames(processedReviews)
      ]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setError('Đã xảy ra lỗi khi tải dữ liệu đánh giá');
      setLoading(false);
    }
  };

  // Sửa lại hàm fetchUserNames
  const fetchUserNames = async (reviews) => {
    try {
      const users = await userService.getAllUsers();
      const userNameMap = {};
      users.forEach(user => {
        // Sử dụng fullName nếu có, nếu không thì dùng name
        userNameMap[user.userId] = user.fullName || user.name || 'Chưa có tên';
      });
      setUserNames(userNameMap);
    } catch (error) {
      console.error('Lỗi khi lấy tên người dùng:', error);
    }
  };

  // Thêm hàm fetchProductNames
  const fetchProductNames = async (reviews) => {
    try {
      const response = await productService.getAllProducts();
      const productNameMap = {};
      
      // Xử lý response để lấy tên sản phẩm
      if (response && response.$values) {
        response.$values.forEach(product => {
          productNameMap[product.productId] = product.productName;
        });
      }
      
      setProductNames(productNameMap);
    } catch (error) {
      console.error('Lỗi khi lấy tên sản phẩm:', error);
    }
  };

  // Gọi API khi component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  // Sửa lại useEffect xử lý tìm kiếm
  useEffect(() => {
    if (!searchTerm.trim()) {
      setReviews(originalReviews);
      setFilteredCount(0);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase().trim();
    const filteredReviews = originalReviews.filter(review => {
      const reviewId = review.reviewId.toString().toLowerCase();
      const userName = (userNames[review.userId] || '').toLowerCase();
      const productName = (productNames[review.productId] || '').toLowerCase();
      const reviewComment = (review.reviewComment || '').toLowerCase();

      return reviewId.includes(searchTermLower) ||
             userName.includes(searchTermLower) ||
             productName.includes(searchTermLower) ||
             reviewComment.includes(searchTermLower);
    });

    setReviews(filteredReviews);
    setFilteredCount(filteredReviews.length !== originalReviews.length ? filteredReviews.length : 0);
  }, [searchTerm, originalReviews, userNames, productNames]);

  // Sử dụng useMemo để tính toán đánh giá hiển thị theo phân trang
  const displayedReviews = useMemo(() => {
    // Phân trang ở client
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    return reviews.slice(startIndex, endIndex);
  }, [reviews, page, pageSize]);

  // Xử lý thay đổi trang
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  // Xử lý lọc
  const handleFilterClick = () => {
    setSelectedRating('');
    setOpenFilterDialog(true);
  };

  const handleFilterApply = () => {
    console.log('Selected Rating:', selectedRating);
    
    // Nếu không có bộ lọc nào được chọn, reset về danh sách gốc
    if (!selectedRating) {
      setReviews(originalReviews);
      setFilteredCount(0);
      setOpenFilterDialog(false);
      return;
    }
    
    const filtered = originalReviews.filter(review => {
      return selectedRating ? review.rating === parseInt(selectedRating) : true;
    });

    console.log('Filtered Reviews:', filtered);
    // Chỉ hiển thị thông báo nếu có đánh giá được lọc và khác với danh sách gốc
    setFilteredCount(filtered.length !== originalReviews.length ? filtered.length : 0);
    setReviews(filtered);
    setPage(1); // Reset về trang đầu tiên khi lọc
    setOpenFilterDialog(false);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
    setReviews(originalReviews);
    // Reset thông báo số lượng lọc khi xóa tìm kiếm
    setFilteredCount(0);
  };

  // Thêm hàm để xóa bộ lọc
  const handleClearFilters = () => {
    setReviews(originalReviews);
    setFilteredCount(0);
    setSelectedRating('');
    setSearchTerm('');
  };

  // Tạo danh sách rating cho bộ lọc
  const ratingOptions = [1, 2, 3, 4, 5];

  return (
    <Box sx={{ bgcolor: "#f0f0f0", minHeight: "100vh", width:'99vw' }}>
    <div className="manager-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo">
            <img src="/images/logo.png" alt="Beauty Cosmetics" />
          </div>
          <div className="brand">
            <div>BEAUTY</div>
            <div>COSMETICS</div>
          </div>
        </div>
        
        <div className="sidebar-title">MANAGER</div>
        
        <div className="sidebar-menu">
          {sidebarItems.map((item) => (
            <div key={item.id} className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`} onClick={() => { setActiveItem(item.id); navigate(`/${item.id}`); }} style={{ cursor: 'pointer' }}>
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-text">{item.name}</span>
            </div>
          ))}
        </div>
        
        <div className="logout-button" onClick={() => navigate('/')}>
          <span className="logout-icon">🚪</span>
          <span>Đăng Xuất</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="dashboard-header">
          <div className="search-bar" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Tìm kiếm theo ID, tên người dùng, tên sản phẩm, bình luận..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 15px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                fontSize: '14px',
                color: '#000000',
                backgroundColor: '#ffffff',
                outline: 'none',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
            />
            {searchTerm && (
              <button
                onClick={handleClear}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Xóa
              </button>
            )}
          </div>
        </div>
        
        {/* Dashboard Title and Actions */}
        <div className="dashboard-title-bar">
          <h1>Đánh Giá Sản Phẩm</h1>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {searchTerm && reviews.length > 0 && (
              <div style={{ color: '#666', fontSize: '14px', alignSelf: 'center' }}>
                Tìm thấy: {reviews.length} đánh giá
              </div>
            )}
            <button className="btn-filter" onClick={handleFilterClick}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <FaFilter /> 
                <span>Lọc</span>
                {filteredCount > 0 && <span className="notification">{filteredCount}</span>}
              </div>
            </button>
            {filteredCount > 0 && (
              <button
                onClick={handleClearFilters}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Xóa bộ lọc
              </button>
            )}
          </div>
        </div>
        
        {/* Table */}
        <div className="dashboard-table">
          <table style={{ 
            tableLayout: 'fixed', 
            width: '100%', 
            borderCollapse: 'separate', 
            borderSpacing: '0',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa', height: '50px' }}>
                <th style={{ width: '80px', padding: '12px 8px', borderBottom: '2px solid #dee2e6', fontWeight: 'bold', color: '#495057', textAlign: 'center' }}>REVIEW ID</th>
                <th style={{ width: '120px', padding: '12px 8px', borderBottom: '2px solid #dee2e6', fontWeight: 'bold', color: '#495057', textAlign: 'center' }}>TÊN</th>
                <th style={{ width: '200px', padding: '12px 8px', borderBottom: '2px solid #dee2e6', fontWeight: 'bold', color: '#495057', textAlign: 'center' }}>TÊN SẢN PHẨM</th>                              
                <th style={{ width: '80px', padding: '12px 8px', borderBottom: '2px solid #dee2e6', fontWeight: 'bold', color: '#495057', textAlign: 'center' }}>RATING</th>
                <th style={{ width: '300px', padding: '12px 8px', borderBottom: '2px solid #dee2e6', fontWeight: 'bold', color: '#495057', textAlign: 'center' }}>REVIEW COMMENT</th>
                <th style={{ width: '120px', padding: '12px 8px', borderBottom: '2px solid #dee2e6', fontWeight: 'bold', color: '#495057', textAlign: 'center' }}>REVIEW DATE</th>               
                <th style={{ width: '120px', padding: '12px 8px', borderBottom: '2px solid #dee2e6', fontWeight: 'bold', color: '#495057', textAlign: 'center' }}>THAO TÁC</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td 
                    colSpan="7" 
                    style={{ 
                      padding: '30px', 
                      textAlign: 'center', 
                      color: '#6c757d', 
                      fontSize: '16px',
                      backgroundColor: '#f8f9fa',
                      borderBottom: '1px solid #dee2e6'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                      <CircularProgress size={24} />
                      <span>Đang tải dữ liệu...</span>
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td 
                    colSpan="7" 
                    style={{ 
                      padding: '30px', 
                      textAlign: 'center', 
                      color: '#dc3545', 
                      fontSize: '16px',
                      backgroundColor: '#f8f9fa',
                      borderBottom: '1px solid #dee2e6'
                    }}
                  >
                    {error}
                  </td>
                </tr>
              ) : displayedReviews.length > 0 ? (
                displayedReviews.map((review, index) => (
                  <tr 
                    key={review.reviewId} 
                    style={{ 
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
                      transition: 'all 0.2s',
                      ':hover': { backgroundColor: '#f1f3f5' }
                    }}
                  >
                    <td style={{ overflow: 'auto', maxHeight: '100px', padding: '8px', borderBottom: '1px solid #dee2e6', fontSize: '14px', textAlign: 'center' }}>{review.reviewId}</td>
                    <td style={{ overflow: 'auto', maxHeight: '100px', padding: '8px', borderBottom: '1px solid #dee2e6', fontSize: '14px', textAlign: 'center' }}>{userNames[review.userId] || 'Loading...'}</td>
                    <td style={{ overflow: 'auto', maxHeight: '100px', padding: '8px', borderBottom: '1px solid #dee2e6', fontSize: '14px', textAlign: 'left' }}>{productNames[review.productId] || 'Loading...'}</td>
                    <td style={{ overflow: 'auto', maxHeight: '100px', padding: '8px', borderBottom: '1px solid #dee2e6', fontSize: '14px', textAlign: 'center' }}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={{ color: i < review.rating ? '#ffc107' : '#e4e5e9', fontSize: '16px' }}>★</span>
                      ))}
                    </td>
                    <td style={{ overflow: 'auto', maxHeight: '100px', padding: '8px', borderBottom: '1px solid #dee2e6', fontSize: '14px', textAlign: 'left' }}>{review.reviewComment}</td>
                    <td style={{ overflow: 'auto', maxHeight: '100px', padding: '8px', borderBottom: '1px solid #dee2e6', fontSize: '14px', textAlign: 'center' }}>{review.reviewDate}</td>
                    <td style={{ whiteSpace: 'nowrap', overflow: 'auto', maxHeight: '100px', padding: '8px', borderBottom: '1px solid #dee2e6', textAlign: 'center' }}>
                      <button
                        onClick={() => navigate(`/product/${review.productId}`)}
                        style={{
                          padding: '5px 10px',
                          backgroundColor: '#007bff',
                          color: 'white',
                          border: 'none',
                          borderRadius: '3px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                          ':hover': { backgroundColor: '#0069d9' }
                        }}
                      >
                        Chi tiết
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td 
                    colSpan="7" 
                    className="empty-data-message"
                    style={{ 
                      padding: '30px', 
                      textAlign: 'center', 
                      color: '#6c757d', 
                      fontSize: '16px',
                      fontStyle: 'italic',
                      backgroundColor: '#f8f9fa',
                      borderBottom: '1px solid #dee2e6'
                    }}
                  >
                    Không có dữ liệu
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          
          {/* Phân trang */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Pagination
              count={Math.ceil(reviews.length / pageSize)}
              page={page}
              onChange={handlePageChange}
              color="primary"
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
    <Dialog open={openFilterDialog} onClose={() => setOpenFilterDialog(false)}>
      <DialogTitle>Lọc đánh giá</DialogTitle>
      <DialogContent>
        <Select
          value={selectedRating}
          onChange={handleRatingChange}
          displayEmpty
          fullWidth
          style={{ marginBottom: '10px', marginTop: '10px' }}
        >
          <MenuItem value=""><em>Số sao đánh giá</em></MenuItem>
          {ratingOptions.map((rating) => (
            <MenuItem key={rating} value={rating.toString()}>
              {rating} {rating === 1 ? 'sao' : 'sao'}
            </MenuItem>
          ))}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenFilterDialog(false)}>Hủy</Button>
        <Button onClick={handleFilterApply} color="primary">Áp dụng</Button>
      </DialogActions>
    </Dialog>
    </Box>
  );
};

export default Feedback;
