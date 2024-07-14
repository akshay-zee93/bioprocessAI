"use server";
import { cookies } from "next/headers";
import { createClient } from "../utils/supabase/client";
import { sendEmail } from "./sendEmailAction";

export async function contactDetails(data) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { status } = await supabase.from("Contact_Us").insert(data);
  if (status === 201) {
    sendEmail(data, "Contact Details");
  }

  return status;
}
