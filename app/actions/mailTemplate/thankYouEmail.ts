export const getThankYouEmailTemplate = (name: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - INTELLEON</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f6f9;
          margin: 0;
          padding: 0;
          color: #333333;
        }
        .email-container {
          max-width: 600px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        .email-header {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 30px;
          text-align: center;
          color: #ffffff;
        }
        .email-header h1 {
          margin: 0;
          font-size: 24px;
          letter-spacing: 1px;
          font-weight: 700;
        }
        .email-body {
          padding: 40px 30px;
          line-height: 1.6;
        }
        .greeting {
          font-size: 18px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 20px;
        }
        .message {
          font-size: 15px;
          color: #4b5563;
          margin-bottom: 25px;
        }
        .highlight-box {
          background-color: #f8fafc;
          border-left: 4px solid #2563eb;
          padding: 15px 20px;
          margin-bottom: 25px;
          border-radius: 0 8px 8px 0;
          font-size: 14px;
          color: #1e293b;
        }
        .contact-details {
          background-color: #f1f5f9;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
        }
        .contact-details h3 {
          margin: 0 0 10px 0;
          font-size: 14px;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .contact-details p {
          margin: 5px 0;
          font-size: 14px;
          color: #475569;
        }
        .contact-details a {
          color: #2563eb;
          text-decoration: none;
        }
        .email-footer {
          background-color: #f8fafc;
          padding: 20px 30px;
          text-align: center;
          font-size: 13px;
          color: #94a3b8;
          border-top: 1px solid #e2e8f0;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>INTELLEON</h1>
        </div>
        <div class="email-body">
          <div class="greeting">Hi ${name},</div>
          <div class="message">
            Thank you for reaching out to <strong>INTELLEON</strong>. We have successfully received your message and truly appreciate your interest in our services.
          </div>
          <div class="highlight-box">
            Our specialist engineering consultants are currently reviewing your inquiry and will be in touch with you shortly.
          </div>
          <div class="contact-details">
            <h3>Need Immediate Assistance?</h3>
            <p>📧 Email: <a href="mailto:info@intelleon.com">info@intelleon.com</a></p>
            <p>📞 Phone: <a href="tel:+94777266411">+94 777 266 411</a></p>
            <p>🌐 Website: <a href="https://www.intelleon.com" target="_blank" rel="noopener noreferrer">www.intelleon.com</a></p>
          </div>
          <p style="margin: 0; font-size: 15px; color: #4b5563;">
            Best regards,<br>
            <strong>INTELLEON Team</strong>
          </p>
        </div>
        <div class="email-footer">
          &copy; ${new Date().getFullYear()} INTELLEON. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
};
