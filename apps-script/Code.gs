/**
 * Tours & Travel Website — Google Apps Script (Web App)
 *
 * What it does:
 * - Accepts enquiry submissions (JSON) from the React frontend
 * - Stores data in a Google Sheet (append row)
 * - Sends an email notification
 *
 * Setup:
 * 1) Create a Google Sheet and copy its ID.
 * 2) Open script editor (Extensions → Apps Script) OR create a standalone Apps Script project.
 * 3) Paste this file into Code.gs
 * 4) Set the constants below.
 * 5) Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone
 * 6) Copy the Web App URL and set it as VITE_GAS_ENDPOINT in your frontend .env
 */

const SPREADSHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE'
const SHEET_NAME = 'Enquiries'
const NOTIFY_EMAIL = 'you@example.com'

function ensureSheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID)
  let sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME)

  const headers = [
    'submittedAt',
    'source',
    'fullName',
    'email',
    'phone',
    'travelDate',
    'travellers',
    'packageSlug',
    'message',
  ]

  if (sheet.getLastRow() === 0) sheet.appendRow(headers)
  return sheet
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}

function doGet() {
  return jsonResponse_({ ok: true, message: 'Tours & Travel enquiry endpoint is live.' })
}

function doPost(e) {
  try {
    const raw = e && e.postData && e.postData.contents ? e.postData.contents : '{}'
    const body = JSON.parse(raw)

    const sheet = ensureSheet_()

    const row = [
      body.submittedAt || new Date().toISOString(),
      body.source || '',
      body.fullName || '',
      body.email || '',
      body.phone || '',
      body.travelDate || '',
      body.travellers || '',
      body.packageSlug || '',
      body.message || '',
    ]

    sheet.appendRow(row)

    const subject = `New Enquiry: ${body.fullName || 'Unknown'}`
    const message =
      `New enquiry received:\n\n` +
      `Name: ${body.fullName || ''}\n` +
      `Email: ${body.email || ''}\n` +
      `Phone: ${body.phone || ''}\n` +
      `Travel Date: ${body.travelDate || ''}\n` +
      `Travellers: ${body.travellers || ''}\n` +
      `Package: ${body.packageSlug || ''}\n` +
      `Message: ${body.message || ''}\n\n` +
      `Submitted At: ${body.submittedAt || ''}`

    if (NOTIFY_EMAIL && NOTIFY_EMAIL.indexOf('@') > -1) {
      MailApp.sendEmail(NOTIFY_EMAIL, subject, message)
    }

    return jsonResponse_({ ok: true, message: 'Saved and notified.' })
  } catch (err) {
    return jsonResponse_({ ok: false, message: String(err) })
  }
}

