import { Button, Stack, TextField, Typography, colors, Checkbox, FormControlLabel, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { ScreenMode } from '../../pages/SigninPage';
import userService from '../../apis/userService';

const SigninForm = ({ onSwitchMode, onSignIn }) => {
  // Thêm state để quản lý form
  const [formData, setFormData] = useState({
    username: '', 
    password: ''
  });
  
  // Thêm state để quản lý lỗi
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    general: ''
  });

  // Thêm state để quản lý hiển thị mật khẩu
  const [showPassword, setShowPassword] = useState(false);
  
  // Thêm state để quản lý trạng thái loading
  const [isLoading, setIsLoading] = useState(false);

  // Hàm validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.username) {
      tempErrors.username = 'Tên đăng nhập không được để trống';
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = 'Mật khẩu không được để trống';
      isValid = false;
    }

    setErrors({ ...errors, ...tempErrors });
    return isValid;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Xóa lỗi chung khi người dùng thay đổi input
    if (errors.general) {
      setErrors(prev => ({
        ...prev,
        general: ''
      }));
    }
  };

  // Hàm xử lý submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Xóa lỗi trước khi validate
    setErrors({
      username: '',
      password: '',
      general: ''
    });
    
    if (validateForm()) {
      setIsLoading(true);
      
      try {
        // Gọi hàm đăng nhập từ userService

        const respones = await userService.login(formData.username, formData.password); 
        console.log('Login success:', respones);
        onSignIn(respones.userId); 

        const response = await userService.login(formData.username, formData.password);
        
        console.log('Login successful, response:', response);
        
        if (!response) {
          throw new Error('Không nhận được phản hồi từ máy chủ');
        }
        
        // Gọi callback onSignIn để cập nhật trạng thái đăng nhập
        onSignIn(response);

      } catch (error) {
        console.error('Login failed:', error);
        
        if (error.response) {
          // Xử lý lỗi từ server
          if (error.response.status === 404) {
            setErrors(prev => ({ ...prev, username: 'Tên đăng nhập không tồn tại' }));
          } else if (error.response.status === 401) {
            setErrors(prev => ({ ...prev, password: 'Tên đăng nhập hoặc mật khẩu không đúng' }));
          } else if (error.response.status === 400) {
            setErrors(prev => ({ ...prev, general: 'Dữ liệu không hợp lệ' }));
          } else {
            setErrors(prev => ({ ...prev, general: `Lỗi máy chủ: ${error.response.status}` }));
          }
        } else if (error.request) {
          // Xử lý lỗi không nhận được phản hồi
          setErrors(prev => ({ ...prev, general: 'Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng.' }));
        } else {
          // Xử lý lỗi khác
          setErrors(prev => ({ ...prev, general: error.message || 'Đã xảy ra lỗi. Vui lòng thử lại.' }));
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        color: colors.grey[800],
        bgcolor: "white"
      }}
    >
      <Stack spacing={5} sx={{
        width: "100%",
        maxWidth: "500px"
      }}>
        <Stack>
          <Typography variant='h4' fontWeight={600} color={colors.grey[800]}>
            Đăng nhập
          </Typography>
          <Typography color={colors.grey[600]}>
            Chào mừng bạn trở lại!
          </Typography>
        </Stack>

        {errors.general && (
          <Typography color="error" textAlign="center">
            {errors.general}
          </Typography>
        )}

        <Stack spacing={4}>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Typography color={colors.grey[800]}>Tên đăng nhập</Typography>
              <TextField
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={Boolean(errors.username)}
                helperText={errors.username}
                disabled={isLoading}
              />
            </Stack>
            <Stack spacing={1}>
              <Typography color={colors.grey[800]}>Mật khẩu</Typography>
              <TextField
                type={showPassword ? 'text' : 'password'} 
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                disabled={isLoading}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  />
                }
                label="Hiện mật khẩu"
              />
            </Stack>
          </Stack>
          <Button
            type="submit"
            variant='contained'
            size='large'
            disabled={isLoading}
            sx={{
              bgcolor: colors.grey[800],
              "&:hover": {
                bgcolor: colors.grey[600]
              }
            }}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Đăng nhập'}
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography>Chưa có tài khoản?</Typography>
          <Typography
            onClick={() => !isLoading && onSwitchMode(ScreenMode.SIGN_UP)}
            fontWeight={600}
            sx={{
              cursor: isLoading ? 'default' : 'pointer',
              userSelect: "none",
              opacity: isLoading ? 0.5 : 1
            }}
          >
            Đăng kí ngay
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SigninForm;