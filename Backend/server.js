require('dotenv').config(); // โหลดตัวแปรจากไฟล์ .env

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const slipRoutes = require('./routers/slip');
const travelRoutes = require('./routers/record');
const commentRoutes = require('./routers/comment');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Multer setup for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Static files for uploads (comment images or others)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/slipok', upload.single('files'), slipRoutes);  // สำหรับอัปโหลดสลิป
app.use('/travel', travelRoutes);                         // สำหรับบันทึกการเดินทาง
app.use('/comment', commentRoutes);                           // สำหรับ comment (เช่น รีวิว/ข้อความจากผู้ใช้)

// Default route
app.get('/', (req, res) => {
    res.json({ msg: process.env.API_URL || 'Welcome to the API' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});
