import nodemailer from "nodemailer";


export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    try {

        const transporter = nodemailer.createTransport({
            host: "smtp.titan.email",
            port: 465,
            secure: true, 
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

    }
    catch (error) {
        console.error("Nodemailer Error:", error);

        return res.status(500).json({
            success: false,
            error: error.message,
            code: error.code,
            response: error.response,
        });
    } 
    
    
    // catch (error) {
    //     console.log(error);
    //     return res.status(500).json({ success: false });
    // }
}