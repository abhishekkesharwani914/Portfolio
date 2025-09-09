const transporter = require("../Config/nodemailer.js");
const Query = require("../model/query.js");
const {SENDER_EMAIL_TEMPLATE, OWNER_EMAIL_TEMPLATE} = require("../Config/emailTemplate.js");

module.exports.query = async (req, res) => {
  try {
  const { formData } = req.body;

  // Validate the form data
  if(!formData.name) {
    return res.status(400).json({ success: false, message: "Name is required." });
  }

  if(!formData.email) {
    return res.status(400).json({ success: false, message: "Email is required." });
  }

  if(!formData.country) {
    return res.status(400).json({ success: false, message: "Country is required." });
  }

  if(!formData.contact) {
    return res.status(400).json({ success: false, message: "Contact number is required." });
  }

  if(!formData.message) {
    return res.status(400).json({ success: false, message: "Message is required." });
  }

  if (!formData.name.trim() || !formData.email.trim() || !formData.country.trim() || !formData.contact.trim() || !formData.message.trim()) {
    return res.status(400).json({ success: false, message: "Fields cannot be empty or just spaces." });
  }

  if (formData.name.length < 2 || formData.name.length > 100) {
    return res.status(400).json({ success: false, message: "Name must be between 2 and 100 characters." });
  }
  if (formData.message.length < 10 || formData.message.length > 1000) {
    return res.status(400).json({ success: false, message: "Message must be between 10 and 1000 characters." });
  }

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    return res.status(400).json({ success: false, message: "Invalid email address." });
  }
  if (!/^\d{7,15}$/.test(formData.contact)) {
    return res.status(400).json({ success: false, message: "Invalid contact number." });
  }

  // Save the query to the database
  const newQuery = new Query({ name:formData.name, email: formData.email, country: formData.countryCode, contact:formData.contact, message: formData.query });
  await newQuery.save();

  const timestamp = new Date().toUTCString();

  // 1) Send to you (owner)
  const adminMailOptions = {
    from: process.env.SENDER_MAIL,
    to: process.env.SENDER_MAIL,
    subject: `New portfolio inquiry from ${formData.name}`,
    html: OWNER_EMAIL_TEMPLATE.replace("{{name}}", formData.name)
      .replace("{{email}}", formData.email)
      .replace("{{phone}}", formData.country,formData.contact)
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
  } catch (error) {
    console.error("Error submitting query:", error);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
};
