/**
 * Google Apps Script for Genexlyf Contact Form
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1V1DmccnR179wSOU0bZ7YMcBk0Z1TLMVh8WJ6buIpQu8/edit
 * 2. Go to Extensions > Apps Script
 * 3. Delete the default code and paste this entire file
 * 4. Replace 'YOUR_SHEET_NAME' with your actual sheet name (usually 'Sheet1')
 * 5. Click Save (Ctrl+S or Cmd+S)
 * 6. Click Deploy > New deployment
 * 7. Select type: Web app
 * 8. Description: Contact Form Handler
 * 9. Execute as: Me
 * 10. Who has access: Anyone
 * 11. Click Deploy
 * 12. Copy the Web App URL and use it in your Contact.tsx file
 */

// Replace 'Sheet1' with your actual sheet name
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.openById('1V1DmccnR179wSOU0bZ7YMcBk0Z1TLMVh8WJ6buIpQu8')
      .getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      const ss = SpreadsheetApp.openById('1V1DmccnR179wSOU0bZ7YMcBk0Z1TLMVh8WJ6buIpQu8');
      const newSheet = ss.insertSheet(SHEET_NAME);
      // Add headers
      newSheet.appendRow(['Timestamp', 'Name', 'Email', 'Company', 'Phone', 'Subject', 'Message']);
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'Sheet created. Please try again.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Company', 'Phone', 'Subject', 'Message']);
    }
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Prepare row data
    const rowData = [
      timestamp,
      data.name || '',
      data.email || '',
      data.company || '',
      data.phone || '',
      data.subject || '',
      data.message || ''
    ];
    
    // Append data to sheet
    sheet.appendRow(rowData);
    
    // Send email notification
    const emailSubject = `New Contact Form Submission: ${data.subject || 'No Subject'}`;
    const emailBody = `
New contact form submission received:

Name: ${data.name || 'Not provided'}
Email: ${data.email || 'Not provided'}
Company: ${data.company || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject || 'Not provided'}

Message:
${data.message || 'No message provided'}

---
Submitted at: ${timestamp}
    `;
    
    try {
      MailApp.sendEmail({
        to: 'hello@genexlyf.com',
        subject: emailSubject,
        body: emailBody
      });
    } catch (emailError) {
      // Log email error but don't fail the request
      Logger.log('Email sending failed: ' + emailError.toString());
    }
    
    // Return success response
    // Note: CORS is automatically handled by Google Apps Script for public web apps
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Form submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing in Apps Script editor)
function testDoPost() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        phone: '1234567890',
        subject: 'Test Subject',
        message: 'This is a test message'
      })
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

