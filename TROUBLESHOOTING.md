# Troubleshooting Guide

## Authentication Errors

### "Hmmm... can't reach this page" or Recursive URL Encoding

This usually happens when:
1. You're not signed into the correct Google account
2. You don't have access to the Google Sheet
3. Browser cache/cookies are causing issues

**Solutions:**
1. **Sign out and sign back in** to your Google account
2. **Clear browser cache and cookies** for Google services
3. **Try a different browser** or incognito/private window
4. **Access Apps Script directly**: https://script.google.com
5. **Make sure you have edit access** to the Google Sheet

### "Authorization Required" Error

When deploying the web app, you may see authorization prompts:

1. **Click "Authorize access"**
2. **Select your Google account**
3. **Click "Advanced"** if you see a warning
4. **Click "Go to [Project Name] (unsafe)"** - This is safe, it's your own script
5. **Click "Allow"** to grant permissions

### "Script function not found: doPost"

**Solution:**
- Make sure you copied the ENTIRE script from `google-apps-script.js`
- Check that the `doPost` function is present in your Apps Script editor
- Save the script (Ctrl+S or Cmd+S)

## Form Submission Issues

### Form submits but data doesn't appear in sheet

**Check:**
1. The sheet name in the script matches your actual sheet name
2. You have edit permissions on the Google Sheet
3. The Web App URL is correct in your `.env` file
4. Your development server was restarted after adding the `.env` file

**Test:**
1. Open the Apps Script editor
2. Run the `testDoPost` function manually
3. Check the execution log for errors
4. Check your Google Sheet for the test data

### Email notifications not received

**Check:**
1. Check your spam folder
2. Verify the email address in the script: `genexlyf@gmail.com`
3. Check the Apps Script execution log for email errors
4. Make sure the script has permission to send emails

### "Configuration Error" message on form

**Solution:**
- The `VITE_GOOGLE_SCRIPT_URL` is not set in your `.env` file
- Add the Web App URL to `.env` file
- Restart your development server

## Deployment Issues

### Can't find "Deploy" button

**Solution:**
- Make sure you've saved your script first
- The "Deploy" button is in the top right of the Apps Script editor
- If you don't see it, try refreshing the page

### Web App URL not working

**Check:**
1. The deployment is set to "Anyone" (not "Only myself")
2. The script is saved and deployed
3. You're using the correct Web App URL (ends with `/exec`, not `/dev`)

### "Script function not found" when accessing URL

**Solution:**
- Make sure `doPost` function exists in your script
- Redeploy the web app after making script changes
- Use "New deployment" instead of "Manage deployments" if issues persist

## Environment Variable Issues

### Changes to `.env` not taking effect

**Solution:**
1. Make sure `.env` is in the project root (same folder as `package.json`)
2. Restart your development server completely
3. Check that the variable name is exactly: `VITE_GOOGLE_SCRIPT_URL`
4. Make sure there are no quotes around the URL in `.env`

### `.env` file not found

**Solution:**
- Create a new file named `.env` (with the dot at the beginning)
- Make sure it's in the root directory of your project
- Add: `VITE_GOOGLE_SCRIPT_URL=your_url_here`

## Still Having Issues?

1. **Check the Apps Script execution log:**
   - In Apps Script editor, click "Executions" (clock icon) in the left sidebar
   - Look for error messages

2. **Test the script manually:**
   - Run the `testDoPost` function
   - Check if data appears in your sheet

3. **Verify permissions:**
   - Make sure your Google account has edit access to the sheet
   - Check that the script has necessary permissions (Sheet access, Email sending)

4. **Check browser console:**
   - Open browser developer tools (F12)
   - Look for errors in the Console tab when submitting the form

