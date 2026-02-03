# Google Apps Script Setup (Enquiries → Sheets + Email)

This project is **frontend-only**, but enquiry submission is handled via **Google Apps Script**, storing rows in **Google Sheets** and sending an **email notification**.

## Steps

1. **Create a Google Sheet**
   - Create a sheet called `Enquiries` (or change `SHEET_NAME` in `Code.gs`).
   - Copy the **Spreadsheet ID** from the URL.

2. **Create an Apps Script project**
   - Open the Google Sheet → **Extensions → Apps Script**
   - Paste `apps-script/Code.gs` into the editor.
   - Set:
     - `SPREADSHEET_ID`
     - `SHEET_NAME`
     - `NOTIFY_EMAIL`

3. **Deploy as Web App**
   - **Deploy → New deployment**
   - Select **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Copy the **Web app URL**

4. **Connect frontend**
   - Create `.env` in the project root (see `.env.example`)
   - Set:

```bash
VITE_GAS_ENDPOINT="PASTE_WEB_APP_URL_HERE"
```

5. **Test**
   - Start frontend: `npm run dev`
   - Submit an enquiry on **Contact** or **Package Details**
   - Confirm:
     - A new row is appended in the `Enquiries` sheet
     - You receive an email at `NOTIFY_EMAIL`

## Notes

- If you re-deploy, Google may generate a new Web App URL depending on your deployment settings.
- The frontend has a **fallback** submission mode for Apps Script deployments that don’t allow readable CORS responses.

