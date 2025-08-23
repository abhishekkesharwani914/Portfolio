const transporter = require("../Config/nodemailer.js");
const Query = require("../model/query.js");
const {SENDER_EMAIL_TEMPLATE, OWNER_EMAIL_TEMPLATE} = require("../Config/emailTemplate.js");

module.exports.query = async (req, res) => {
  const { formData } = req.body;

  // Save the query to the database
  const newQuery = new Query({ name:formData.name, email: formData.email, contact:formData.contact, message: formData.query });
  await newQuery.save();

  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  // 1) Send to you (owner)
  const adminMailOptions = {
    from: process.env.SENDER_MAIL,
    to: process.env.SENDER_MAIL,
    subject: `New portfolio inquiry from ${formData.name}`,
    html: OWNER_EMAIL_TEMPLATE.replace("{{name}}", formData.name)
      .replace("{{email}}", formData.email)
      .replace("{{phone}}", formData.contact)
      .replace("{{message}}", formData.message)
      .replace("{{timestamp}}", timestamp),
    replyTo: formData.email
  };

  transporter.sendMail(adminMailOptions);

  // Auto-reply to the sender
  const senderMailOptions = {
    from: process.env.SENDER_MAIL,
    to: formData.email,
    subject: `Thanks ${formData.name}, Abhishek received your message`,
    html: SENDER_EMAIL_TEMPLATE.replace("{{name}}", formData.name),
  };

  transporter.sendMail(senderMailOptions);

  res.json({success: true, message: "Query submitted successfully" });
};
