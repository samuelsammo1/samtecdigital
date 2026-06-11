import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error("Contact endpoint is not configured.");
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        source: "portfolio-contact-form",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("n8n webhook failed", res.status, body);
      throw new Error("Failed to submit form. Please try again later.");
    }

    return { ok: true };
  });
