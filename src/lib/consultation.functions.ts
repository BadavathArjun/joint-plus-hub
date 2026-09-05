import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const consultationSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  mobileNumber: z.string().trim().regex(/^(?:\+?91)?[6-9]\d{9}$/),
  preferredLocation: z.enum(["Nirmal", "Khanapur"]),
  preferredDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  concern: z.string().trim().min(10).max(1000),
  consentGiven: z.literal(true),
});

export const submitConsultation = createServerFn({ method: "POST" })
  .inputValidator((input) => consultationSchema.parse(input))
  .handler(async ({ data }) => {
    const requestedDate = new Date(`${data.preferredDate}T00:00:00Z`);
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    if (requestedDate < today) throw new Error("Please choose today or a future date.");
    const { createClient } = await import("@supabase/supabase-js");
    const url = process.env['SUPABASE_URL'];
    const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
    if (!url || !key) throw new Error("Consultation service is temporarily unavailable.");
    const client = createClient(url, key, { auth: { persistSession: false } });
    const { error } = await client.from("consultation_requests").insert({
      full_name: data.fullName,
      mobile_number: data.mobileNumber,
      preferred_location: data.preferredLocation,
      preferred_date: data.preferredDate,
      concern: data.concern,
      consent_given: data.consentGiven,
    });
    if (error) throw new Error("We couldn't submit your request. Please call the clinic instead.");
    return { success: true };
  });