
DotEnv = require('dotenv-node');
new DotEnv();
const router = require('express').Router();
const path = require('path');
const exportToExcel = require('export-to-excel');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


// eport to excel route - creates excel spreadsheet
router.post('/', function (req, res) {

  let API_response = req.body;
  let user = req.headers.user;
  let today_date = new Date().toLocaleDateString();

  console.log('Sending email to users email: ', user);

  exportToExcel.exportXLSX({
    filename: 'KPI Report',
    sheetname: 'KPI Report',
    title: [
        {
            "fieldName": "brand",
            "displayName": "Brand",
            "cellWidth": 12
        },
        {
            "fieldName": "type",
            "displayName": "Type",
            "cellWidth": 12
        },
        {
            "fieldName": "campaign",
            "displayName": "Campaign",
            "cellWidth": 12
        },
        {
            "fieldName": "date",
            "displayName": "Date",
            "cellWidth": 15
        },
        {
            "fieldName": "headline",
            "displayName": "Headline",
            "cellWidth": 80
        },
        {
            "fieldName": "deployed",
            "displayName": "Deployed",
            "cellWidth": 12
        },
        {
            "fieldName": "recieved",
            "displayName": "Recieved",
            "cellWidth": 12
        },
        {
            "fieldName": "bounce",
            "displayName": "Bounce %",
            "cellWidth": 12
        },
        {
            "fieldName": "opens",
            "displayName": "Opens",
            "cellWidth": 12
        },
        {
            "fieldName": "unique_opens",
            "displayName": "Unique Opens",
            "cellWidth": 12
        },
        {
            "fieldName": "open_rate",
            "displayName": "Open Rate",
            "cellWidth": 12
        },
        {
            "fieldName": "clicks",
            "displayName": "Clicks",
            "cellWidth": 12
        },
        {
            "fieldName": "unique_clicks",
            "displayName": "Unique Clicks",
            "cellWidth": 12
        },
        {
            "fieldName": "click_to_open",
            "displayName": "Click To Open",
            "cellWidth": 12
        },
        {
            "fieldName": "ctr",
            "displayName": "CTR %",
            "cellWidth": 12
        }
      ],
    data: API_response
  });

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  // setup email data with unicode symbols
  let mailOptions = {
    from:  '"Omeda Reporting App" <'+process.env.EMAIL_ADDRESS+'>', // sender address
    // from:  '"Omeda Reporting App" <'+process.env.EMAIL_ADDRESS+'>', // sender address
    to: user,
    subject: 'KPI Report',
    attachments: [
      {   // file on disk as an attachment
        filename: 'KPI Report.xlsx',
        path: './KPI Report.xlsx'
      }
    ]
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.sendStatus(500);
      return console.log('nodemailer error: ', error);
    } else {
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.sendStatus(200);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
  });





});








module.exports = router;
