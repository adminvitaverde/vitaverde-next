import nodemailer from 'nodemailer';

export default async (req, res) => {
    try {
        if (req.method === 'POST') {
            const { email = '', vorname = '', name = '', telephone = "", message = '' } = req.body;

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email", // z.B. mail.infomaniak.com
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: "leanna.borer@ethereal.email", // generated ethereal user, z.B. admin@plankraft.ch, process.env.MAIL_USER
                    pass: "hkAqXDv9g79NKC1ZBf", // generated ethereal password, z.B. passwordAdmin, process.env.MAIL_PASS gi
                },
            });

            let html = `
                <html>
                    <body>
                        <h1>Anfrage über das Kontaktformular</h1>
                        <p>Anfrage von ${vorname} ${name}</p>
                        <p>Nachricht: ${message}</p>
                        <p>Telefon: ${telephone}</p>
                        <p>Email: ${email}</p>
                    </body>
                </html>
            `

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: `"${vorname} ${name}" <${email}>`, // sender address
                to: "info@vitaverde.ch", // list of receivers
                subject: "Kontaktanfrage", // Subject line
                text: `Anfrage von ${vorname} ${name}, Nachricht: ${message}, Telefon: ${telephone}, Email: ${email}`, // plain text body
                html, // html body
            });

            /* TESTING */
            
            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

            if (info.accepted.length > 0) {
                res.send({ message: `Vielen Dank ${vorname} ${name}. Wir werden uns sobald wie möglich bei Ihnen melden. `, success: true });
            } else {
                res.send({ message: `Leider ist ein Fehler aufgetreten. Versuchen Sie es später nochmals oder kontakieren Sie uns direkt per Mail info@vitaverde.ch`, success: false });
            }
        }
    } catch (error) {
        res.send({ message: `Leider ist ein Fehler aufgetreten. Versuchen Sie es später nochmals oder kontakieren Sie uns direkt per Mail info@vitaverde.ch`, success: false, error });
    }
}


/* Name	Loyal Beahan
Username	loyal63@ethereal.email (also works as a real inbound email address)
Password	hFDrAT6E7FSvyRn5cF */

