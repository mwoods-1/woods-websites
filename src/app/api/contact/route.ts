import { AwsClient } from "aws4fetch";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, project_type, budget, message } =
      await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { env } = await getCloudflareContext({ async: true });
    const accessKeyId = (env as Record<string, string>).AWS_ACCESS_KEY_ID;
    const secretAccessKey = (env as Record<string, string>).AWS_SECRET_ACCESS_KEY;

    if (!accessKeyId || !secretAccessKey) {
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    const aws = new AwsClient({
      accessKeyId,
      secretAccessKey,
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
  } catch (e) {
    return NextResponse.json({ stage: "crash", error: String(e) }, { status: 500 });
  }
}
