import { AwsClient } from "aws4fetch";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const { name, email, company, project_type, budget, message } =
    await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const aws = new AwsClient({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    region: "eu-north-1",
  });

  const emailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    project_type ? `Project type: ${project_type}` : null,
    budget ? `Budget: ${budget}` : null,
    ``,
    `Message:`,
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const res = await aws.fetch(
    "https://email.eu-north-1.amazonaws.com/v2/email/outbound-emails",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        FromEmailAddress: "info@woodswebsites.com",
        Destination: { ToAddresses: ["info@woodswebsites.com"] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: `New enquiry from ${name} — woodswebsites.com` },
            Body: { Text: { Data: emailBody } },
          },
        },
      }),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    console.error("SES error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
