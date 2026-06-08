import nodemailer from "nodemailer";


export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    try {

        const transporter = nodemailer.createTransport({
            host: "smtp.titan.email",
            port: 587,
            secure: false, 
            auth: {
                user: "john@patchmakershub.com",
                pass: "qwerty@123",
            },
        });

        await transporter.sendMail({
            from: "john@patchmakershub.com",
            to: "john@patchmakershub.com",
            subject: "Zaigham Portfolio | Contact Form",
            replyTo: email,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
        });

        return res.status(200).json({ success: true });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false });
    }
}