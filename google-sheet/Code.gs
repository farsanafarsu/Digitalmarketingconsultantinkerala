/**
 * The website's contact form posts here. Each enquiry is saved as a row in the "Leads" tab of my Google Sheet and
 * emailed to me straight away (hitting Reply answers the visitor).
 *
 * Setup (once):
 *  1. Open the sheet > Extensions > Apps Script, delete what is there and paste this whole file. Save.
 *  2. Deploy > New deployment > type "Web app". Execute as: Me. Who has access: Anyone. Deploy and allow access.
 *  3. Copy the Web app URL (ends in /exec) and paste it into SHEET_URL in the contact script in index.html.
 * After editing this file later: Deploy > Manage deployments > edit > Version: New version, so the URL stays the same.
 */
var SHEET_ID = '1XIcVY4RH-u2Vmu24wRZux-dK4x5oO4Q0o6V31Oxvlr0';
var TAB = 'Leads';
var NOTIFY = 'sanafarsana001@gmail.com';
var HEAD = ['Date', 'Name', 'Email', 'Business', 'Phone', 'Services', 'Message', 'Page'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (d._honey) return reply({ ok: true }); // bot filled the hidden field
    if (!d.email && !d.name) return reply({ ok: false, error: 'empty' });

    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sh = ss.getSheetByName(TAB) || ss.insertSheet(TAB);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEAD);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, HEAD.length).setFontWeight('bold');
    }
    sh.appendRow([new Date(), clean(d.name), clean(d.email), clean(d.business), clean(d.phone),
                  clean(d.services), clean(d.message), clean(d.page)]);
    notify(d, ss.getUrl());
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// open the /exec URL in a browser to check the deployment is live
function doGet() {
  return reply({ ok: true, msg: 'Lead logger is running' });
}

// emails me the enquiry; Reply goes to the visitor. A mail failure (e.g. daily quota) never loses the saved row
function notify(d, sheetUrl) {
  try {
    var rows = [['Name', d.name], ['Email', d.email], ['Business', d.business], ['Phone', d.phone || 'Not given'],
                ['Interested in', d.services], ['Message', d.message], ['Page', d.page]];
    var html = '<table cellpadding="8" style="border-collapse:collapse;font:14px Arial,sans-serif">' +
      rows.map(function (r) {
        return '<tr><td style="color:#6e6e73;vertical-align:top"><b>' + r[0] + '</b></td><td>' +
               esc(r[1]).replace(/\n/g, '<br>') + '</td></tr>';
      }).join('') + '</table><p style="font:13px Arial,sans-serif"><a href="' + sheetUrl + '">Open all leads in the sheet</a></p>';
    var mail = { to: NOTIFY, subject: 'New enquiry: ' + (d.business || d.name) + ' (' + d.name + ')', htmlBody: html, name: 'Website enquiry' };
    if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(d.email || ''))) mail.replyTo = d.email;
    MailApp.sendEmail(mail);
  } catch (err) {}
}

function esc(v) {
  return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// trims long input and stops text starting with = + - @ from being treated as a formula (also keeps +91 numbers as text)
function clean(v) {
  v = String(v == null ? '' : v).slice(0, 5000);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function reply(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
