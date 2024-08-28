from flask import Flask, request, jsonify
from flask_cors import CORS
from profanity import profanity
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import re

app = Flask(__name__)
CORS(app)

@app.route('/api/contactform', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    # Profanity filter (basic implementation)
    if re.search(r'\b(SEO|PERFORMANCE)\b', message, re.IGNORECASE) and profanity.contains_profanity(message):
        return jsonify({'message': 'Your message contains prohibited words.'}), 400

    try:
        # Email settings
        smtp_server = 'smtp.gmail.com'
        smtp_port = 587
        smtp_user = 'your_email@gmail.com'
        smtp_pass = 'your-password'

        # Create email
        msg = MIMEMultipart()
        msg['From'] = email
        msg['To'] = "gssi_enterprise@yahoo.com"
        msg['Subject'] = subject
        msg.attach(MIMEText(message, 'html'))

        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.sendmail(email, "gssi_enterprise@yahoo.com", msg.as_string())
        server.quit()

        return jsonify({'message': "Thank you! We'll get back to you soon."})

    except Exception as e:
        return jsonify({'message': f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
