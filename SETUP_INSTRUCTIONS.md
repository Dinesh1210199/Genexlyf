# Contact Form Setup Instructions

## Google Apps Script Setup

### Important: Authentication Issue Fix

If you're seeing authentication errors or "can't reach this page" errors:

1. **Make sure you're signed into the correct Google account** that has access to the Google Sheet
2. **Try accessing Apps Script directly**: https://script.google.com
3. **Clear your browser cache and cookies** for Google services
4. **Use an incognito/private window** to test if it's a browser issue

### Step-by-Step Setup

1. **Open your Google Sheet**
   - Go to: https://docs.google.com/spreadsheets/d/1V1DmccnR179wSOU0bZ7YMcBk0Z1TLMVh8WJ6buIpQu8/edit
   - **Make sure you're signed in** with a Google account that has edit access to this sheet

2. **Open Apps Script Editor**
   - Click on `Extensions` → `Apps Script`
   - **Alternative method**: If the above doesn't work, go directly to https://script.google.com
   - Click `New Project` and then connect it to your spreadsheet

3. **Paste the Script**
   - Delete any default code in the editor (the `function myFunction() {}` placeholder)
   - Copy the entire contents of `google-apps-script.js` file
   - Paste it into the Apps Script editor

4. **Update Sheet Name (if needed)**
   - In the script, find the line: `const SHEET_NAME = 'Sheet1';`
   - Replace `'Sheet1'` with your actual sheet name if it's different
   - Most sheets default to 'Sheet1', so you might not need to change this
   - To check your sheet name: Look at the bottom tab in your Google Sheet

5. **Save the Script**
   - Click `Save` (or press Ctrl+S / Cmd+S)
   - Give it a name like "Contact Form Handler" (click the untitled project name at the top)

6. **Authorize the Script (First Time Only)**
   - You'll see an authorization dialog: "This app might not work as expected without providing all requested permissions"
   - **Click "Review permissions"** (the blue button)
   - Select your Google account
   - You may see a warning: "Google hasn't verified this app"
   - **This is normal** - it's because you just created the script
   - Click `Advanced` → `Go to Contact Form Handler (unsafe)` 
   - **Note**: "Unsafe" here just means it's not verified by Google, but it's YOUR script, so it's safe
   - Click `Allow` to grant permissions
   - The permissions needed are:
     - Access to your Google Sheets (to write form data)
     - Send emails on your behalf (to send notifications)
   - After authorization, you can close the dialog and continue

7. **Deploy as Web App**
   - Click on `Deploy` → `New deployment`
   - Click the gear icon (⚙️) next to "Select type"
   - Choose `Web app`
   - Fill in the details:
     - **Description**: Contact Form Handler (v1)
     - **Execute as**: Me ([your-email]@gmail.com)
     - **Who has access**: Anyone (this is required for public form submissions)
   - Click `Deploy`
   - **Important**: If you see a warning about requiring authorization, click "Authorize access" and follow the prompts again

8. **Copy the Web App URL**
   - After deployment, you'll see a "Web App URL"
   - Copy this URL (it will look like: `https://script.google.com/macros/s/AKfycby.../exec`)
   - **Keep this URL safe** - you'll need it for the next step

9. **Add URL to Your Project**
   - Create a `.env` file in the root of your project (if it doesn't exist)
   - **Important**: The `.env` file should be in the same directory as `package.json`
   - Add this line (replace with your actual URL):
     ```
     VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycby.../exec
     ```
   - **Do NOT** include quotes around the URL
   - **Important**: 
     - Restart your development server after adding the environment variable
     - If using `npm run dev`, stop it (Ctrl+C) and start it again
     - The `.env` file should NOT be committed to git (add it to `.gitignore`)

## Testing

1. **Test the Form**
   - Fill out the contact form on your website
   - Submit it
   - Check your Google Sheet - you should see a new row with the form data
   - Check your email (genexlyf@gmail.com) - you should receive a notification

2. **Troubleshooting**
   - If submissions aren't appearing in the sheet, check:
     - The sheet name matches what's in the script
     - The script has been deployed correctly
     - The Web App URL is correct in your `.env` file
     - Your development server has been restarted after adding the env variable

## Security Notes

- The Google Apps Script is set to allow "Anyone" to access it, which is necessary for public form submissions
- The script validates and sanitizes input before writing to the sheet
- Email notifications are sent to genexlyf@gmail.com for each submission

## Sheet Structure

The script will automatically create columns in this order:
1. Timestamp
2. Name
3. Email
4. Company
5. Phone
6. Subject
7. Message

If the sheet is empty, headers will be added automatically on the first submission.

