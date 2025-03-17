import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User'; 
import bcrypt from 'bcrypt';

const app = express();
app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/shopco', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Kết nối với MongoDB thành công'))
.catch(err => console.error('Kết nối thất bại', err));


app.post('/api/Users/register', async (req, res) => {
    const { username, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Email không hợp lệ. Vui lòng nhập lại.' });
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: 'Mật khẩu không hợp lệ. Mật khẩu phải ít nhất 8 ký tự, bao gồm 1 chữ cái và 1 ký tự đặc biệt.' });
    }

    try {
        // Kiểm tra xem email đã tồn tại trong MongoDB
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email đã được sử dụng. Vui lòng chọn email khác.' });
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Đăng ký thành công' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Đã xảy ra lỗi. Vui lòng thử lại sau.' });
    }
});

// Khởi động server
app.listen(7203, () => {
    console.log('Server đang chạy trên port 7203');
});