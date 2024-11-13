import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  // Read the body of the request
  const formData = await readBody(event);

  try {
    const data = await resend.emails.send({
      from: "paulfitz99@action-sports-ranking.netlify.app",
      to: ["paulfitz99@gmail.com"],
      subject: `Message from ${formData.name}`,
      html: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    });

    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    return { error };
  }
});
