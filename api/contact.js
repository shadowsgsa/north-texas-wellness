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
                user: "bushraaziz@behavioralhealthnta.com",
                pass: "Behave12@",
            },
        });

        await transporter.sendMail({
            from: "bushraaziz@behavioralhealthnta.com",
            to: "bushraaziz@behavioralhealthnta.com",
            subject: "Behavioral Health | Contact Form",
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