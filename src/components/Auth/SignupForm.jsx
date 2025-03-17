import { useState } from 'react';
import { Button, Stack, TextField, Typography, colors, CircularProgress, InputAdornment, IconButton } from '@mui/material';
import { ScreenMode } from '../../pages/SigninPage';
import userService from '../../apis/userService';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignupForm = ({ onSwitchMode }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Validation patterns
  const patterns = {
    username: /^[a-zA-Z0-9_]{3,30}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  };

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'username':
        if (!value) {
          error = 'Vui lòng nhập tên đăng nhập';
        } else if (value.length < 3) {
          error = 'Tên đăng nhập phải có ít nhất 3 ký tự';
        } else if (value.length > 30) {
          error = 'Tên đăng nhập không được quá 30 ký tự';
        } else if (!patterns.username.test(value)) {
          error = 'Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới';
        }
        break;

      case 'email':
        if (!value) {
          error = 'Vui lòng nhập email';
        } else if (!patterns.email.test(value)) {
          error = 'Email không hợp lệ';
        }
        break;

      case 'password':
        if (!value) {
          error = 'Vui lòng nhập mật khẩu';
        } else if (value.length < 8) {
          error = 'Mật khẩu phải có ít nhất 8 ký tự';
        } else if (!patterns.password.test(value)) {
          error = 'Mật khẩu phải chứa ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt';
        }
        break;

      case 'confirmPassword':
        if (!value) {
          error = 'Vui lòng xác nhận mật khẩu';
        } else if (value !== password) {
          error = 'Mật khẩu xác nhận không khớp';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Cập nhật giá trị
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }

    // Validate và cập nhật lỗi
    const error = validateField(name, value);
    setFormErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const errors = {
      username: validateField('username', username),
      email: validateField('email', email),
      password: validateField('password', password),
      confirmPassword: validateField('confirmPassword', confirmPassword)
    };

    setFormErrors(errors);

    return !Object.values(errors).some(error => error !== '');
  };

  const handleRegister = async () => {
    if (!validateForm()) {
      setError('Vui lòng kiểm tra lại thông tin đăng ký');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await userService.register(username, email, password);
      alert('Đăng ký thành công!');
      onSwitchMode(ScreenMode.SIGN_IN);
    } catch (err) {
      console.error('Lỗi đăng ký:', err);
      if (err.response?.status === 409) {
        if (err.response.data?.message?.includes('Username')) {
          setError('Tên đăng nhập đã tồn tại');
        } else if (err.response.data?.message?.includes('Email')) {
          setError('Email đã được sử dụng');
        } else {
          setError('Tên đăng nhập hoặc email đã tồn tại');
        }
      } else {
        setError(err.response?.data?.message || 'Đã có lỗi xảy ra');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: '100%', color: colors.grey[800] }}>
      <Stack spacing={5} sx={{ width: '100%', maxWidth: '500px' }}>
        <Stack>
          <Typography variant='h4' fontWeight={600} color={colors.grey[800]}>
            Đăng Ký
          </Typography>
          <Typography color={colors.grey[600]}>
            Chào mừng bạn đến với BEAUTY COSMETICS!
          </Typography>
        </Stack>

        <Stack spacing={4}>
          {error && (
            <Typography color='error' sx={{ bgcolor: '#ffebee', p: 2, borderRadius: 1 }}>
              {error}
            </Typography>
          )}
          <Stack spacing={2}>
            <TextField 
              name="username"
              label='Tên đăng nhập' 
              value={username} 
              onChange={handleInputChange}
              error={!!formErrors.username}
              helperText={formErrors.username}
              disabled={loading}
              fullWidth 
              required
            />
            <TextField 
              name="email"
              label='Email' 
              type='email' 
              value={email} 
              onChange={handleInputChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
              disabled={loading}
              fullWidth 
              required
            />
            <TextField 
              name="password"
              label='Mật khẩu' 
              type={showPassword ? 'text' : 'password'}
              value={password} 
              onChange={handleInputChange}
              error={!!formErrors.password}
              helperText={formErrors.password}
              disabled={loading}
              fullWidth 
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePassword}
                      edge="end"
                      disabled={loading}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField 
              name="confirmPassword"
              label='Xác nhận mật khẩu' 
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword} 
              onChange={handleInputChange}
              error={!!formErrors.confirmPassword}
              helperText={formErrors.confirmPassword}
              disabled={loading}
              fullWidth 
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePassword}
                      edge="end"
                      disabled={loading}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Button 
            variant='contained' 
            size='large' 
            sx={{ 
              bgcolor: colors.grey[800], 
              '&:hover': { bgcolor: colors.grey[600] },
              height: '56px'
            }} 
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Đăng ký'}
          </Button>
        </Stack>

        <Stack direction='row' spacing={2}>
          <Typography>Đã có tài khoản?</Typography>
          <Typography 
            onClick={() => !loading && onSwitchMode(ScreenMode.SIGN_IN)} 
            fontWeight={600} 
            sx={{ 
              cursor: loading ? 'default' : 'pointer',
              userSelect: 'none',
              color: loading ? colors.grey[400] : 'inherit'
            }}
          >
            Đăng nhập
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SignupForm;
