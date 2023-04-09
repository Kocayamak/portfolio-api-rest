import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import hbs from "nodemailer-express-handlebars";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});


export default transporter;
