import { Email } from "@/components";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();
  const data = await resend.emails.send({
    from: `${name} <onboarding@resend.dev>`,
    to: ["admin@pilewest.com.au"],
    subject: subject,
    react: Email({ name: name, email: email, subject: subject, message: message }),
  });

  return Response.json(data);
}
