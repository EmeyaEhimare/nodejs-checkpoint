const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'victorymartial11@gmail.com',
        pass:''
    }
})

const mailOptions = {
    from: 'victorymartial11@gmail.com',
    to: 'victorymartial11@icloud.com',
    subject: 'Whats good?',
    text: 'Crazy innit'
}

transporter.sendMail(mailOptions,(err, info) => {
    if(err){
        return console.error(err)
    }
    else{
        console.log(`Email sent: ${info.response}`)
    }
})