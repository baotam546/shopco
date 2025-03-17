import sql from 'mssql';

const config = {
    user: 'sa1', // Thay thế bằng tên người dùng của bạn
    password: '12345', // Thay thế bằng mật khẩu của bạn
    server: 'http://localhost:5173/', // Thay thế bằng địa chỉ server của bạn
    database: 'backup', // Thay thế bằng tên database của bạn
    options: {
        encrypt: true, 
        trustServerCertificate: true 
    }
};

export const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Kết nối thành công với SQL Server');
        return pool;
    })
    .catch(err => console.error('Kết nối thất bại', err)); 