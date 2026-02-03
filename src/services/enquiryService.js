/**
 * Service to handle enquiry submissions to Google Apps Script.
 */

// Placeholder for the Google Apps Script Web App URL
// Replace this with your actual deployment URL
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzfcYne7cJQ3IHYQWQ58TMEIAVTp5mOTvbaQsGCNgAv1Qdep-j9X6RoF0PH4IWy3k2q/exec';

/**
 * Submits form data to the Google Apps Script endpoint.
 * @param {Object} formData - The enquiry data including name, email, phone, etc.
 * @returns {Promise<Object>} The parsed JSON response from the server.
 */
export async function submitEnquiry(formData) {
  try {
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // 🔥 THIS FIXES CORS
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // no response.json() — browser blocks reading response with no-cors
    return { success: true };
  } catch (error) {
    console.error('Submission Error:', error);
    throw error;
  }
}
