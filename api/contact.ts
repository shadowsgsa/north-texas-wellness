import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  console.log("API HIT");
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("BODY:", req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }



  try {
    console.log("Creating transporter");
      const transporter = nodemailer.createTransport({
        host: "smtp.titan.email",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "john@patchmakershub.com",
            pass: "qwerty@123", 
        },
    });

    await transporter.verify();
  console.log("SMTP verified");

    await transporter.sendMail({
      from: "Website Contact Form" ,
      to: "john@patchmakershub.com",
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}