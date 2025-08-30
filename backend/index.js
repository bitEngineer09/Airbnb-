import dotenv from 'dotenv';
dotenv.config();
import express, { urlencoded } from 'express';
import { connectToDb } from './config/db.js';
import authRouter from './routes/auth.route.js';
import session from 'express-session';
import requestIp from 'request-ip';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(session({secret: "my_secret", resave: true, saveUninitialized: true}));
app.use(requestIp.mw());

app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.listen(PORT, () => {
    connectToDb();
    console.log(`server is running PORT: ${PORT}`)
});

