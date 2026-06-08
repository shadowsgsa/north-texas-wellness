import nodemailer from "nodemailer";


export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "darth3157@gmail.com",
                pass: "lbuqvxhflhrpnbpz",
            },
        });

        await transporter.sendMail({
            from: "darth3157@gmail.com",
            to: "darth3157@gmail.com",
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