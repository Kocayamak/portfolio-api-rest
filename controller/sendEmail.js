import transporter from "../config/nodemailer.js";
import log from "../model/log.js";

const sendEmail = async (req, res) => {
  try {
    const { name, email, message, ip_adress } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.MAIL_USERNAME,
      subject: `Message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    log.create({
        process: "send_email",
        ip_adress: ip_adress,
    });

    res.status(200).json({ msg: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ msg: error});
  }
};

export { sendEmail };
