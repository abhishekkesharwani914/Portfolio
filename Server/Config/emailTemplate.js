module.exports.SENDER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Thank You</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f9fafb;
        margin: 0;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: #e2eddf;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
        text-align: center;
      }
      h2 {
        margin: 0;
        color: #111827;
      }
      p {
        color: #374151;
        font-size: 14px;
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Thanks for contacting</h2>
      <p>Hello {{name}},</p>
      <p>
        Thank you for reaching out. I’ve received your message and will get back
        to you as soon as possible.
      </p>
      <p>— Best regards,<br />Abhishek Kesharwani</p>
      <div class="footer">
        <p>
          This email was generated automatically by Abhishek's portfolio site.
        </p>
        <p>Do not reply to this mail</p>
      </div>
    </div>
  </body>
</html>
`

module.exports.OWNER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Portfolio Inquiry</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f9fafb;
        margin: 0;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: #e2eddf;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
      }
      h2 {
        margin-top: 0;
        color: #286;
      }
      .info {
        margin-bottom: 12px;
      }
      .label {
        font-size: 13px;
        font-weight: bold;
        color: #286;
      }
      .value {
        font-size: 14px;
        color: #111827;
      }
      .message {
        margin-top: 10px;
        padding: 12px;
        background: #f3f4f6;
        border-radius: 6px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>📬 New Inquiry from Portfolio</h2>
      <p><strong>Received:</strong> {{timestamp}}</p>

      <div class="info">
        <div class="label">Name</div>
        <div class="value">{{name}}</div>
      </div>

      <div class="info">
        <div class="label">Email</div>
        <div class="value">{{email}}</div>
      </div>

      <div class="info">
        <div class="label">Phone</div>
        <div class="value">{{phone}}</div>
      </div>

      <div class="info">
        <div class="label">Message</div>
        <div class="message">{{message}}</div>
      </div>
    </div>
  </body>
</html>
`