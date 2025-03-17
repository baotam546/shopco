import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './Manager.css';
import { useState, useEffect } from 'react';
import userService from '../../apis/userService';

const ViewCustomer = () => {
  const [activeItem, setActiveItem] = useState('');
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [originalCustomers, setOriginalCustomers] = useState([]);

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

  useEffect(() => {
    let isMounted = true;

    const fetchCustomers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await userService.getAllUsers();
        
        if (isMounted) {
          if (Array.isArray(data)) {
            setCustomers(data);
            setOriginalCustomers(data);
          } else {
            console.error('Dữ liệu không phải là mảng:', data);
            setCustomers([]);
            setOriginalCustomers([]);
          }
        }
      } catch (error) {
        if (isMounted) {
          console.error('Lỗi khi lấy danh sách khách hàng:', error);
          setError('Không thể tải dữ liệu khách hàng. Vui lòng thử lại sau.');
          setCustomers([]);
          setOriginalCustomers([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCustomers();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setCustomers(originalCustomers);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase().trim();
    const filteredCustomers = originalCustomers.filter(customer => {
      const name = (customer.name || '').toLowerCase();
      const email = (customer.email || '').toLowerCase();
      const phone = (customer.phone || '').toLowerCase();
      const fullName = (customer.fullName || '').toLowerCase();

      return name.includes(searchTermLower) ||
             email.includes(searchTermLower) ||
             phone.includes(searchTermLower) ||
             fullName.includes(searchTermLower);
    });

    setCustomers(filteredCustomers);
  }, [searchTerm, originalCustomers]);

  const handleClear = () => {
    setSearchTerm('');
    setCustomers(originalCustomers);
  };

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
        {/* Header with Search */}
        <div className="dashboard-header">
          <div className="search-bar" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, email hoặc số điện thoại..."
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
          <h1>Hồ sơ khách hàng</h1>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
            {searchTerm && customers.length > 0 && (
              <div style={{ color: '#666', fontSize: '14px', alignSelf: 'center' }}>
                Tìm thấy: {customers.length} khách hàng
              </div>
            )}
          </div>
        </div>
        
        {/* Table */}
        <div className="dashboard-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>TÊN</th>
                <th>HỌ VÀ TÊN</th>
                <th>MẬT KHẨU</th>
                <th>EMAIL</th>
                <th>VAI TRÒ</th>
                <th>SỐ ĐIỆN THOẠI</th>
                <th>ĐỊA CHỈ</th>
                <th>NGÀY ĐĂNG KÝ</th>
                <th>LOẠI DA</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="10" className="empty-data-message">
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="10" className="empty-data-message error-message">
                    {error}
                  </td>
                </tr>
              ) : customers.length > 0 ? (
                customers.map((customer, index) => (
                  <tr key={customer.userId || index}>
                    <td>{customer.userId || '-'}</td>
                    <td>{customer.name || '-'}</td>
                    <td>{customer.fullName || customer.name || '-'}</td>
                    <td>{customer.password || '-'}</td>
                    <td>{customer.email || '-'}</td>
                    <td>{customer.role || '-'}</td>
                    <td>{customer.phone || '-'}</td>
                    <td>{customer.address || '-'}</td>
                    <td>{customer.registrationDate || '-'}</td>
                    <td>{customer.skinType || '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="empty-data-message">
                    Không có dữ liệu khách hàng
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </Box>
  );
};

export default ViewCustomer;
