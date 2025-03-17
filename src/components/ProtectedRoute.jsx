import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import userService from '../apis/userService';

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Use a flag to prevent state updates if the component unmounts
    let isMounted = true;
    
    const checkAuth = async () => {
      try {
        // Kiểm tra xem người dùng đã đăng nhập hay chưa
        const isAuth = userService.isAuthenticated();
        
        if (isMounted) {
          if (isAuth) {
            // Đơn giản hóa logic xác thực để tránh lỗi
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Authentication check failed:', error);
          setIsAuthenticated(false);
          setIsLoading(false);
        }
      }
    };

    checkAuth();
    
    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    // Hiển thị loading spinner hoặc thông báo đang tải
    return <div>Đang tải...</div>;
  }

  if (!isAuthenticated) {
    // Chuyển hướng về trang đăng nhập và lưu lại đường dẫn hiện tại
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Nếu đã xác thực, hiển thị nội dung của route
  return children;
};

export default ProtectedRoute; 