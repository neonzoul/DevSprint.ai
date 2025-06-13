// Express app
import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); //โหลดค่าจาก .env เข้ามาใช้งาน

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// ทดสอบว่า .env ถูกโหลดหรือไม่
console.log('Session Secret from .env:', process.env.SESSION_SECRET);
if (!process.env.SESSION_SECRET) {
    console.error('ERROR: SESSION_SECRET not found in .env file!');
    process.exit(1); // ออกจากโปรแกรมถ้าไม่มีค่านีั้
}

app.get('/', (req, res) => {
    res.send('DevSprint AI Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
