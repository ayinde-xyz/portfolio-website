import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, emailAddress, title, message } = body;
    const data = await resend.emails.send({
      from: "Your friend <ayindeabdulrahman16@gmail.com>",
      to: emailAddress,
      subject: `Hello ${name}`,
      text: `Hello ${name}, I am ${title} and I have a message for you: ${message}`,
      // react: EmailTemplate({ firstName: "John" }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
